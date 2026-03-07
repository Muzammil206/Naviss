"use client";
import { useEffect, useRef, ReactNode } from "react";
export default function SR({ children, delay=0, className="" }:{ children:ReactNode; delay?:number; className?:string; }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting){setTimeout(()=>el.classList.add("in"),delay);obs.unobserve(el);}
    },{threshold:0.08});
    obs.observe(el);
    return()=>obs.disconnect();
  },[delay]);
  return <div ref={ref} className={`sr ${className}`}>{children}</div>;
}
