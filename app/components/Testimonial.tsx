"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import ReviewComponent from "@/components/ReviewComponent";

const testimonials = [
  {
    name: "Alice Johnson",
    title: "CEO, Company",
    image: "/client1.avif",
    quote:
      "The team delivered outstanding product photography for our new line. Their meticulous attention to detail and innovative style resulted in images that truly captured the essence of our products. Highly recommended!",
    stars: 4,
  },
  {
    name: "Bob Williams",
    title: "CEO, Company",
    image: "/client2.avif",
    quote:
      "Their product photography services exceeded our expectations. The creative approach and precision in every shot brought our products to life. We couldn't be happier with the results. Highly recommended!",
    stars: 5,
  },
  {
    name: "Charlie Brown",
    title: "CEO, Company",
    image: "/client3.avif",
    quote:
      "Exceptional product photography that highlighted our collection perfectly. Their keen eye for detail and artistic vision made a significant impact on our marketing materials. Highly recommended!",
    stars: 4,
  },
  {
    name: "Diana Evans",
    title: "CEO, Company",
    image: "/client4.avif",
    quote:
      "The product photography provided was top-notch. Their dedication to capturing the perfect shot and their creative flair resulted in stunning images that showcased our products beautifully. Highly recommended!",
    stars: 3,
  },
];

export default function Testimonial() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const itemWidth = 350;
  const duration = 30;
  const gap = 0;

  useGSAP(
    (_, contextSafe) => {
      const slider = sliderRef.current;
      if (!slider || !contextSafe) return;

      // Clone the items once, ensuring all are added to the slider
      slider.querySelectorAll(".reviews-card").forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        slider.appendChild(clone);
      });

      // Wait for the DOM to update with the cloned items and get the items
      const items = Array.from(slider.children) as HTMLElement[];

      // slider add gap
      slider.style.gap = `${gap}px`;

      // add width to each item
      items.forEach((item) => {
        item.style.width = `${itemWidth}px`;
      });

      // Calculate the total width of the slider
      const totalWidth = items.length * (itemWidth + gap);

      // Create a single timeline for infinite looping
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" },
      });

      tl.to(slider, {
        x: -totalWidth / 2,
        duration: duration,
        ease: "none",
      });

      // Mouse hover interactions to control speed
      const mouseEnterHandler = contextSafe(() => tl.timeScale(0.5));
      const mouseLeaveHandler = contextSafe(() => tl.timeScale(1));

      slider.addEventListener("mouseenter", mouseEnterHandler); // Slow down on hover
      slider.addEventListener("mouseleave", mouseLeaveHandler); // Reset speed on leave

      // Cleanup event listeners on component unmount
      return () => {
        slider.removeEventListener("mouseenter", mouseEnterHandler);
        slider.removeEventListener("mouseleave", mouseLeaveHandler);
      };
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <section ref={containerRef} className="flex w-full items-center justify-center px-5 pb-[60px] pt-[30px] md:px-10 md:py-[150px]">
      <div className="flex w-full max-w-[1680px] flex-col items-center justify-center gap-20 pb-[60px] pt-[50px] font-ClashDisplay font-thin md:border md:border-[#ffffff1a] md:bg-[#ffffff0d]">
        {/* Title */}
        <div className="text-center">
          <small className="summary text-primary">Smiles and Stories from</small>
          <h2 className="subtitle text-orange">My Clients</h2>
        </div>

        {/* Testimonial */}
        <div className="flex w-full flex-col gap-32 overflow-hidden text-primary">
          <div ref={sliderRef} className="flex w-full">
            {testimonials.map((testimonial, index) => (
              <ReviewComponent key={index} {...testimonial} className="flex flex-shrink-0 flex-col gap-5 px-5" />
            ))}
          </div>
          <div className="w-full text-center flex justify-center">
            <ButtonComponent buttonText="View All Reviews" href="/reviews" />
          </div>
        </div>
      </div>
    </section>
  );
}
