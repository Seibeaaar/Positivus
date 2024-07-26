import { toggleCSSClass } from "./utils.js";

const burgerMenu = document.querySelector('.header-burger');
const menuLines = document.querySelectorAll('.header-burger__line');
const nav = document.querySelector('.mobile-navigation');
const overlay = document.querySelector('.mobile-navigation__overlay');
const navLinks = nav.querySelectorAll('a');

const toggleNavMenu = () => {
    toggleCSSClass(burgerMenu, 'header-burger--active');
    toggleCSSClass(menuLines.item(0), 'header-burger__line--top');
    toggleCSSClass(menuLines.item(1), 'header-burger__line--middle');
    toggleCSSClass(menuLines.item(2), 'header-burger__line--bottom');
    const isNavOpen = nav.classList.contains('mobile-navigation--active');
    if (!isNavOpen) {
        document.body.style.overflow = 'hidden';
        nav.style.height = `${nav.scrollHeight + 80}px`;
    } else {
        document.body.style.overflow = 'auto';
        nav.style.height = 0;
    }
    toggleCSSClass(nav, 'mobile-navigation--active', 'mobile-navigation--inactive');
    toggleCSSClass(overlay, 'mobile-navigation__overlay--active');
}

burgerMenu.addEventListener('click', toggleNavMenu);
navLinks.forEach(link => link.addEventListener('click', toggleNavMenu));