const works = document.querySelectorAll('.works__item');
const nextBtns = document.querySelectorAll('.js-next-button');
const prevBtns = document.querySelectorAll('.js-prev-button');
let prev = 0;
let current = 0;
works[current].classList.add('works__item--active');

function workNext() {
    prev = current;
    if (current !== works.length - 1) {
        current++;
        works[prev].classList.remove('works__item--active');
        works[current].classList.add('works__item--active');
    } else {
        current = 0;
        works[prev].classList.remove('works__item--active');
        works[current].classList.add('works__item--active');
    }
}

function workPrev() {
    prev = current;
    if (current !== 0) {
        current--;
        works[prev].classList.remove('works__item--active');
        works[current].classList.add('works__item--active');
    } else {
        current = works.length - 1;
        works[prev].classList.remove('works__item--active');
        works[current].classList.add('works__item--active');
    }
}
prevBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        workPrev();
    })
})
nextBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        workNext();
    })
})
