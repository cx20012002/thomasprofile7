import BlogCard from "@/components/BlogCard";
import React from "react";
import Image from "next/image";
import MouseCursorComponent from "@/components/MouseCursorComponent";
import { TransitionLinkCss } from "@/utils/TransitionLinkCss";

const blogs = [
  {
    imgUrl: "/blog1.avif",
    title: "The art of candid photography: capturing moments naturally",
    category: ["TIPS"],
    date: "APRIL 10, 2024",
    featured: true,
    href: "/blogs/the-art-of-candid-photography",
  },
  {
    imgUrl: "/blog2.avif",
    title: "How to attract and retain photography clients",
    category: ["TIPS"],
    date: "MAY 3, 2024",
    href: "/blogs/how-to-attract-and-retain-photography-clients",
  },
  {
    imgUrl: "/blog3.avif",
    title: "Essential resources for aspiring photographers",
    category: ["RESOURCES"],
    date: "MAY 2, 2024",
    href: "/blogs/essential-resources-for-aspiring-photographers",
  },
  {
    imgUrl: "/blog4.avif",
    title: "Unveiling the Art of Portrait Photography",
    category: ["ARTICLE"],
    date: "APRIL 28, 2024",
    href: "/blogs/unveiling-the-art-of-portrait-photography",
  },
  {
    imgUrl: "/blog5.avif",
    title: "A Travel Photography Adventure",
    category: ["ARTICLE"],
    date: "MAY 4, 2024",
    href: "/blogs/a-travel-photography-adventure",
  },
  {
    imgUrl: "/blog6.avif",
    title: "Capturing the magic of golden hour: a photographer's guide",
    category: ["TIPS"],
    date: "MAY 6, 2024",
    featured: true,
    href: "/blogs/capturing-the-magic-of-golden-hour",
  },
  {
    imgUrl: "/blog7.avif",
    title: "5 tips for capturing stunning landscape photography",
    category: ["TIPS"],
    date: "MAY 2, 2024",
    featured: true,
    href: "/blogs/5-tips-for-capturing-stunning-landscape-photography",
  },
];

export default function Blogs() {
  return (
    <main className="flex w-full flex-col items-center bg-black px-5 text-primary md:px-10">
      <section className="flex h-[35vh] w-full flex-col items-center justify-center">
        <h1 className="title text-primary">Blogs</h1>
      </section>
      <section className="flex w-full max-w-[1680px] flex-col items-center justify-center gap-2">
        <div className="flex w-full flex-col gap-2 md:flex-row md:justify-between">
          <MouseCursorComponent duration={0.8} buttonText="Read" className="relative flex h-[400px] w-full items-start p-5">
            <TransitionLinkCss href="#" className="flex h-full flex-col justify-between overflow-hidden">
              <Image src="/blog1.avif" alt="blog 1" width={700} height={350} className="absolute inset-0 h-full w-full object-cover" />
              <small className="relative rounded-full bg-neutral-800 px-2 py-1 font-Inter text-[12px] uppercase">Featured</small>
            </TransitionLinkCss>
          </MouseCursorComponent>

          <MouseCursorComponent duration={0.8} buttonText="Read" className="relative flex h-[400px] w-full items-start p-5">
            <TransitionLinkCss href="#" className="flex h-full flex-col justify-between overflow-hidden">
              <Image src="/blog2.avif" alt="blog 1" width={700} height={350} className="absolute inset-0 h-full w-full object-cover" />
              <h3 className="relative h-[93px] font-ClashDisplay text-[20px] font-thin leading-[1.3em]">
                Elevate your photos with my signature color grading presets
              </h3>

              <div className="relative flex gap-3 font-Inter text-[12px] font-[400] uppercase">
                <span className="rounded-full bg-[#ffffff1a] px-2 py-1">RESOURCES</span>
                <span className="rounded-full bg-[#ffffff1a] px-2 py-1">March 6, 2024</span>
              </div>
            </TransitionLinkCss>
          </MouseCursorComponent>
        </div>

        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </section>
    </main>
  );
}
