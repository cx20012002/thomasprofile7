import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const signBoardTexts = ["Creative Vision", "Professionalism", "Passion", "Adaptability"];

export default function ProfessionComponent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const signBoards = containerRef.current?.querySelectorAll(".sign-board");

    signBoards?.forEach((signBoard, index) => {
      ScrollTrigger.create({
        trigger: signBoard,
        start: "top center",
        end: "bottom top",
        scrub: 1,
        animation: gsap.to(signBoard, {
          rotate: index % 2 === 0 ? 10 : -10,
        }),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex w-full flex-col items-center justify-center gap-[100px] px-5 pb-[30px] pt-[30px] text-primary md:px-10 md:pb-[100px] md:pt-[150px]"
    >
      <h2 className="summary sticky top-[150px]">What you will find in me</h2>
      {signBoardTexts.map((text, index) => (
        <div
          className="sign-board sticky top-[300px] flex w-full max-w-[700px] items-center justify-center border border-[#ffffff80] bg-black p-7 font-ClashDisplay text-[38px] leading-[1em] tracking-[-0.04em] md:text-[67px] xl:text-[80px]"
          key={index}
        >
          {text}
        </div>
      ))}
    </section>
  );
}
