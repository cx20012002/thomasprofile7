import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";

export default function IntroComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const introText = containerRef.current?.querySelector(".intro-text");
      const images = containerRef.current?.querySelectorAll(".intro-image");

      if (images) {
        // infinite image loop
        const tl = gsap.timeline({ repeat: -1 });
        gsap.set(images, { opacity: 0 });
        gsap.set(images[0], { opacity: 1 });

        images.forEach((img, index) => {
          const nextIndex = (index + 1) % images.length;

          tl.to(img, {
            opacity: 0,
            duration: 1,
            delay: 2,
          }).to(
            images[nextIndex],
            {
              opacity: 1,
              duration: 1,
            },
            "<",
          );
        });
      }

      // intro text animation
      if (introText) {
        ScrollTrigger.create({
          trigger: introText,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
          animation: gsap.to(introText, {
            scale: 0.5,
            opacity: 0,
          }),
        });
      }
    },
    { scope: containerRef, dependencies: [] },
  );
  return (
    <section ref={containerRef} className="relative flex h-fit w-full flex-col items-center justify-center pb-[30px] text-primary md:pb-0">
      {/* Intro Text */}
      <div className="intro-text sticky top-0 flex h-screen w-full max-w-[700px] items-center justify-center px-5 md:px-10">
        <p className="text-center font-Inter text-[24px] font-[200] leading-[1.3] text-[#ffffff80] md:text-[32px]">
          Hi there! I’m <span className="text-white">Finnegan Manroe</span>, a passionate photographer based in the vibrant city of
          <span className="text-white">Seattle</span>. With over a decade of experience behind the lens, I specialize in capturing the
          <span className="text-white"> unique beauty of life’s fleeting moments</span>, from intimate portraits and breathtaking landscapes to
          dynamic product shots and lively events.
        </p>
      </div>

      {/* Intro Image */}
      <div className="intro-images-wrapper relative flex h-[1200px] w-full flex-col items-center justify-between gap-10 bg-black px-5 md:h-[80vh] md:flex-row md:px-10">
        <div className="relative h-full w-full flex-1">
          {Array.from({ length: 3 }).map((_, index) => (
            <Image
              key={index}
              src={`/about-slide${index + 1}.avif`}
              alt={`about-slide${index + 1}`}
              width={500}
              height={500}
              className="intro-image absolute inset-0 h-full w-full object-cover opacity-0"
            />
          ))}
        </div>
        <div className="flex w-full max-w-[800px] flex-1 flex-col items-start gap-20">
          <p className="text-[15px]">
            My journey into photography began as a curious child with a disposable camera, fascinated by the world’s colors and light. Over the years,
            this hobby transformed into a full-blown love affair with visual storytelling. Each click of the shutter is my way of freezing time,
            preserving emotions, and narrating stories that words alone can’t convey.
          </p>
          <p className="font-Inter text-[32px] font-[200] leading-[1.3] text-[#ffffff80]">
            I’ve had the privilege of working with <span className="text-white">amazing clients</span> and have been
            <span className="text-white"> honored with several awards</span> for my work.
          </p>
          <div className="flex flex-col gap-5">
            <p className="text-[15px]">
              Let’s create something extraordinary together. Whether you’re looking to capture a special moment, need stunning visuals for your brand,
              or simply want to explore the world through my lens, I’d love to hear from you!
            </p>
            <p className="text-[15px]">Feel free to reach out, and let’s make magic happen.</p>
          </div>
          <ButtonComponent buttonText="Book a session" className="self-center md:self-start" />
        </div>
      </div>
    </section>
  );
}
