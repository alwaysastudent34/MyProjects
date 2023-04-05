const mouseEvent = document.querySelector('.mouseEvent');
mouseEvent.addEventListener('mousemove', mouse);
function mouse(e) {
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";
    if (e.x > 800) {
        document.body.style.filter = "blur(10px)"

    }
    else {
        document.body.style.filter = "none"
    }
}