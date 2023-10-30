"use client";
import { useState } from "react";

const ShowHide = ({show, children}) => {
    const [showing, setShowing] = useState(show);
    const toggle = () => {
        setShowing(!showing);
    }
    return (
        <>
            <div className="cursor-pointer" onClick={toggle}>{showing ? "Hide" : "Show"} older job experiences</div>
            <div className={showing ? "d-block" : "d-none"}>
                {children}
            </div>
        </>
    )
};
    
export default ShowHide;