'use strict';

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    babel = require('gulp-babel'),
    gulpPath = require('path'),
    sourcemaps = require('gulp-sourcemaps');


// array of postcss plugins
var plugins = [
    require('postcss-easy-import'),
    require('postcss-cssnext')({
        features: {
            autoprefixer: false
        }
    }),
    require('cssnano')()
];

// define source & build paths
var path = {
    build: {
        html: 'assets/',
        js: 'assets/js/',
        css: 'assets/style/',
        img: 'assets/img/',
        fonts: 'assets/fonts/',
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/style/main.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        svg: 'src/img/svg_sprite/*.*',
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/partials/*.js',
        style: 'src/style/**/*.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

// browsersync config
// var config = {
//     server: {
//         baseDir: "./assets"
//     },
//     tunnel: false,
//     host: 'localhost',
//     port: 8080
// };

var config = {
    host: 'localhost',
    port: 9000,
    proxy: 'it.dev-imaguru-co'
};

// browsersync task
gulp.task('webserver', function() {
    browserSync(config);
});

// clean task
gulp.task('clean', function(cb) {
    rimraf(path.clean, cb);
});

// html build task
gulp.task('html:build', function() {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({ stream: true }));
});


gulp.task('coffee:build', function(){
    gulp.src(path.src.coffee)
        .pipe(coffee().on('error', function(){
            console.log('###########################\r\n#####   coffee error   ####\r\n###########################');
        }))
        .pipe(gulp.dest(path.build.coffee));
});


// js build task
gulp.task('js:build', function() {
    setTimeout(function(){
        gulp.src(path.src.js)
            .pipe(sourcemaps.init())
            .pipe(rigger())
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(path.build.js))
            .pipe(reload({ stream: true }));
    }, 100)
});

// styles build
gulp.task('style:build', function() {
    return gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({ stream: true }));
})

// // sass build task
// gulp.task('style:build', function () {
//     gulp.src(path.src.style)
//         .pipe(sass({
//             includePaths: ['src/style/'],
//             outputStyle: 'compressed',
//             sourceMap: true,
//             errLogToConsole: true
//         }))
//         .pipe(prefixer({
//           browsers: ['last 15 versions'],
//           cascade: false
//         }))
//         .pipe(cssmin())
//         .pipe(gulp.dest(path.build.css))
//         .pipe(reload({stream: true}));
// });

// image minfy task
gulp.task('image:build', function() {
    gulp.src(path.src.img)
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({ plugins: [{ removeViewBox: false }] })
        ]))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({ stream: true }));
});

// fonts task
gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

// svg sprites task
gulp.task('svgstore', function() {
    return gulp
        .src('src/img/svg_sprite/*.svg')
        .pipe(svgmin(function(file) {
            var prefix = gulpPath.basename(file.relative, gulpPath.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('src/img'));
});


// default task
gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build',
]);

// watch task
gulp.task('watch', function() {
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });

    watch([path.watch.style], function(event, cb) {
        setTimeout(function() {
            gulp.start('style:build');
        }, 300);
    });

    watch([path.watch.js, path.src.js], function(event, cb) {
        setTimeout(function() {
            gulp.start('js:build');
        }, 300);
    });

    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });

    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);