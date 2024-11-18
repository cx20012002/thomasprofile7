"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function Test() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const triangles = containerRef.current?.querySelectorAll(".triangle");
    triangles?.forEach((triangle, index) => {
      const angle = (index / 6) * Math.PI * 2; // Calculate angle for each triangle
      const radius = 82; // Base radius for initial position

      // Set the initial position of each triangle in a circular arrangement
      gsap.set(triangle, {
        x: Math.cos(angle) * radius +2,
        y: Math.sin(angle) * radius +2,
        rotation: (angle * 180) / Math.PI,
      });
    });
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-400">
      <div ref={containerRef} className="wrapper relative flex h-[500px] w-[500px] items-center justify-center bg-red-200">
        <div className="relative z-20 flex h-[140px] w-[140px] items-center justify-center overflow-hidden rounded-full border bg-purple-200">
          hello
          <div className="triangle-wrapper absolute h-[140px] w-[140px] hover:scale-75 transition-all duration-300">
            {[...Array(6)].map((_, index) => (
              <svg key={index} className="triangle absolute" width="135" height="135" viewBox="0 0 100 100" style={{ transformOrigin: "50% 50%" }}>
                <polygon
                  points="50,15 90,85 10,85"
                  fill="black" // Fill color for the triangle
                  stroke="white" // White stroke for the outline
                  strokeWidth="2" // Thickness of the outline
                />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
