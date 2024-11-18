import React from "react";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";

const blogs = [
  {
    imgUrl: "/blog2.avif",
    title: "Mastering the Art of Landscape Photography",
    category: ["Photography", "Tips"],
    className: "blog-card",
    href: "/blogs/mastering-landscape-photography",
  },
  {
    imgUrl: "/blog3.avif",
    title: "The Ultimate Guide to Street Photography",
    category: ["Photography", "Guide"],
    className: "blog-card",
    href: "/blogs/ultimate-guide-street-photography",
  },
  {
    imgUrl: "/blog4.avif",
    title: "How to Capture Stunning Portraits",
    category: ["Photography", "Portraits"],
    className: "blog-card",
    href: "/blogs/capture-stunning-portraits",
  },
];
export default function SingleBlog() {
  return (
    <section className="singleBlog flex w-full flex-col items-center justify-center gap-[31px] bg-black pt-[134px] text-primary">
      {/* Title */}
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-[30px] px-[50px]">
        <h1 className="w-full max-w-[800px] text-center font-ClashDisplay text-[30px] font-thin leading-[90%] tracking-[-0.04em] md:text-[56px] xl:text-[66px]">
          Elevate your photos with my signature color grading presets
        </h1>
        <div className="flex w-full justify-center gap-5 text-xs uppercase">
          <div>
            Category: <span className="text-orange">Resources</span>
          </div>
          <div>March 6, 2024</div>
        </div>
      </div>

      {/* Image */}
      <div className="flex w-full max-w-[800px] justify-center">
        <Image src="/blog1.avif" alt="blog" width={1200} height={600} className="w-full" />
      </div>

      {/* Content */}
      <div className="flex w-full flex-col items-center justify-center gap-[10px] px-[20px] py-[30px]  md:py-[100px]">
        <div className="w-full max-w-[800px]">
          <p>
            Are you looking to add a touch of magic to your photos? Our exclusive color grading presets are designed to transform your images with
            just a few clicks. Whether you’re a seasoned photographer or just starting out, these presets will help you achieve stunning,
            professional-quality results.
          </p>
          <h4 className="">Introducing Our Signature Presets</h4>
          <p>
            Are you looking to add a touch of magic to your photos? Our exclusive color grading presets are designed to transform your images with
            just a few clicks. Whether you’re a seasoned photographer or just starting out, these presets will help you achieve stunning,
            professional-quality results.
          </p>
          <Image src="/singleBlog1.avif" alt="blog" width={1200} height={600} className="w-full" />
        </div>
      </div>

      {/* Related Blogs */}
      <div className="flex w-full flex-col items-center justify-center gap-40 bg-[#ffffff0d] px-5 md:px-10 py-[30px] md:py-[100px]">
        <div className="flex w-full max-w-[1680px] flex-col gap-5">
          <h2 className="summary">Read other Blogs</h2>
          <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
