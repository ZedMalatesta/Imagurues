//  ******  CONST  ******
const mandrillKey = 'Rptt_9PqlE-4w0i1gEtFxA';



let formButtons = document.querySelectorAll('.form-btn');
let closeBtn = document.querySelector('.form__close');
let contactForm = document.querySelector('.form');
let answer = document.querySelector('.form-answer');
let answerText = answer.querySelector('h2');

for (let i = 0; i < formButtons.length; i++) {
	formButtons[i].addEventListener('click', function(e) {
		e.stopImmediatePropagation();
		contactForm.classList.add('visible');
		contactForm.addEventListener('blur', function() {
			contactForm.classList.remove('visible');
		});
	});
}

closeBtn.addEventListener('click', function(e) {
	e.stopImmediatePropagation();
	contactForm.classList.remove('visible');
});

answer.querySelector('.form__close').addEventListener('click', function() {
	answer.classList.remove('visible');
});

// focus on textarea-container
let textarea = $(contactForm).find('.textarea-container textarea');

	textarea.on('focus', function(){
		$(this).parents('.textarea-container').addClass('focus');
	});

	textarea.blur(function(){
		$(this).parents('.textarea-container').removeClass('focus');
	});

$(contactForm).on('submit', function(e) {
	e.preventDefault();

	const submitButton = $(this).find('button[type="submit"]');
	const name    = this.elements['name'].value;
	const company = this.elements['company'].value;
	const email   = this.elements['email'].value;
	const phone   = this.elements['phone'].value;
	const what    = this.elements['what'].value;

	const fromEmail = 'it@imaguru.co';
	const fromName  = 'IT-services, imaguru.co';

	submitButton.addClass('preload');


	let clientMessage = JSON.stringify({

		'key' : mandrillKey,

		'message' : {
			'html'    : '\
				<h2 style="font-size: 20px; color: #444;">Dear ' + name + '</h2>\
				<p style="margin-bottom: 5px; font-size: 16px;">We received your message. We will answer you asap</p>\
				<p style="margin-top:10px; font-size: 14px; margin-bottom: 20px; font-style: italic">It won\'t be long! yeh, yeh, yeh :)</p>\
				<p style="font-size: 14px; color: #888;">Best regards. IT-services team, imaguru.co</p>\
			', // сверстанное письмо
			'subject' : 'IT-services order', // тема письма
			'from_email' : fromEmail,
			'from_name' : fromName,

			//recipients:
			'to' : [
				{
					'email' : email,
					'name'  : name,
					'type'  : 'to'
				}
			],

			"metadata": {
				"website": "it.service.co"
			},
		}

	});

	let itMessage = JSON.stringify({

		'key' : mandrillKey,

		'message' : {
			'html'    : '\
				<h2 style="font-size: 20px; color: #444;">New order from it.imaguru.co</h2>\
				<p style="margin-bottom: 10px; font-size: 16px;"><strong>Name: </strong>'+ name +'</p>\
				<p style="margin-bottom: 10px; font-size: 16px;"><strong>Company: </strong>'+ company +'</p>\
				<p style="margin-bottom: 10px; font-size: 16px;"><strong>Email: </strong>'+ email +'</p>\
				<p style="margin-bottom: 10px; font-size: 16px;"><strong>Phone: </strong>'+ phone +'</p>\
				<p style="margin-bottom: 20px; font-size: 16px;"><strong>Wishes: </strong>'+ what +'</p>\
				<p style="font-size: 12px; color: #888;">Best regards. ' + name + ', ' + company + '</p>\
			', // сверстанное письмо
			'subject' : 'IT-services order', // тема письма
			'from_email' : fromEmail,
			'from_name' : fromName,

			//recipients:
			'to' : [
				{
					'email' : 'it@imaguru.co',
					'name'  : 'IT department',
					'type'  : 'to'
				}
			],

			"metadata": {
				"website": "it.service.co"
			},
		}

	});


	// ******  ОТПРАВКА  ******

	// Отправляем письмо в IT Department
	sendMessage(itMessage, successItMessage, errorItMessage);


	// если все кул - говорим пользователю, что все ок и отправляем письмо ему, чтоб не волновался
	function successItMessage() {

		showNotification('success');
		sendMessage(clientMessage);

	};



	// если все плохо - говорим пользователю, что все плохо, и пусть попробует в другой раз
	function errorItMessage() {

		showNotification('error');

	}

	function showNotification(status) {

		submitButton.addClass('preload');
		let notification = status === 'success' ? 'Thank you! We will contact you very soon!' : 'Sorry! Something went wrong ...';

		contactForm.classList.remove('visible');
		answerText.innerHTML = notification;
		answer.classList.add('visible');

	}

	// Отправлялка, сообщение - json в строке, 2 колбека
	function sendMessage(message, success, error) {

		$.ajax( {

			type : 'POST',
			url  : 'https://mandrillapp.com/api/1.0/messages/send.json',
			data : message,
			dataType : 'json',

			success : function(data) {

				if ( data[0].reject_reason === null ) {
					if (typeof success === 'function') success();
				} else {
					if (typeof error === 'function') error();
				}

			},

			error : function(data) {
				if (typeof error === 'function') error();
			}

		});

	};
});

