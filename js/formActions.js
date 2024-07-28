const footerForm = document.querySelector('.footer-form');
const contactForm = document.querySelector('.contact-form');

footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    swal({
        title: "Thanks!",
        text: "You've subscribed to Positivus news",
        icon: "success"
    });
});

contact.addEventListener('submit', (e) => {
    e.preventDefault();
    swal({
        title: "Thanks!",
        text: "We'll reach out to you as soon as possible",
        icon: "success"
    });
});