import AlbumCard from "@/components/AlbumCard";
import { TransitionLinkCss } from "@/utils/TransitionLinkCss";
import React from "react";
import { BsImage } from "react-icons/bs";
import { PiVideoFill } from "react-icons/pi";

const albums = [
  {
    imageSrc: "/work1.avif",
    categories: ["Travel", "Collaboration"],
    title: "Colorful India",
    href: "/albums/colorful-india",
  },
  {
    imageSrc: "/work2.avif",
    categories: ["Aerial & Drone", "Passion Project"],
    title: "Wings of Freedom",
    href: "/albums/wings-of-freedom",
  },
  {
    imageSrc: "/work3.avif",
    categories: ["Portrait", "Commercial"],
    title: "Urban Stories",
    href: "/albums/urban-stories",
  },
  {
    imageSrc: "/work4.avif",
    categories: ["Conceptual", "Commercial"],
    title: "Echoes of Dreams",
    href: "/albums/echoes-of-dreams",
  },
  {
    imageSrc: "/work5.avif",
    categories: ["Travel", "Collaboration"],
    title: "Colorful India",
    href: "/albums/colorful-india",
  },
];

export default function Albums() {
  return (
    <div className="w-full bg-black px-5 md:px-10">
      <main className="flex h-[50vh] w-full flex-col items-center justify-center">
        <h1 className="title text-primary">Albums</h1>
      </main>
      <section className="flex w-full flex-col items-center justify-center gap-20 pb-32 pt-20 text-primary">
        {/* Albums Switcher */}
        <div className="flex gap-5 border border-[#ffffff4d] p-2">
          <div className="flex items-center justify-between gap-5 bg-orange px-4 py-2 text-black">
            <BsImage size={20} />
            Photos
          </div>
          <TransitionLinkCss
            href={"/videos"}
            className="flex items-center justify-between gap-5 px-4 py-2 text-neutral-500 transition-all duration-300 hover:text-primary"
          >
            <PiVideoFill size={25} />
            Videos
          </TransitionLinkCss>
        </div>

        {/* Albums */}
        <div className="grid w-full max-w-[1680px] grid-cols-1 gap-10 xl:grid-cols-2">
          {albums.map((album, index) => (
            <AlbumCard key={index} {...album} />
          ))}
        </div>
      </section>
    </div>
  );
}
