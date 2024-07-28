const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
        scrollTopBtn.classList.remove('scroll-top--inactive');
    } else {
        scrollTopBtn.classList.add('scroll-top--inactive');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
})