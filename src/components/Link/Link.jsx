"use client";
import dynamic from "next/dynamic";

const Link = ({href, text}) => {
    if (!href) return text ?? null;

    return <a href={href}>{text}</a>;
};

export default dynamic(() => Promise.resolve(Link), {
    ssr: false,
});
  