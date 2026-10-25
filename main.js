const button = document.getElementById("light-mode-toggle");

button.addEventListener("click", function() {

    if (document.body.style.backgroundColor === 'rgb(51, 51, 51)' || document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'blue';
        document.getElementsByClassName("title").style.color = 'black';
} else {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'rgb(187, 187, 96)';
}
})