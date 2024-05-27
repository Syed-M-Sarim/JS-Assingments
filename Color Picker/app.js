document.addEventListener("DOMContentLoaded", function() {
    var colorPicker = document.getElementById('color-picker');
    var colorPreview = document.getElementById('color-preview');

    colorPicker.addEventListener('click', function(event) {
        if (event.target.classList.contains('color')) {
            colorPreview.style.backgroundColor = event.target.style.backgroundColor;
        }
    });
});
