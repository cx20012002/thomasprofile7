"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import MouseCursorComponent from "@/components/MouseCursorComponent";
import { TransitionLinkCss } from "@/utils/TransitionLinkCss";

export default function SelectedWorks() {
  const conatinerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const albumCards = document.querySelectorAll(".album-card");

      const mm = gsap.matchMedia();

      mm.add({ isDesktop: "(min-width: 768px)", isMobile: "(max-width: 767px)" }, (context) => {
        const { isDesktop, isMobile } = context.conditions!;

        if (isDesktop) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".text-orange",
              start: "top 90%",
              end: "bottom center",
              scrub: 1.2,
            },
          });
          tl.from(".text-orange", {
            y: 150,
            duration: 1,
          });
          tl.to(".text-orange", {
            filter: "blur(5px)",
            duration: 1,
            delay: 0.5,
          });

          albumCards.forEach((card, index) => {
            gsap.from(card, {
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "bottom 70%",
                scrub: 1.2,
              },
              y: 200,
              duration: 1,
            });
          });
        }
      });
    },
    { scope: conatinerRef, dependencies: [] },
  );

  return (
    <section ref={conatinerRef} className="relative flex w-full flex-col items-center justify-center">
      {/* Album Background */}
      <div className="flex w-full items-center justify-center px-[12px] py-[30px] xl:sticky xl:top-0 xl:h-screen xl:px-10 xl:pb-[100px] xl:pt-[60px]">
        <div className="relative flex h-[96px] w-full items-center overflow-hidden text-center font-ClashDisplay font-thin">
          <h2 className="h-auto w-full text-orange subtitle">Albums</h2>
        </div>
      </div>

      {/* Album Cards */}
      <div className="relative flex w-full max-w-[1400px] flex-col items-center justify-center gap-10 pb-[60px] md:pb-[200px] text-primary xl:gap-[174px]">
        {/* Card */}
        <TransitionLinkCss href="/albums/colorful-india" className="album-card flex w-full justify-center px-5 md:px-10 xl:px-[110px]">
          <MouseCursorComponent className="group relative w-full xl:w-[632px]" duration={0.8}>
            {/* Card Wrapper */}
            <div className="relative z-10 flex w-full flex-col items-start justify-start gap-[15px]">
              {/* Image */}
              <Image src={"/work1.avif"} alt="" width={632} height={366} className="h-[366px] w-full object-cover xl:h-auto xl:w-[632px]" />
              {/* Card Body */}
              <div className="flex w-full flex-col gap-3">
                {/* Category Tag */}
                <div className="flex gap-5 font-Inter text-xs font-[300] uppercase">
                  <span className="bg-darkGrey rounded-full px-[8px] py-[4px]">Travel</span>
                  <span className="bg-darkGrey rounded-full px-[8px] py-[4px]">Collaboration</span>
                </div>
                {/* Title */}
                <div className="flex w-full items-center justify-between">
                  <h3 className="font-ClashDisplay text-[28px] font-thin leading-none">Colorful India</h3>
                  <Image src={"/link-arrow-light.svg"} alt={"Link Arrow"} width={12} height={12} className={"h-[15px] w-[15px]"} />
                </div>
              </div>
            </div>
            <div className="absolute top-0 h-full w-full scale-95 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
              <div className="absolute left-[-20px] top-[-20px] h-[40px] w-[40px] border-l border-t" />
              <div className="absolute right-[-20px] top-[-20px] h-[40px] w-[40px] border-r border-t" />
              <div className="absolute bottom-[-20px] right-[-20px] h-[40px] w-[40px] border-b border-r" />
              <div className="absolute bottom-[-20px] left-[-20px] h-[40px] w-[40px] border-b border-l" />
            </div>
          </MouseCursorComponent>
        </TransitionLinkCss>

        {/* Card */}
        <TransitionLinkCss href="/albums/echoes-of-dreams" className="album-card flex w-full justify-start px-5 md:px-10 xl:px-[110px]">
          <MouseCursorComponent className="group relative w-full xl:w-[718px]" duration={0.8}>
            {/* Card Wrapper */}
            <div className="relative z-10 flex w-full flex-col items-start justify-start gap-[15px]">
              {/* Image */}
              <Image src={"/work4.avif"} alt="" width={718} height={366} className="h-[366px] w-full" />
              {/* Card Body */}
              <div className="flex w-full flex-col gap-3">
                {/* Category Tag */}
                <div className="flex gap-5 font-Inter text-xs font-[300] uppercase">
                  <span className="bg-darkGrey rounded-full px-[8px] py-[4px]">Conceptual</span>
                  <span className="bg-darkGrey rounded-full px-[8px] py-[4px]">Commercial</span>
                </div>
                {/* Title */}
                <div className="flex w-full items-center justify-between">
                  <h3 className="font-ClashDisplay text-[28px] font-thin leading-none">Echoes of Dreams</h3>
                  <Image src={"/link-arrow-light.svg"} alt={"Link Arrow"} width={12} height={12} className={"h-[15px] w-[15px]"} />
                </div>
              </div>
            </div>
            <div className="absolute top-0 h-full w-full scale-95 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
              <div className="absolute left-[-20px] top-[-20px] h-[40px] w-[40px] border-l border-t" />
              <div className="absolute right-[-20px] top-[-20px] h-[40px] w-[40px] border-r border-t" />
              <div className="absolute bottom-[-20px] right-[-20px] h-[40px] w-[40px] border-b border-r" />
              <div className="absolute bottom-[-20px] left-[-20px] h-[40px] w-[40px] border-b border-l" />
            </div>
          </MouseCursorComponent>
        </TransitionLinkCss>

        {/* Card */}
        <TransitionLinkCss href="/albums/wings-of-freedom" className="album-card flex w-full flex-col items-center justify-between gap-14 px-5 md:flex-row md:px-10">
          <MouseCursorComponent className="group relative w-full xl:w-[451px]" duration={0.8}>
            {/* Card Wrapper */}
            <div className="relative z-10 flex w-full flex-col items-start justify-start gap-[15px]">
              {/* Image */}
              <Image src={"/work2.avif"} alt="" width={451} height={366} className="h-[366px] w-full object-cover" />
              {/* Card Body */}
              <div className="flex w-full flex-col gap-3">
                {/* Category Tag */}
                <div className="flex gap-5 font-Inter text-xs font-[300] uppercase">
                  <span className="bg-darkGrey rounded-full px-[8px] py-[4px]">Aerial & Drone</span>
                  <span className="bg-darkGrey rounded-full px-[8px] py-[4px]">Passion Project</span>
                </div>
                {/* Title */}
                <div className="flex w-full items-center justify-between">
                  <h3 className="font-ClashDisplay text-[28px] font-thin leading-none">Wings of Freedom</h3>
                  <Image src={"/link-arrow-light.svg"} alt={"Link Arrow"} width={12} height={12} className={"h-[15px] w-[15px]"} />
                </div>
              </div>
            </div>
            <div className="absolute top-0 h-full w-full scale-95 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
              <div className="absolute left-[-20px] top-[-20px] h-[40px] w-[40px] border-l border-t" />
              <div className="absolute right-[-20px] top-[-20px] h-[40px] w-[40px] border-r border-t" />
              <div className="absolute bottom-[-20px] right-[-20px] h-[40px] w-[40px] border-b border-r" />
              <div className="absolute bottom-[-20px] left-[-20px] h-[40px] w-[40px] border-b border-l" />
            </div>
          </MouseCursorComponent>

          <MouseCursorComponent className="group relative w-full xl:w-[505px]" duration={0.8}>
            {/* Card Wrapper */}
            <div className="relative z-10 flex w-full flex-col items-start justify-start gap-[15px]">
              {/* Image */}
              <Image
                src={"/work3.avif"}
                alt=""
                width={505}
                height={636}
                className="h-[366px] w-full object-cover xl:h-[636px] xl:h-auto xl:object-none"
              />
              {/* Card Body */}
              <div className="flex w-full flex-col gap-3">
                {/* Category Tag */}
                <div className="flex gap-5 font-Inter text-xs font-[300] uppercase">
                  <span className="bg-darkGrey rounded-full px-[8px] py-[4px]">Product Commercial</span>
                  <span className="bg-darkGrey rounded-full px-[8px] py-[4px]">Crafted Perfection</span>
                </div>
                {/* Title */}
                <div className="flex w-full items-center justify-between">
                  <h3 className="font-ClashDisplay text-[28px] font-thin leading-none">Colorful India</h3>
                  <Image src={"/link-arrow-light.svg"} alt={"Link Arrow"} width={12} height={12} className={"h-[15px] w-[15px]"} />
                </div>
              </div>
            </div>
            <div className="absolute top-0 h-full w-full scale-95 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
              <div className="absolute left-[-20px] top-[-20px] h-[40px] w-[40px] border-l border-t" />
              <div className="absolute right-[-20px] top-[-20px] h-[40px] w-[40px] border-r border-t" />
              <div className="absolute bottom-[-20px] right-[-20px] h-[40px] w-[40px] border-b border-r" />
              <div className="absolute bottom-[-20px] left-[-20px] h-[40px] w-[40px] border-b border-l" />
            </div>
          </MouseCursorComponent>
        </TransitionLinkCss>

        {/* Card */}
        <TransitionLinkCss href="/albums/wild-wonders" className="album-card flex w-full justify-center px-5 md:px-10 xl:px-[110px]">
          <MouseCursorComponent className="group relative w-full xl:w-[632px]" duration={0.8}>
            {/* Card Wrapper */}
            <div className="relative z-10 flex w-full flex-col items-start justify-start gap-[15px]">
              {/* Image */}
              <Image
                src={"/work5.avif"}
                alt=""
                width={632}
                height={366}
                className="h-[366px] w-full object-cover xl:h-auto xl:w-[632px] xl:object-none"
              />
              {/* Card Body */}
              <div className="flex w-full flex-col gap-3">
                {/* Category Tag */}
                <div className="flex gap-5 font-Inter text-xs font-[300] uppercase">
                  <span className="bg-darkGrey rounded-full px-[8px] py-[4px]">Wildlife & Nature</span>
                  <span className="bg-darkGrey rounded-full px-[8px] py-[4px]">Passion Project</span>
                </div>
                {/* Title */}
                <div className="flex w-full items-center justify-between">
                  <h3 className="font-ClashDisplay text-[28px] font-thin leading-none">Wild Wonders</h3>
                  <Image src={"/link-arrow-light.svg"} alt={"Link Arrow"} width={12} height={12} className={"h-[15px] w-[15px]"} />
                </div>
              </div>
            </div>
            <div className="absolute top-0 h-full w-full scale-95 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
              <div className="absolute left-[-20px] top-[-20px] h-[40px] w-[40px] border-l border-t" />
              <div className="absolute right-[-20px] top-[-20px] h-[40px] w-[40px] border-r border-t" />
              <div className="absolute bottom-[-20px] right-[-20px] h-[40px] w-[40px] border-b border-r" />
              <div className="absolute bottom-[-20px] left-[-20px] h-[40px] w-[40px] border-b border-l" />
            </div>
          </MouseCursorComponent>
        </TransitionLinkCss>
      </div>
    </section>
  );
}
