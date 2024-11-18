"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { useRef } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ButtonComponent from "../../components/ButtonComponent";

export default function BannerSection() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const bgVideo = containerRef.current.querySelector(".bg-video") as HTMLVideoElement;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          bgVideo.style.opacity = `${1 - self.progress}`;
        },
      });
    },
    { scope: containerRef, dependencies: [] },
  );
  return (
    // Banner Section
    <section ref={containerRef} className="flex flex-col items-center justify-center font-Inter font-[300] text-primary">
      {/* Heading */}
      <div
        className={clsx(
          "absolute left-[calc(50%-100%/2)] top-0 z-20 flex h-screen w-full flex-col items-end",
          "justify-between overflow-hidden px-[20px] pb-[50px] pt-[130px] mix-blend-exclusion md:px-[40px]",
        )}
      >
        {/* Top Line */}
        <div className={"relative order-2 flex w-full max-w-[400px] flex-col items-end justify-center gap-5 overflow-hidden text-[17px] md:order-1"}>
          <p className={"text-right"}>
            HI, FINNEGAN MONROE HERE. I’M A FREELANCE PHOTOGRAPHER IN NY AND THE SHUTTERBUG CAPTURING LIFE'S MAGICAL MOMENTS ONE CLICK AT A TIME.
          </p>
          <ButtonComponent buttonText="Get Template" />
        </div>

        {/* Bottom Line */}
        <div className={"relative order-1 flex w-full flex-col items-start justify-center gap-[33px] overflow-hidden md:order-2"}>
          <h1
            className={
              "w-full max-w-[1680px] font-ClashDisplay text-[66px] font-thin leading-[0.8em] tracking-[-0.06em] md:text-[100px] xl:text-[157px]"
            }
          >
            Capturing Life's Best Moments
          </h1>
          <div className={"hidden w-full items-center justify-between border-b pb-[10px] text-xs uppercase md:flex"}>
            <div>FINNEGAN MONROE PHOTOGRAPHY</div>
            <div className="flex items-center justify-center gap-2">
              <div className="animate-up-down">
                <Image src={"/link-arrow-light.svg"} alt={"Link Arrow"} width={8} height={8} className={"aspect-square w-[8px] rotate-[135deg]"} />
              </div>
              Scroll to Explore
            </div>
            <div>WORK WITH ME</div>
          </div>
        </div>
      </div>

      {/* Video Background */}
      <div
        className={clsx(
          "sticky top-0 z-10 flex h-screen w-full items-center justify-center gap-[10px]",
          "bg-video contrast-[1.16] grayscale-[1] filter will-change-transform",
        )}
      >
        <video className={"object-[50% 50%] h-full w-full object-cover"} src="/home_bg_video.mp4" autoPlay loop muted playsInline />
      </div>

      {/* Banner Content */}
      <div
        className="gap-30 z-10 flex w-full flex-col items-center justify-center px-5 pb-[30px] pt-[500px] md:px-10 xl:pb-[150px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Numbers */}
        <div className="flex w-full max-w-[1680px] flex-col items-end justify-center gap-[10px] overflow-hidden md:border-[1px] md:border-darkGrey md:p-[10px]">
          <div className="flex w-full flex-col items-center justify-center gap-[10px] lg:flex-row">
            <div className="flex w-full flex-[1.5] flex-col items-center justify-center overflow-hidden bg-darkGrey p-10">
              <p className="w-full border-b-[1px] border-darkGrey pb-[10px]">Hours Behind the Lens</p>
              <div className="flex w-full items-center font-ClashDisplay">
                <CountUp className="text-[96px] leading-[1em] md:text-[133px]" end={9} duration={5} enableScrollSpy scrollSpyOnce />
                <span className="text-[84px] text-orange md:text-[100px]">K+</span>
              </div>
            </div>
            <div className="flex w-full flex-1 flex-col items-center justify-center overflow-hidden bg-darkGrey p-10">
              <p className="w-full border-b-[1px] border-darkGrey pb-[10px]">Years of Experience</p>
              <div className="flex w-full items-center font-ClashDisplay">
                <CountUp className="text-[96px] leading-[1em] md:text-[133px]" end={15} duration={5} enableScrollSpy scrollSpyOnce />
                <span className="text-[84px] text-orange md:text-[100px]">K+</span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-[10px] lg:flex-row">
            <div className="flex w-full flex-1 flex-col items-center justify-center overflow-hidden bg-darkGrey p-10">
              <p className="w-full border-b-[1px] border-darkGrey pb-[10px]">Awards and Recognitions</p>
              <div className="flex w-full items-center font-ClashDisplay">
                <CountUp className="text-[96px] leading-[1em] md:text-[133px]" end={13} duration={5} enableScrollSpy scrollSpyOnce />
                <span className="text-[84px] text-orange md:text-[100px]">+</span>
              </div>
            </div>
            <div className="flex w-full flex-[1.5] flex-col items-center justify-center overflow-hidden bg-darkGrey p-10">
              <p className="w-full border-b-[1px] border-darkGrey pb-[10px]">Happy Clients Served</p>
              <div className="flex w-full items-center font-ClashDisplay">
                <CountUp className="text-[96px] leading-[1em] md:text-[133px]" end={200} duration={5} enableScrollSpy scrollSpyOnce />
                <span className="text-[84px] text-orange md:text-[100px]">+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Self Intro */}
        <div className="flex w-full max-w-[1680px] flex-col items-end justify-center gap-[30px] pt-[30px] md:gap-[4px] md:pt-[100px]">
          {/* Title */}
          <h2 className="subtitle flex w-full flex-col items-start text-orange">I am …</h2>
          {/* Content */}
          <div className="relative flex flex-col items-center justify-center gap-[43px] overflow-hidden xl:items-start">
            {/* Summary */}
            <p className="summary2 w-full indent-[105px]">
              a passionate photographer dedicated to capturing life's most precious moments. With a keen eye for detail and a
              <span className="text-orange">love for storytelling,</span> I strive to create images that are not just beautiful, but that also evoke
              emotion and tell a compelling story.
            </p>
            {/* Button */}
            <ButtonComponent buttonText="More About Me" />
          </div>
        </div>
      </div>
    </section>
  );
}
