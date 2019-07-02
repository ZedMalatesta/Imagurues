if (document.querySelector('.portfolio__list') !== "undefined") {
    let items = document.querySelectorAll('.portfolio__item');
    for (let i = 0; i < items.length; i++) {
        if (items[i].style.backgroundColor == '') {
            items[i].querySelector('p').style.color = '#000000';
        }
    }
}