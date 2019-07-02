;(function($, Snap){

	// ====================================
	// UTILS
	// ====================================
	let animate = function(obj, index, start, end, duration, easing, fn, cb) {
		obj.animations = obj.animations || [];
		if (obj.animations[index]) obj.animations[index].stop();
		obj.animations[index] = Snap.animate(start, end, fn, duration, easing, cb);
	};


	// Class Vec2
	class Vec2 {

		constructor(x = 0, y = 0) {
			this.x = x;
			this.y = y;
		}

		add(vec) {
			this.x += vec.x;
			this.y += vec.y;
		}

		copy() {
			return new Vec2(this.x, this.y);
		}

	}
	// Vec2 END



	// =================================
	// Class World
	// =================================
	class PaperWorld {
		constructor(selector) {
			this.paper = Snap(selector);
			this.paper.attr({
				width: 320,
				height: 320
			});
			this.$ = $(selector);

			this.objects = [];
			this.mouse   = new Vec2();

			this.bindEvents();
			animationFrames.push(() => {this.tick()})
			// this.tick();
		}

		addObject(constructor, config){
			config.world = this;
			this.objects.push(new constructor(config));
		}

		tick() {
			this.update();
			this.draw();
		}

		update(){
			this.objects.forEach((object) => {
				object.update();
			});
		}

		draw(){
			this.objects.forEach((object) => {
				object.draw();
			});
		}

		bindEvents() {
			$('.contacts').on('mousemove touchmove', (e) => {
				let coords = new Vec2();

				if(e.originalEvent.touches){
					coords.x = e.originalEvent.touches[0].pageX;
					coords.y = e.originalEvent.touches[0].pageY;
				} else {
					coords.x = e.pageX;
					coords.y = e.pageY;
				}

				[this.mouse.x, this.mouse.y] = [
					coords.x - this.$.offset().left,
					coords.y - this.$.offset().top
				];
			});
		}
	}

	// object
	class _Object {
		constructor(config) {
			this.loc = config.loc || new Vec2;
			this.home = this.loc.copy();
			this.speed = config.speed || new Vec2;

			this.world = config.world;
		}

		update(){
			this.loc.add(this.speed);
		}
	}

	// =================================
	// Class EYE
	// =================================
	class Eye extends _Object {
		constructor(config) {
			super(config);

			config.ringConfig.eye = config.appleConfig.eye = this;

			this.parts = [new Ring(config.ringConfig), new Apple(config.appleConfig)];
		}

		update(){
			this.parts.forEach((object) => {
				object.update();
			});
		}

		draw(){
			this.parts.forEach((object) => {
				object.draw();
			});
		}
	}

	// =================================
	// ring
	// =================================
	class Ring extends _Object {
		constructor(config) {
			super(config);
			this.eye = config.eye;
			this.world = this.eye.world;
			this.paper = this.eye.world.paper;

			this.create(config);
		}

		create(config) {
			this.ring = this.paper.circle(this.eye.loc.x, this.eye.loc.y, config.r)
				.attr({
					'fill': 'transparent',
					'stroke': '#fff',
					'strokeWidth': 4,
				});
		}

		update(){
		}

		draw(){}
	}

	// =================================
	// Apple
	// =================================
	class Apple extends _Object {
		constructor(config) {
			super(config);

			this.eye = config.eye;
			this.world = this.eye.world;
			this.paper = this.eye.world.paper;

			this.offset = new Vec2(0,0);
			this.circleTransformed = new Vec2(0,0);

			this.create(config);
		}

		create(config) {
			this.circle = this.paper.circle(this.eye.loc.x, this.eye.loc.y, config.r)
				.attr({
					'fill': '#fff',
					'strokeWidth': 0,
				})
				.drag(
					(dx, dy, x, y) => {
						this.circleTransformed = {x: dx + this.offset.x, y: dy + this.offset.y};
					}, //onmove

					() => {
						this.circle.animations = this.circle.animations || [];
						if (this.circle.animations['return-to-home-x']) this.circle.animations['return-to-home-x'].stop();
						if (this.circle.animations['return-to-home-y']) this.circle.animations['return-to-home-y'].stop();
					}, //onstart

					(dx, dy) => {
						this.offset.x = this.circleTransformed.x;
						this.offset.y = this.circleTransformed.y;
						this.returnToStart();
					});//onend
		}

		returnToStart() {
			animate(this.circle, 'return-to-home-x', this.circleTransformed.x, 0, 1000, mina.elastic,
				(val) => { this.circleTransformed.x = this.offset.x = val;});

			animate(this.circle, 'return-to-home-y', this.circleTransformed.y, 0, 1000, mina.elastic,
				(val) => { this.circleTransformed.y = this.offset.y = val;});
		};

		update() {

			// move apple with mouse cursor
			if (this.world.mouse.x && this.world.mouse.y) {
				let orbitRadius = 22;
				let dx = (this.world.mouse.x - this.eye.home.x) / 20;
				let dy = (this.world.mouse.y - this.eye.home.y) / 20;

				if (Math.abs(dx) > orbitRadius && dx !== 0) dx = orbitRadius * dx/Math.abs(dx);
				if (Math.abs(dy) > orbitRadius && dy !== 0) dy = orbitRadius * dy/Math.abs(dy);

				this.loc.x = this.eye.loc.x + dx;
				this.loc.y = this.eye.loc.y + dy;
			}
		}

		draw(){
			this.circle.attr({
				cx: this.loc.x || this.eye.loc.x,
				cy: this.loc.y || this.eye.loc.y
			})
			.transform(`t${this.circleTransformed.x || 0},${this.circleTransformed.y || 0}`);
		}
	}



	// =================================
	// mouth
	// =================================
	class Mouth extends _Object {
		constructor(config) {
			super(config);

			this.points = config.points;
			this.paper = this.world.paper;

			this.topArc = {
				start: new Vec2(-40, 0),
				finish: new Vec2(40, 0),
				rx: 200,
				ry: 200
			};

			this.topArc.ryClosed = this.topArc.ry;
			this.topArc.ryOpened = 0;

			this.bottomArc = {
				start: new Vec2(40, 0),
				finish: new Vec2(-40, 0),
				rx: 40,
				ry: 0
			};

			this.bottomArc.ryClosed = this.bottomArc.ry;
			this.bottomArc.ryOpened = 50;

			this.create(config);

			this.bindEvents();
		}

		create(config){
			this.path = this.paper.path("")
				.attr({
					strokeWidth: 3,
					stroke: '#fff',
					fill: 'brown'
				});
		}

		update(){

		}

		draw(){
			let pathString = `M ${this.loc.x + this.topArc.start.x},${this.loc.y + this.bottomArc.start.y}`;
			pathString += `A${this.topArc.rx},${this.topArc.ry},0,0,1,${this.loc.x + this.topArc.finish.x},${this.loc.y + this.topArc.finish.y}`;
			pathString += `A${this.bottomArc.rx},${this.bottomArc.ry},0,0,1,${this.loc.x + this.bottomArc.finish.x},${this.loc.y + this.bottomArc.finish.y}`;

			this.path.attr({
				d: pathString
			})
		}

		funny() {
			animate(this.topArc, 'mouth-animation', this.topArc.ry, this.topArc.ryOpened, 200, mina.easeinout, (val) => {
				this.topArc.ry = val;
			});

			animate(this.bottomArc, 'mouth-animation', this.bottomArc.ry, this.bottomArc.ryOpened, 300, mina.easeinout, (val) => {
				this.bottomArc.ry = val;
			});
		}

		sad() {
			animate(this.topArc, 'mouth-animation', this.topArc.ry, this.topArc.ryClosed, 200, mina.easeinout, (val) => {
				this.topArc.ry = val;
			});

			animate(this.bottomArc, 'mouth-animation', this.bottomArc.ry, this.bottomArc.ryClosed, 300, mina.easeinout, (val) => {
				this.bottomArc.ry = val;
			});
		}


		bindEvents() {
			$(window).on('hireus', () => {
				this.funny();
			});

			$(window).on('unhireus', () => {
				this.sad();
			});

		}
	}


	// =================================
	// Code

	let world = new PaperWorld('#smile');

	let ringConfig = {
		r: 45,

	};
	let appleConfig = {
		r: 18,
	};

	let leftEyeConfig = {
		loc: new Vec2(80, 100),
		ringConfig: ringConfig,
		appleConfig: appleConfig
	}

	let rightEyeConfig = {
		loc: new Vec2(240, 100),
		ringConfig: ringConfig,
		appleConfig: appleConfig
	}

	let mouthConfig = {
		loc: new Vec2(160,200),
	}




	world.addObject(Eye, leftEyeConfig);
	world.addObject(Eye, rightEyeConfig);
	world.addObject(Mouth, mouthConfig);


}($, Snap));

