"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { TransitionLinkCss } from "@/utils/TransitionLinkCss";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  { name: "Reviews", href: "/reviews" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { Icon: BsInstagram, href: "https://www.instagram.com/theagency.co/", label: "Instagram" },
  { Icon: BsLinkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
  { Icon: BsTwitter, href: "https://twitter.com/", label: "Twitter" },
  { Icon: BsGithub, href: "https://github.com/", label: "Github" },
];

export default function Footer() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const trianglesRef = useRef<SVGSVGElement[]>([]);

  useGSAP(() => {
    if (!textRef.current) return;

    // Clone text element once and cache it
    const movingText = textRef.current;
    const cloneMovingText = movingText.cloneNode(true) as HTMLElement;
    movingText.parentElement?.appendChild(cloneMovingText);

    // Calculate width once
    const width = movingText.clientWidth;
    const elements = [movingText, cloneMovingText];

    // Create and configure timeline
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
    });

    // Animate
    tl.to(elements, {
      x: -width,
      duration: 10,
      ease: "none",
    });

    // Setup triangles
    trianglesRef.current.forEach((triangle, index) => {
      const angle = (index / 6) * Math.PI * 2;
      const radius = 126;

      gsap.set(triangle, {
        x: Math.cos(angle) * radius + 2,
        y: Math.sin(angle) * radius + 2,
        rotation: (angle * 180) / Math.PI,
      });
    });

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Footer Top */}
      <div className="w-full bg-black px-5 md:px-10">
        <div className="wf relative flex h-[65vh] w-full flex-col items-center justify-center gap-14 bg-[#ff7738]">
          {/* Let's Talk Button */}
          <Link href="/contact" className="flex h-[230px] w-[230px] scale-90 items-center justify-center rounded-full border md:scale-100">
            <div className="relative z-20 flex h-[214px] w-[214px] items-center justify-center overflow-hidden rounded-full border-[3px] transition-all duration-1000 hover:bg-primary">
              <span className="font-ClashDisplay text-xl">Let's Talk</span>
              <div className="absolute inset-0 transition-all duration-1000 hover:scale-75">
                {[...Array(6)].map((_, index) => (
                  <svg 
                    key={index} 
                    className="triangle absolute" 
                    viewBox="0 0 100 100"
                    ref={(el) => {
                      if (el) trianglesRef.current[index] = el;
                    }}
                  >
                    <polygon points="50,15 90,85 10,85" fill="black" stroke="white" strokeWidth="1.2" />
                  </svg>
                ))}
              </div>
            </div>
          </Link>

          {/* Contact Info */}
          <div className="flex w-full flex-col items-center justify-center gap-3 font-ClashDisplay">
            <Link href="mailto:finnegan@email.com" className="text-[20px] font-bold md:text-[30px] xl:text-[40px] hover:underline">
              finnegan@email.com
            </Link>
            <div className="flex w-full flex-col items-center justify-center gap-5 text-[15px] md:flex-row">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  className="flex items-center gap-2 transition-colors duration-300 hover:text-primary"
                  href={href}
                >
                  <Icon size={20} />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Border Corners */}
          {['tl', 'tr', 'br', 'bl'].map((position) => (
            <div
              key={position}
              className={`absolute h-[40px] w-[40px] border-black
                ${position[0] === 't' ? 'top-5 md:top-10' : 'bottom-5 md:bottom-10'}
                ${position[1] === 'l' ? 'left-5 md:left-10' : 'right-5 md:right-10'}
                ${position === 'tl' ? 'border-l border-t' :
                  position === 'tr' ? 'border-r border-t' :
                  position === 'br' ? 'border-b border-r' :
                  'border-b border-l'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex w-full flex-col bg-black text-white gap-20">
        <ul className="flex w-full items-center flex-col justify-center gap-6 md:gap-10 pt-[100px] font-ClashDisplay text-[15px] md:flex-row">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`${pathname === item.href ? "text-orange" : ""} transition-colors duration-300 hover:text-orange hover:underline`}
            >
              <TransitionLinkCss href={item.href}>{item.name}</TransitionLinkCss>
            </li>
          ))}
        </ul>
        <div className="flex w-full items-center overflow-hidden font-ClashDisplay tracking-[-0.04em] text-primary">
          <p ref={textRef} className="moving-text text-nowrap text-[240px] leading-[1em] -mb-[50px]">Finnegan Monroe</p>
        </div>
      </div>
    </div>
  );
}
