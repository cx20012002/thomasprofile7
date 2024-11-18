"use client";

import React, { useState } from "react";
import { BsImage } from "react-icons/bs";
import { PiVideoFill } from "react-icons/pi";
import VideoCard from "../../components/VideoCard";
import AnimatedComponent from "../../components/AnimatedComponent";
import { TransitionLinkCss } from "@/utils/TransitionLinkCss";

const videos = [
  {
    videoSrc: "https://www.youtube.com/embed/0qAx-bKwS1A?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&color=white",
    posterSrc: "/work1.avif",
    title: "Colorful India",
    href: "/albums/colorful-india",
  },
  {
    videoSrc: "https://www.youtube.com/embed/b6_Nc_gJSgE?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&color=white",
    posterSrc: "/work2.avif",
    title: "Wings of Freedom",
    href: "/albums/wings-of-freedom",
  },
  {
    videoSrc: "https://www.youtube.com/embed/JG0yAlwsCYs?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&color=white",
    posterSrc: "/work3.avif",
    title: "Urban Stories",
    href: "/albums/urban-stories",
  },
  {
    videoSrc: "https://www.youtube.com/embed/ay2e0VXtmfI?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&color=white",
    posterSrc: "/work4.avif",
    title: "Echoes of Dreams",
    href: "/albums/echoes-of-dreams",
  },
  {
    videoSrc: "https://www.youtube.com/embed/Y1-MqhWpJNo?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&color=white",
    posterSrc: "/work5.avif",
    title: "Colorful India",
    href: "/albums/colorful-india",
  },
  {
    videoSrc: "https://www.youtube.com/embed/i8ZhkmKIBvo?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&color=white",
    posterSrc: "/work1.avif",
    title: "Colorful India",
    href: "/albums/colorful-india",
  },
];

export default function Videos() {
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({});

  const handlePlay = (index: number) => {
    setPlayingVideos((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="w-full bg-black px-5 md:px-10">
      <main className="flex h-[35vh] w-full flex-col items-center justify-center">
        <h1 className="title text-primary">Videos</h1>
      </main>
      <section className="flex w-full flex-col items-center justify-center gap-20 pb-32 pt-20 text-primary">
        {/* Albums Switcher */}
        <div className="flex gap-5 border border-[#ffffff4d] p-2">
          <TransitionLinkCss
            href={"/albums"}
            className="flex items-center justify-between gap-5 px-4 py-2 text-neutral-500 transition-all duration-300 hover:text-primary"
          >
            <BsImage size={20} />
            Photos
          </TransitionLinkCss>
          <div className="flex items-center justify-between gap-5 bg-orange px-4 py-2 text-black">
            <PiVideoFill size={25} />
            Videos
          </div>
        </div>

        {/* Albums */}
        <div className="grid w-full max-w-[1680px] grid-cols-1 gap-10 xl:grid-cols-2">
          {videos.map((video, index) => (
            <AnimatedComponent.div key={index} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
              <VideoCard
                key={index}
                videoSrc={video.videoSrc}
                posterSrc={video.posterSrc}
                title={video.title}
                isPlaying={playingVideos[index]}
                onPlay={() => handlePlay(index)}
              />
            </AnimatedComponent.div>
          ))}
        </div>
      </section>
    </div>
  );
}
