"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const awards = [
  {
    title: "Sony World Photography Awards",
    year: 2024,
    image: "/rewards1.avif",
  },
  {
    title: "World Press Photo Contest",
    year: 2023,
    image: "/rewards2.avif",
  },
  {
    title: "National Geographic Photo Contest",
    year: 2020,
    image: "/rewards3.avif",
  },
  {
    title: "Leica Oskar Barnack Award",
    year: 2017,
    image: "/rewards4.avif",
  },
  {
    title: "Moscow International Foto Awards (MIFA)",
    year: 2019,
    image: "/rewards5.avif",
  },
  {
    title: "Magnum Photography Awards",
    year: 2015,
    image: "/rewards6.avif",
  },
];

export default function AwardsComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    (_, safeContext) => {
      const awardImages = containerRef.current?.querySelectorAll(".awards-image");
      if (!awardImages || !safeContext) return;

      //create a store map to store the handlers
      const handlers = new Map();

      //loop through the images
      awardImages.forEach((image, index) => {
        let isExpanded = false;

        //initial the first image
        if (index === 0) {
          gsap.set(image, {
            opacity: 1,
            position: "relative",
            top: 0,
            left: 0,
            height: 525,
            width: "100%",
          });
          isExpanded = true;
        }

        //hover in
        const hoverIn = safeContext(() => {
          gsap.to(image, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.inOut",
          });
        });

        //hover out
        const hoverOut = safeContext(() => {
          if (!isExpanded) {
            gsap.to(image, {
              opacity: 0,
              duration: 0.3,
              ease: "power2.inOut",
            });
          }
        });

        //click
        const handleClick = safeContext(() => {
          const props = isExpanded
            ? { top: -80, position: "absolute", left: -160, height: 209, width: 150 }
            : { position: "relative", top: 0, left: 0, height: 525, width: "100%" };

          gsap.to(image, {
            ...props,
            duration: 0.3,
            ease: "power2.inOut",
          });

          isExpanded = !isExpanded;
        });

        //store the handlers
        handlers.set(index, { handleClick, hoverIn, hoverOut });

        //add the handlers to the image's parent element
        const parent = image.parentElement;
        if (parent) {
          parent.addEventListener("click", handleClick);
          parent.addEventListener("mouseenter", hoverIn);
          parent.addEventListener("mouseleave", hoverOut);
        }
      });

      return () => {
        //remove the handlers from the image's parent element
        awardImages.forEach((image, index) => {
          const { handleClick, hoverIn, hoverOut } = handlers.get(index) || {};
          const parent = image.parentElement;
          if (parent) {
            parent.removeEventListener("click", handleClick);
            parent.removeEventListener("mouseenter", hoverIn);
            parent.removeEventListener("mouseleave", hoverOut);
          }
        });
        handlers.clear();
      };
    },
    { scope: containerRef, dependencies: [] },
  );
  return (
    <section
      ref={containerRef}
      className="relative flex w-full flex-col items-center justify-center gap-[30px] px-5 pb-[30px] pt-[30px] text-primary md:px-10 md:pb-[100px] md:pt-[150px]"
    >
      <div className="relative flex w-full max-w-[1200px] flex-col items-center justify-center gap-[30px]">
        {/* Title */}
        <div className="relative flex w-full flex-col items-center justify-center md:items-start">
          <h2 className="summary">Shining Moments of Glory</h2>
          <h2 className="subtitle text-orange">Awards I got</h2>
        </div>

        {/* List of awards */}
        <div className="relative flex w-full justify-end">
          <div className="flex w-full max-w-[500px] flex-col">
            {/* Award item */}
            {awards.map((award, index) => (
              <div
                key={index}
                className="awards-item group relative flex cursor-pointer flex-col items-center justify-between gap-2 border-b border-[#ffffff80] py-5"
              >
                {/* Award details */}
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-5">
                    <span className="font-Inter text-xs">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-ClashDisplay text-[22px] font-thin">{award.title}</span>
                  </div>
                  <div className="font-Inter text-xs transition-transform duration-300 group-hover:-translate-x-5">{award.year}</div>
                </div>

                {/* Award image */}
                <div className="awards-image absolute left-[-180px] top-[-80px] h-[209px] w-[170px] opacity-0">
                  <Image src={award.image} alt={`${award.title}`} width={500} height={525} className="h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
