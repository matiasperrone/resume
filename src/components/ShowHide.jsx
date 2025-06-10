"use client";
import { useState } from "react";
import Translate from "./Translate";

const ShowHide = ({ show, children, text }) => {
  const [showing, setShowing] = useState(show);
  const toggle = () => {
    setShowing(!showing);
  }
  return (
    <>
      <article className="cursor-pointer d-print-none pb-3" onClick={toggle}>
        <Translate text={showing ? "Hide" : "Show"} /> {text}
      </article>
      <div className={`d-print-none ${showing ? "" : "d-none"}`}>
        {children}
      </div>
      <div className="d-print-block d-none mt-4">
                See more at https://resume.matiasperrone.com/ or <br />
                In my LinkedIn Profile at https://www.linkedin.com/in/matiasperrone/
      </div>
    </>
  )
};

export default ShowHide;