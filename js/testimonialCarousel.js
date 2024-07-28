const NUMBER_OF_SLIDES = 6;
const ACTIVE_DOT_SRC = '/assets/icons/DotActive.svg';
const DOT_SRC = '/assets/icons/Dot.svg';

const DISABLED_ARROW_SRC = '/assets/icons/ArrowDisabled.svg';
const ACTIVE_ARROW_SRC = '/assets/icons/ArrowWhite.svg';

const leftArrow = document.querySelector('.carousel-controller__left');
const rightArrow = document.querySelector('.carousel-controller__right');
const statusDots = document.querySelectorAll('.carousel-controller__dot');

const carousel = document.querySelector('.carousel');

let currentSlide = 1;
let leftOffset = 0;

const selectOffset = () => {
    const screenWidth = window.innerWidth;
    switch (true) {
        case screenWidth < 992:
            return 80;
        case screenWidth < 1200:
            return 120;
        default:
            return 240;
    }
}

const handleLeftClick = () => {
    if (currentSlide === 1) return;
    const [oldDot, newDot] = [statusDots.item(currentSlide - 1), statusDots.item(currentSlide - 2)];
    oldDot.src = DOT_SRC;
    newDot.src = ACTIVE_DOT_SRC;

    if (rightArrow.classList.contains('controller--disabled')) {
        rightArrow.classList.remove('controller--disabled');
        rightArrow.src = ACTIVE_ARROW_SRC;
    }

    if (currentSlide === 2) {
        leftArrow.src = DISABLED_ARROW_SRC;
        leftArrow.classList.add('controller--disabled');
    };

    leftOffset += (window.innerWidth - selectOffset());
    carousel.style.left = `${leftOffset}px`;
    currentSlide -= 1;
};

leftArrow.addEventListener('click', handleLeftClick);

const handleRightClick = () => {
    if (currentSlide === NUMBER_OF_SLIDES) return;
    const [oldDot, newDot] = [statusDots.item(currentSlide - 1), statusDots.item(currentSlide)];
    oldDot.src = DOT_SRC;
    newDot.src = ACTIVE_DOT_SRC;

    if (leftArrow.classList.contains('controller--disabled')) {
        leftArrow.classList.remove('controller--disabled');
        leftArrow.src = ACTIVE_ARROW_SRC;
    }

    if (currentSlide === NUMBER_OF_SLIDES - 1) {
        rightArrow.src = DISABLED_ARROW_SRC;
        rightArrow.classList.add('controller--disabled');
    };
    leftOffset -= (window.innerWidth - selectOffset());
    carousel.style.left = `${leftOffset}px`;
    currentSlide += 1;
};

rightArrow.addEventListener('click', handleRightClick);

