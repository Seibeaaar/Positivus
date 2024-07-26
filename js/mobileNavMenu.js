import { toggleCSSClass } from "./utils.js";

const burgerMenu = document.querySelector('.header-burger');
const menuLines = document.querySelectorAll('.header-burger__line');

burgerMenu.addEventListener('click', () => {
    const isActive = burgerMenu.classList.contains('header-burger--active');

    toggleCSSClass(burgerMenu, 'header-burger--active');
    toggleCSSClass(menuLines.item(0), 'header-burger__line--top');
    toggleCSSClass(menuLines.item(1), 'header-burger__line--middle');
    toggleCSSClass(menuLines.item(2), 'header-burger__line--bottom');
});