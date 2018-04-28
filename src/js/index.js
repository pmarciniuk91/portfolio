const moveTop = document.querySelector('.move-top');
let isScrolled = false;

function onScroll() {
    if (isScrolled) {
        moveTop.classList.add('move-top--active');
    } else {
        moveTop.classList.remove('move-top--active');
    }
}
document.addEventListener('scroll', onScroll);
window.addEventListener('scroll', () => {
    isScrolled = window.scrollY > 100 ? true : false;
});
