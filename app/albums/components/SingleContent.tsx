"use client";

import { BsTriangle } from "react-icons/bs";
import { CiCamera, CiLocationOn } from "react-icons/ci";
import { RiCameraLensLine } from "react-icons/ri";
import { IoMdArrowForward } from "react-icons/io";
import { PiCalendar, PiDevicesLight, PiUserFocusLight } from "react-icons/pi";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const photoDetails = [
  {
    icon: PiUserFocusLight,
    title: "Category",
    content: "Travel",
  },
  {
    icon: BsTriangle,
    title: "Project Type",
    content: "Collaboration",
  },
  {
    icon: PiDevicesLight,
    title: "Camera",
    content: "Fujifilm X-T4",
  },
  {
    icon: CiLocationOn,
    title: "Lenses",
    content: "Fujinon XF 23mm f/1.4 R, Fujinon XF 35mm f/2 R WR",
  },
  {
    icon: PiCalendar,
    title: "Other Devices",
    content: "Mavic Air",
  },
  {
    icon: CiLocationOn,
    title: "Location",
    content: "India",
  },
  {
    icon: CiCamera,
    title: "Time",
    content: "April 2024",
  },
  {
    icon: RiCameraLensLine,
    title: "Client",
    content: "India Tourism",
  },
];

export default function SingleContent() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    (_, safeContext) => {
      const btn = containerRef.current?.querySelector(".btn");
      const btnHover = containerRef.current?.querySelector(".btn-hover");
      if (!safeContext || !btn || !btnHover) return;

      gsap.set(btnHover, { borderRadius: "100%" });

      const mouseEnterHandler = safeContext(() => {
        gsap.to(btnHover, {
          duration: 0.3,
          borderRadius: "0%",
          width: "100%",
          opacity: 1,
          ease: "power1.out",
        });
      });

      const mouseLeaveHandler = safeContext(() => {
        gsap.to(btnHover, {
          duration: 0.3,
          borderRadius: "100%",
          width: "426px",
          opacity: 0,
          ease: "power1.in",
        });
      });

      btn?.addEventListener("mouseenter", mouseEnterHandler);
      btn?.addEventListener("mouseleave", mouseLeaveHandler);

      return () => {
        btn?.removeEventListener("mouseenter", mouseEnterHandler);
        btn?.removeEventListener("mouseleave", mouseLeaveHandler);
      };
    },
    { scope: containerRef, dependencies: [] },
  );
  return (
    <section ref={containerRef} className="relative flex w-full flex-col items-center gap-[62px] bg-black px-5 py-[50px] md:px-10 md:py-[120px]">
      {/* Summary */}
      <p className="summary2 w-full max-w-[800px] text-center font-[200]">
        To capture the vibrant life, culture, and diversity of India's streets through a collaborative travel photography project. The aim was to
        document everyday moments, unique street scenes, and cultural events, showcasing the essence of Indian street life.
      </p>
      {/* Details */}
      <div className="flex w-full max-w-[600px] flex-col gap-[30px] bg-[#ffffff0d] p-[21px]">
        {/* Details List */}
        <ul className="flex w-full flex-col gap-[10px] font-Inter font-[300]">
          {photoDetails.map((detail, index) => (
            <li key={index} className="flex w-full items-center justify-between py-[10px]">
              <span className="flex flex-1 items-center gap-[10px] text-[22px]">
                {detail.icon && <detail.icon className="text-neutral-500" />}
                {detail.title}
              </span>
              <span className="flex flex-1 items-center justify-end text-right text-[17px]">{detail.content}</span>
            </li>
          ))}
        </ul>
        {/* Button */}
        <Link
          href={"#"}
          className="btn group relative z-20 flex w-full items-center justify-center overflow-hidden font-ClashDisplay text-[17px] font-thin"
        >
          <div className="relative z-10 flex w-full items-center justify-center gap-[10px] border border-neutral-500 px-[20px] py-[20px]">
            <div className="flex w-32 items-center justify-between gap-[10px] transition-all duration-300 group-hover:w-full">
              Buy Prints <IoMdArrowForward size={25} className="rotate-0 transition-all duration-300 group-hover:-rotate-45" />
            </div>
          </div>
          <div className="btn-hover absolute top-0 z-0 aspect-square h-[426px] w-[426px] bg-orange opacity-0" />
        </Link>
      </div>
    </section>
  );
}
