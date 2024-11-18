import Link from "next/link";
import Image from "next/image";
import { TransitionLinkCss } from "@/utils/TransitionLinkCss";

interface ButtonComponentProps {
  className?: string;
  buttonText?: string;
  href?: string;
}

export default function ButtonComponent({ className, buttonText = "Button Text", href = "#" }: ButtonComponentProps) {
  return (
    <TransitionLinkCss className={`group flex items-center justify-center text-[15px] font-[500] ${className}`} href={href}>
      <div className={"flex h-[50px] items-center justify-center border border-r-0 border-primary px-[15px] py-[20px] uppercase"}>{buttonText}</div>
      <div className={"flex h-[50px] w-[50px] items-center justify-center border border-primary p-[10px]"}>
        <Image
          src={"/link-arrow-light.svg"}
          alt={"Link Arrow"}
          width={12}
          height={12}
          className={"h-[12px] w-[12px] rotate-45 transition-transform duration-300 group-hover:rotate-0"}
        />
      </div>
    </TransitionLinkCss>
  );
}
