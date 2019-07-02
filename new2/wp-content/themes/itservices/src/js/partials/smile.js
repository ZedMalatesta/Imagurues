let contactsButton = document.getElementById('contacts-btn');
// let smile = document.getElementById('smile');


contactsButton.addEventListener('mouseover', function() {
	window.dispatchEvent(new CustomEvent('hireus', {}))
});

contactsButton.addEventListener('touchstart', function() {
	window.dispatchEvent(new CustomEvent('hireus', {}))
});

contactsButton.addEventListener('mouseleave', function() {
	window.dispatchEvent(new CustomEvent('unhireus', {}))
});

contactsButton.addEventListener('touchend', function() {
	window.dispatchEvent(new CustomEvent('unhireus', {}))
});