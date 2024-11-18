import Image from "next/image";
import Link from "next/link";
import MouseCursorComponent from "./MouseCursorComponent";
import { TransitionLinkCss } from "@/utils/TransitionLinkCss";

interface BlogCardProps {
  imgUrl?: string;
  title?: string;
  category?: string[];
  className?: string;
  href?: string;
}

export default function BlogCard({ imgUrl = "/blog.avif", title = "Blog Title", category = ["cat1, cat2"], className, href = "#" }: BlogCardProps) {
  return (
    <MouseCursorComponent duration={0.8} buttonText="Read" className={className}>
      <TransitionLinkCss href={href} className={"group flex flex-col gap-[3px]"}>
        <div className="relative h-[250px] w-full overflow-hidden">
          <Image
            src={imgUrl}
            width={412}
            height={250}
            alt="Blog Image"
            className="aspect-[calc(412/250)] h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col bg-[#ffffff1a] p-4">
          <h3 className="h-[93px] font-ClashDisplay text-[20px] font-thin leading-[1.3em]">{title}</h3>
          <div className="flex gap-3 font-Inter text-[12px] font-[400] uppercase">
            {category.map((cat, index) => (
              <span key={index} className="rounded-full bg-[#ffffff1a] px-2 py-1">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </TransitionLinkCss>
    </MouseCursorComponent>
  );
}
