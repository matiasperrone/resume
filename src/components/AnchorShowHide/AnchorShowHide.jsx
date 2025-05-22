"use client";

const AnchorShowHide = ({ className = "show-all", showClassName = false, children }) => {

    const toggleShowAll = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.parentElement.querySelectorAll('dd, a').forEach((elem) => elem.classList.toggle('show-all'));
    }

    return (
        <a href="#" className={`d-print-none ${showClassName ? className : ""}`} onClick={toggleShowAll}>{children}</a>
    );
}

export default AnchorShowHide;