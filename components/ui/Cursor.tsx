"use client";
import { useEffect, useRef } from "react";
export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let mx=0,my=0,rx=0,ry=0,raf=0;
    const mv=(e:MouseEvent)=>{
      mx=e.clientX;my=e.clientY;
      if(dot.current){dot.current.style.left=mx+"px";dot.current.style.top=my+"px";}
    };
    const tick=()=>{
      rx+=(mx-rx)*0.13;ry+=(my-ry)*0.13;
      if(ring.current){ring.current.style.left=rx+"px";ring.current.style.top=ry+"px";}
      raf=requestAnimationFrame(tick);
    };
    raf=requestAnimationFrame(tick);
    window.addEventListener("mousemove",mv);
    return()=>{window.removeEventListener("mousemove",mv);cancelAnimationFrame(raf);};
  },[]);
  return(<>
    <div ref={dot}  className="cur-dot"  aria-hidden="true"/>
    <div ref={ring} className="cur-ring" aria-hidden="true"/>
  </>);
}
