var tooltips = document.querySelectorAll('.tooltip span');

window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;

        var img = tooltips[i].querySelector('img');
        if (img) {
            var aspectRatio = img.naturalWidth / img.naturalHeight;
            img.style.height = (500 / aspectRatio) + 'px';
        }
    }
};
