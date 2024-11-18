"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import HamburgerPop from "./HamburgerPop";
import { TransitionLinkCss } from "@/utils/TransitionLinkCss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Header() {
  gsap.registerPlugin(ScrollTrigger); 
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Manage animation delay for exit
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true); // Show pop-up
    } else if (isAnimating) {
      const timeout = setTimeout(() => setIsAnimating(false), 500); // Delay to match animation duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed z-50 flex h-20 w-full items-center justify-between px-[20px] mix-blend-exclusion md:px-10">
        <TransitionLinkCss href="/" className="h-[25px] w-[97px]" setIsOpen={setIsOpen}>
          <Image src={"/logo.avif"} width={97} height={25} alt="logo image" className="h-full w-full" />
        </TransitionLinkCss>
        <div className="relative flex aspect-square w-10 cursor-pointer flex-col justify-center gap-[12px]" onClick={() => setIsOpen(!isOpen)}>
          <div className={`h-[2px] w-full bg-primary transition-transform duration-300 ${isOpen ? "absolute rotate-45" : ""}`} />
          <div className={`h-[2px] w-full bg-primary transition-transform duration-300 ${isOpen ? "absolute -rotate-45" : ""}`} />
        </div>
      </nav>
      {isAnimating && <HamburgerPop isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
