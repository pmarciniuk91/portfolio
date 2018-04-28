const mobileBtn = document.querySelector('.mobile-menu__button');
const mobileNav = document.querySelector('.mobile-menu__nav');
const mobileIcon = document.querySelector('.mobile-menu__button--icon');
const mobileLinks = document.querySelectorAll('.mobile-menu__nav--link');
let isShown = false;

function mobileMenu() {
    if (isShown) {
        mobileNav.classList.remove('mobile-menu__nav--active');
        mobileIcon.classList.remove('mobile-menu__button--icon-active');
        isShown = false;
    } else {
        mobileNav.classList.add('mobile-menu__nav--active');
        mobileIcon.classList.add('mobile-menu__button--icon-active');
        isShown = true;
    }
}

mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('mobile-menu__nav--active');
        mobileIcon.classList.remove('mobile-menu__button--icon-active');
        isShown = false;
    })
})

mobileBtn.addEventListener('click', mobileMenu);
document.addEventListener('click', (e) => {
    let isClickedInside = mobileNav.contains(e.target),
        isClickedIcon = mobileBtn.contains(e.target);
    if(!isClickedIcon) {
        if (!isClickedInside) {
            if(mobileNav.classList.contains('mobile-menu__nav--active')) {
                mobileNav.classList.remove('mobile-menu__nav--active');
                mobileIcon.classList.remove('mobile-menu__button--icon-active');
                isShown = false;
            } else {
                return;
            }
        }
    } 
})
