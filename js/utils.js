export const toggleCSSClass = (e, className, alternative) => {
    const classNameUsed = e.classList.contains(className);
    classNameUsed ? e.classList.remove(className) : e.classList.add(className);

    if (!!alternative) {
        classNameUsed ? e.classList.add(alternative) : e.classList.remove(alternative);
    }
};