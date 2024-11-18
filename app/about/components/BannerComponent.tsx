import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function BannerComponent() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const bannerContent = containerRef.current?.querySelector(".banner-content");
      const bannerInfo = containerRef.current?.querySelector(".banner-info");
      const behind = containerRef.current?.querySelector(".behind");

      if (!bannerContent || !bannerInfo) return;
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
        animation: gsap.to(bannerContent, {
          y: -100,
          duration: 1,
          ease: "power2.out",
        }),
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "40% top",
        scrub: 1.2,
        animation: gsap.to(bannerInfo, {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }),
      });
    },
    { scope: containerRef, dependencies: [] },
  );
  return (
    <section
      ref={containerRef}
      className="relative flex h-screen w-full flex-col place-content-end justify-end px-10 pb-[50px] pt-[130px] mix-blend-exclusion"
    >
      {/* Banner Image */}
      <div className="absolute bottom-[153px] left-1/2 top-[153px] w-[362px] -translate-x-1/2 overflow-hidden">
        <Image src="/about-banner.avif" alt="About" width={362} height={714} className="h-full w-full object-cover" />
      </div>

      {/* Banner Content */}
      <div className="banner-content relative flex w-full flex-col items-center justify-center gap-[38px]">
        {/* Title */}
        <div className="relative flex w-full max-w-[1200px] flex-col items-center justify-center gap-[10px]">
          <h1 className="title w-full">Finnegan</h1>
          <h1 className="title behind relative w-full text-right">Manroe</h1>
        </div>

        {/* Banner Info */}
        <div className={"banner-info hidden w-full items-center justify-between border-b pb-[10px] text-xs uppercase md:flex"}>
          <div className="relative">FINNEGAN MONROE PHOTOGRAPHY</div>
          <div className="flex items-center justify-center gap-2">
            <div className="animate-up-down">
              <Image src={"/link-arrow-light.svg"} alt={"Link Arrow"} width={8} height={8} className={"aspect-square w-[8px] rotate-[135deg]"} />
            </div>
            Scroll to Explore
          </div>
          <div>WORK WITH ME</div>
        </div>
      </div>
    </section>
  );
}
