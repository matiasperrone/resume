"use client";

const AnchorShowHide = ({ className = "show-all", showClassName = false, children }) => {

  const toggleShowAll = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.parentElement.querySelectorAll('dd, a').forEach((elem) => elem.classList.toggle('show-all'));
  }

  return (
    <a href="#" className={`text-capitalize ${showClassName ? className : ""} d-print-none`} onClick={toggleShowAll}>
      {children}
    </a>
  );
}

export default AnchorShowHide;