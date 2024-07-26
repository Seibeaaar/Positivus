import { toggleCSSClass } from "./utils.js";

const INACTIVE_CLASS = 'process-item__info--inactive';
const GRAY_BACKGROUND_CLASS = 'gray-background';
const PRIMARY_BACKGROUND_CLASS = 'primary-background';

const PLUS_ICON_SRC = '/assets/icons/Plus.svg';
const MINUS_ICON_SRC = '/assets/icons/Minus.svg';


const workProcessItems = document.querySelectorAll('.process-item');

const handleWorkProcessClick = (event, container) => {
    if (!event.target || !['toggle-button', 'toggle-icon'].includes(event.target.accessKey)) return;
    const processInfo = container.querySelector('.process-item__info');
    toggleCSSClass(processInfo, INACTIVE_CLASS);

    const includesInactiveClass = processInfo.classList.contains(INACTIVE_CLASS);

    if (includesInactiveClass) {
        processInfo.style.height = 0;
    } else {
        const infoText = processInfo.firstElementChild;
        const textHeight = infoText.scrollHeight;
        processInfo.style.height = `${textHeight + 40}px`;
    }

    if (event.target.accessKey === 'toggle-icon') {
        event.target.src = includesInactiveClass ? PLUS_ICON_SRC : MINUS_ICON_SRC;
    } else {
        const toggleIcon = event.target.firstElementChild;
        toggleIcon.src = includesInactiveClass ? PLUS_ICON_SRC : MINUS_ICON_SRC;
    }

    toggleCSSClass(container, GRAY_BACKGROUND_CLASS, PRIMARY_BACKGROUND_CLASS);
};

workProcessItems.forEach(item => item.addEventListener('click', (e) => handleWorkProcessClick(e, item)));