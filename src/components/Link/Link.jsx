"use client";

export default function Link({href, text}) {
    if (!href) return text ?? null;

    return <a href={href}>{text}</a>;
};