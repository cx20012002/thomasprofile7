"use client";

import VideoCard from "@/components/VideoCard";
import Image from "next/image";
import React, { useState } from "react";

export default function SingleGallery() {
  const [playingVideos, setPlayingVideos] = useState<boolean>(false);

  const handlePlay = () => {
    setPlayingVideos(true);
  };
  return (
    <section className="relative flex w-full flex-col items-center gap-2">
      {/* gallery */}
      <div className="relative flex flex-col md:flex-row w-full max-w-[1900px] gap-2 px-2">
        {/* left */}
        <div className="md:sticky top-0 h-fit w-full flex-1">
          <div className="flex w-full flex-col gap-2">
            <Image src={"/s1.avif"} alt="work1" width={1200} height={600} className="w-full" />
            <Image src={"/s2.avif"} alt="work2" width={1200} height={600} className="w-full" />
            <Image src={"/s3.avif"} alt="work2" width={1200} height={600} className="w-full" />
            <Image src={"/s4.avif"} alt="work2" width={1200} height={600} className="w-full" />
            <Image src={"/s5.avif"} alt="work2" width={1200} height={600} className="w-full" />
          </div>
        </div>

        {/* right */}
        <div className="md:sticky top-0 h-fit w-full flex-1">
          <div className="flex w-full flex-col gap-2">
            <Image src={"/s6.avif"} alt="work1" width={1200} height={600} className="w-full" />
            <Image src={"/s7.avif"} alt="work2" width={1200} height={600} className="w-full" />
            <Image src={"/s8.avif"} alt="work2" width={1200} height={600} className="w-full" />
            <Image src={"/s9.avif"} alt="work2" width={1200} height={600} className="w-full" />
            <Image src={"/s10.avif"} alt="work2" width={1200} height={600} className="w-full" />
          </div>
        </div>
      </div>

      {/* video */}
      <div className="relative flex w-full max-w-[1900px] gap-2 px-2">
        <VideoCard
          videoSrc={"https://www.youtube.com/embed/JG0yAlwsCYs?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1"}
          posterSrc={"/s1.avif"}
          title="Video Title"
          isPlaying={playingVideos}
          onPlay={handlePlay}
        />
      </div>
    </section>
  );
}
