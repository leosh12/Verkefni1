const button = document.getElementById("light-mode-toggle");

button.addEventListener('click', function() {
    // Toggles the class: if it's there, remove it. If it's not, add it.
    document.body.classList.toggle('light-mode');
});