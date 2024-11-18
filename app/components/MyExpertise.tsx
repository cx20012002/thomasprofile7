"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const extraServices = [
  {
    title: "Event Photography",
    description: "Tell powerful stories through our event photography, capturing real-life events and moments.",
  },
  {
    title: "Aerial Photography",
    description: "Capture the essence of your subject with our portrait photography services. We'll work with you to create.",
  },
  {
    title: "Corporate Photography",
    description: "Showcase your latest designs with our fashion photography services. We'll create images that highlight the.",
  },
  {
    title: "Editorial Photography",
    description: "Make your dishes look as good as they taste with our food photography services. We'll use professional lighting.",
  },
];

export default function MyExpertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useGSAP(
    () => {
      const spacers = document.querySelectorAll(".spacer");
      const images = document.querySelectorAll(".bgImg");

      const mm = gsap.matchMedia();

      mm.add({ isDesktop: "(min-width: 768px)", isMobile: "(max-width: 767px)" }, (context) => {
        const { isMobile, isDesktop } = context.conditions!;
        setIsMobile(isMobile);

        if (isDesktop) {
          gsap.from(".bgImgWrapper", {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: () => `bottom-=${lastSectionRef.current?.clientHeight} bottom`,
              scrub: true,
            },
            scale: 0.8,
            onComplete: () => {
              gsap.to(".bgImgWrapper", {
                scrollTrigger: {
                  trigger: lastSectionRef.current,
                  start: "top bottom",
                  end: "bottom center",
                  scrub: 1,
                },
                scale: 0.8,
              });
            },
          });
        }

        spacers.forEach((spacer, index) => {
          if (isDesktop) {
            ScrollTrigger.create({
              trigger: spacer,
              start: "top bottom",
              end: "top bottom",
              onEnter: () => {
                if (index > 0) {
                  gsap.to(".cubeWrapper", {
                    rotateX: 90 * index,
                  });
                }
                gsap.to(images[index], { opacity: 1 });
              },
              onLeaveBack: () => {
                gsap.to(".cubeWrapper", {
                  rotateX: 90 * index,
                });
                gsap.to(images[index + 1], { opacity: 0 });
              },
            });
          }
        });
      });
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <section ref={containerRef} className="relative flex w-full flex-col items-start justify-center gap-[10px]">
      <div className="relative flex w-full flex-col items-center justify-center gap-[30px] overflow-hidden px-[20px] py-[20px] md:sticky md:top-0 md:h-[100vh] md:px-[40px] md:pb-[100px] md:pt-[60px]">
        {/* Background Images */}
        <div className="absolute left-[calc(50%-100%/2)] top-[calc(50%-100%/2)] hidden h-full w-full md:block">
          <div className="bgImgWrapper h-full w-full brightness-[0.65] grayscale-0">
            <Image
              src="/xp1.avif"
              alt="Expertise Background"
              width={1627}
              height={855}
              className="bgImg opacity-1 absolute h-full w-full object-cover"
            />
            <Image
              src="/xp2.avif"
              alt="Expertise Background"
              width={1627}
              height={855}
              className="bgImg absolute h-full w-full object-cover opacity-0"
            />
            <Image
              src="/xp3.avif"
              alt="Expertise Background"
              width={1627}
              height={855}
              className="bgImg absolute h-full w-full object-cover opacity-0"
            />
            <Image
              src="/xp4.avif"
              alt="Expertise Background"
              width={1627}
              height={855}
              className="bgImg absolute h-full w-full object-cover opacity-0"
            />
          </div>
        </div>

        {/* Background Title */}
        <h2 className="relative subtitle text-orange md:px-0 md:text-[120px]">
          My Expertise
        </h2>

        {/* 3D Service Cube */}
        <div className="w-full md:h-[300px] md:w-[600px]" style={isMobile ? {} : { transformStyle: "preserve-3d" }}>
          <div className="relative flex h-full w-full items-center justify-center text-white">
            {isMobile && (
              <div className="absolute right-[-70px] top-1/2 flex h-[15px] w-[3px] items-center justify-center gap-[10px] bg-orange"></div>
            )}
            {/* 3d Cube Wrapper */}
            <div
              className="cubeWrapper flex w-full flex-col gap-5 md:relative md:h-[300px] md:w-[600px]"
              style={isMobile ? {} : { transformStyle: "preserve-3d", transform: "perspective(2404px)" }}
            >
              {/* TOP */}
              <div
                className="relative flex h-[300px] w-full flex-col items-center justify-center bg-orange p-5 md:absolute md:right-0 md:top-[-150px] md:p-10"
                style={isMobile ? {} : { transform: "rotateX(90deg)" }}
              >
                <div className="flex h-full w-full flex-col items-end justify-between text-black opacity-85 md:text-primary">
                  <h3 className="w-full font-ClashDisplay text-[24px] font-thin md:text-[28px]">Real Estate Photography</h3>
                  <p className="w-full font-Inter text-[17px] tracking-tighter opacity-80 md:w-[80%]">
                    Highlight the best features of your property with our real estate photography services. We'll use professional lighting and
                    composition techniques to create images that make your property stand out and attract potential buyers.
                  </p>
                </div>
              </div>

              {/* BACK */}
              <div
                className="border-darkGrey relative flex h-[300px] w-full flex-col items-center justify-center border bg-[rgba(0,0,0,0.84)] p-5 md:absolute md:right-0 md:top-0 md:border-none md:p-10"
                style={isMobile ? {} : { transform: "translateZ(-150px) rotateX(180deg)" }}
              >
                <div className="flex h-full w-full flex-col items-end justify-between text-primary opacity-85">
                  <h3 className="w-full font-ClashDisplay text-[24px] font-thin md:text-[28px]">Product PhotoGraphy</h3>
                  <p className="w-full font-Inter text-[17px] tracking-tighter opacity-80 md:w-[80%]">
                    Showcase your products in the best possible light with our professional product photography services. Whether you're selling
                    online or in print, we'll create images that highlight the unique features of your products and attract customers.
                  </p>
                </div>
              </div>

              {/* Bottom */}
              <div
                className="relative flex h-[300px] w-full flex-col items-center justify-center bg-orange p-5 md:absolute md:bottom-[-150px] md:right-0 md:p-10"
                style={isMobile ? {} : { transform: "rotateX(90deg)" }}
              >
                <div
                  className="flex h-full w-full flex-col items-end justify-between text-black opacity-85"
                  style={isMobile ? {} : { transform: "rotateX(180deg)" }}
                >
                  <h3 className="w-full font-ClashDisplay text-[24px] font-thin md:text-[28px]">Landscape Photography</h3>
                  <p className="w-full font-Inter text-[17px] tracking-tighter opacity-80 md:w-[80%]">
                    Explore the beauty of the world through our captivating landscape photography. From breathtaking vistas to hidden gems, we'll take
                    you on a visual journey that will inspire and awe.
                  </p>
                </div>
              </div>

              {/* Front */}
              <div
                className="border-darkGrey relative flex h-[300px] w-full flex-col items-center justify-center border bg-[rgba(0,0,0,0.84)] p-5 md:absolute md:border-none md:p-10"
                style={isMobile ? {} : { transform: "translateZ(150px)" }}
              >
                <div className="flex h-full w-full flex-col items-end justify-between text-primary opacity-85">
                  <h3 className="w-full font-ClashDisplay text-[24px] font-thin md:text-[28px]">Documentary Photography</h3>
                  <p className="w-full font-Inter text-[17px] tracking-tighter opacity-80 md:w-[80%]">
                    Documentary photography serves to inform, educate, and inspire by providing a truthful and insightful representation of the world.
                    It is used to raise awareness about important issues, document significant events, and preserve historical moments.
                  </p>
                </div>
              </div>

              {/* Left */}
              {isMobile && (
                <div
                  className="absolute left-[-150px] flex h-full w-[300px] flex-col items-center justify-center bg-orange p-10 opacity-75"
                  style={{ transform: "rotateY(90deg)" }}
                />
              )}

              {/* Right */}
              {isMobile && (
                <div
                  className="absolute right-[-150px] flex h-full w-[300px] flex-col items-center justify-center bg-orange p-10 opacity-75"
                  style={{ transform: "rotateY(90deg)" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center gap-[74px] overflow-hidden">
        {/* Spacers */}

        <div className="spacer hidden h-[50vh] w-full md:block" />
        <div className="spacer hidden h-[50vh] w-full md:block" />
        <div className="spacer hidden h-[50vh] w-full md:block" />
        <div className="spacer hidden h-[50vh] w-full md:block" />

        {/* Extra Services */}
        <div
          ref={lastSectionRef}
          className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-orange px-[12px] pb-[30px] pt-[60px] md:px-[40px] md:py-[100px]"
        >
          <div className="flex w-full max-w-[1680px] flex-col gap-[40px]">
            {/* Title */}
            <h2 className="subtitle">
              <span>Wait...</span>
              <br />
              <span>There's more!</span>
            </h2>

            {/* Services */}
            <div className="grid w-full grid-cols-1 gap-3 text-white xl:grid-cols-2">
              {extraServices.map((service, index) => (
                <div key={index} className="flex h-[346px] w-full flex-col gap-[10px] bg-black p-[30px] md:flex-row">
                  <div className="w-full">
                    <h3 className="font-ClashDisplay text-[24px] font-thin leading-[1.3em] tracking-[-0.01em] md:text-[28px]">
                      {service.title.split(" ").map((word, i) => (
                        <React.Fragment key={i}>
                          {word} <br />
                        </React.Fragment>
                      ))}
                    </h3>
                  </div>
                  <div className="flex h-full w-full items-end text-[17px] text-neutral-400">
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
