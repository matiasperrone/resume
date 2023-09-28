const Download = ({href, children, name = "resume.pdf"}) => {
    if (!href) return text ?? null;

    return <a href={href} download={name}>{children}</a>;
};

export default Download;