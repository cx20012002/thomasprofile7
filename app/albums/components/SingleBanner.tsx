"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function SingleBanner() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const imgWrapper = containerRef.current?.querySelector(".img-wrapper");
      if (imgWrapper) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "200% top",
          scrub: true,
          animation: gsap.to(imgWrapper, {
            y: 200,
          }),
        });
      }
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <section ref={containerRef} className="relative px-10 py-20">
      {/* Banner Image */}
      <div className="img-wrapper aspect-[1200/500] md:aspect-[1200/440] w-full overflow-hidden">
        <Image
          src="/singleAlbum1.avif"
          alt="Single Album Banner"
          sizes="100vw"
          width={1200}
          height={440}
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-12 lg:bottom-10 xl:bottom-0 left-1/2 flex w-full max-w-[1120px] -translate-x-1/2  justify-center text-nowrap">
        <h1 className="title">Colorful India</h1>
      </div>
    </section>
  );
}
