import Link from "next/link";
import React from "react";
import { BsCamera } from "react-icons/bs";
import { PiLaptopLight } from "react-icons/pi";
import { RiAsterisk, RiCameraLensLine } from "react-icons/ri";

const gears = [
  {
    title: "Cameras",
    icon: <BsCamera size={20} className="text-orange" />,
    list: ["Canon EOS R5", "Sony Alpha a7 III", "Fujifilm X-T4"],
  },
  {
    title: "Lenses",
    icon: <RiCameraLensLine size={22} className="text-orange" />,
    list: ["Canon RF 24-70mm f/2.8L IS USM", "Fujinon XF 16-55mm f/2.8 R LM WR", "Sigma 35mm f/1.4 DG HSM Art", "Sony FE 85mm f/1.4 GM"],
  },
  {
    title: "Other Accessories",
    icon: <RiAsterisk size={22} className="text-orange" />,
    list: [
      "Godox AD200 Pro",
      "Profoto B10",
      "Neewer Ring Light Kit",
      "Manfrotto Befree Advanced Tripod",
      "DJI Ronin-S Gimbal",
      "Peak Design Everyday Backpack",
      "SanDisk Extreme Pro SD Cards",
    ],
  },
  {
    title: "Editing Tools",
    icon: <PiLaptopLight size={23} className="text-orange" />,
    list: ["Adobe Creative Cloud", "Wacom Intuos Pro Tablet", "Calibrite ColorChecker Display Pro"],
  },
];

export default function GearsComponent() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-[30px] px-5 pb-[60px] pt-[30px] text-primary md:px-10 md:pb-[100px] md:pt-[150px]">
      <div className="relative flex w-full max-w-[1200px] flex-col items-center justify-center gap-[40px] md:gap-[60px]">
        {/* Title */}
        <h2 className="subtitle text-orange">Glears lown</h2>

        {/* List of gears */}
        <div className="flex w-full max-w-[1200px] flex-col justify-center gap-[100px] border border-[#ffffff1a] bg-[#ffffff0d] px-10 py-[30px]">
          {gears.map((gear, index) => (
            <div key={index} className="flex flex-col gap-[20px]">
              <h3 className="summary">{gear.title}</h3>
              <div className="bodyText grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {gear.list.map((item, index) => (
                  <Link href={"#"} key={index} className="flex items-center gap-2">
                    {gear.icon}
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
