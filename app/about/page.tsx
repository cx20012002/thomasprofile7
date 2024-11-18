"use client";

import React from "react";
import BannerComponent from "./components/BannerComponent";
import IntroComponent from "./components/IntroComponent";
import ProfessionComponent from "./components/ProfessionComponent";
import AwardsComponent from "./components/AwardsComponent";
import GearsComponent from "./components/GearsComponent";

export default function About() {
  return (
    <main className="relative flex w-full flex-col place-content-center items-center bg-black text-primary">
      <BannerComponent />
      <IntroComponent />
      <ProfessionComponent />
      <AwardsComponent />
      <GearsComponent />
    </main>
  );
}
