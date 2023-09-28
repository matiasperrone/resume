import classes from "./Download.module.scss";

const Download = ({href, children, name = "resume.pdf"}) => {
    if (!href) return text ?? null;

    return <a href={href} download={name}  className={classes.download}>{children}</a>;
};

export default Download;