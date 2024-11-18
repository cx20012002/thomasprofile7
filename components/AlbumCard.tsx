import Image from "next/image";
import MouseCursorComponent from "./MouseCursorComponent";
import Link from "next/link";
import { TransitionLinkCss } from "@/utils/TransitionLinkCss";

interface AlbumCardProps {
  imageSrc: string;
  categories: string[];
  title: string;
  className?: string;
  href: string;
}

export default function AlbumCard({ imageSrc, categories, title, className, href="#" }: AlbumCardProps) {
  return (
    <MouseCursorComponent className={`album-card flex ${!className && "w-full"} justify-center ${className}`}>
      <TransitionLinkCss href={href} className="group relative w-full">
        {/* Card Wrapper */}
        <div className="relative z-10 flex w-full flex-col items-start justify-start gap-[15px]">
          {/* Image */}
          <div className="h-[366] h-[366px] w-full overflow-hidden">
            <Image src={imageSrc} alt={title} width={632} height={366} className="h-full w-full object-cover" />
          </div>
          {/* Card Body */}
          <div className="flex w-full flex-col gap-3">
            {/* Category Tag */}
            <div className="flex gap-5 font-Inter text-xs font-[300] uppercase">
              {categories.map((category, index) => (
                <span key={index} className="rounded-full bg-darkGrey px-[8px] py-[4px]">
                  {category}
                </span>
              ))}
            </div>
            {/* Title */}
            <div className="flex w-full items-center justify-between">
              <h3 className="font-ClashDisplay text-[28px] font-thin leading-none">{title}</h3>
              <Image src="/link-arrow-light.svg" alt="Link Arrow" width={12} height={12} className="h-[15px] w-[15px]" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 h-full w-full scale-95 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
          <div className="absolute left-[-20px] top-[-20px] h-[40px] w-[40px] border-l border-t" />
          <div className="absolute right-[-20px] top-[-20px] h-[40px] w-[40px] border-r border-t" />
          <div className="absolute bottom-[-20px] right-[-20px] h-[40px] w-[40px] border-b border-r" />
          <div className="absolute bottom-[-20px] left-[-20px] h-[40px] w-[40px] border-b border-l" />
        </div>
      </TransitionLinkCss>
    </MouseCursorComponent>
  );
}
