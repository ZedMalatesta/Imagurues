let items = document.querySelectorAll('.process-list li');
items.forEach(function(i) {
    i.addEventListener('mouseover', function(e) {
        document.querySelectorAll('.process-list li').forEach(function(i) {
            i.classList.remove('active');
        });
        e.target.classList.add('active');
    }, false);
})