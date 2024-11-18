"use client";

import AlbumCard from "@/components/AlbumCard";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import ButtonComponent from "@/components/ButtonComponent";

const carouselItems = [
  {
    imageSrc: "/work1.avif",
    categories: ["Wedding", "Portrait"],
    title: "Wedding in the Mountains",
    href: "/albums/wedding-in-the-mountains",
  },
  {
    imageSrc: "/work2.avif",
    categories: ["Event", "Portrait"],
    title: "Corporate Event Highlights",
    href: "/albums/corporate-event-highlights",
  },
  {
    imageSrc: "/work3.avif",
    categories: ["Travel", "Landscape"],
    title: "Adventures in the Wild",
    href: "/albums/adventures-in-the-wild",
  },
  {
    imageSrc: "/work4.avif",
    categories: ["Fashion", "Editorial"],
    title: "Fashion Week Extravaganza",
    href: "/albums/fashion-week-extravaganza",
  },
  {
    imageSrc: "/work5.avif",
    categories: ["Food", "Product"],
    title: "Gourmet Delights",
    href: "/albums/gourmet-delights",
  },
];

export default function SingleCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const carousels = containerRef.current?.querySelectorAll(".carousel-wrapper");
      const gap = 40;

      if (carousels) {
        gsap.to(carousels, {
          x: `-=${carousels[0].clientWidth + gap}px`,
          ease: "none",
          duration: 15,
          repeat: -1,
        });
      }
    },
    { scope: containerRef, dependencies: [] },
  );
  return (
    <section className="flex w-full flex-col items-center justify-center gap-20 px-[10px] py-[150px]">
      <h2 className="subtitle">More Albums</h2>
      <div ref={containerRef} className="flex w-full gap-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="carousel-wrapper flex gap-10">
            {carouselItems.map((item, index) => (
              <AlbumCard key={index} {...item} className="w-[360px]" />
            ))}
          </div>
        ))}
      </div>
      <ButtonComponent buttonText="All Albums" />
    </section>
  );
}
