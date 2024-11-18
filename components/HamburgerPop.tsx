import { useGSAP } from "@gsap/react";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TransitionLinkCss } from "@/utils/TransitionLinkCss";

const socialLinks = [
  { name: "Instagram", shortName: "IG", link: "#" },
  { name: "Facebook", shortName: "FB", link: "#" },
  { name: "Twitter", shortName: "TW", link: "#" },
  { name: "LinkedIn", shortName: "LI", link: "#" },
];

const menuLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Albums", link: "/albums" },
  { name: "Reviews", link: "/reviews" },
  { name: "Blogs", link: "/blogs" },
  { name: "Contact", link: "contact" },
];

export default function HamburgerPop({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useGSAP(
    (_, contextSafe) => {
      const popElement = document.querySelector(".hamburger-pop");

      if (isOpen) {
        gsap.fromTo(popElement, { y: "-100%" }, { y: "0%", duration: 0.5, ease: "power2.out" });
        gsap.fromTo(".nav-link", { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 });
      } else {
        gsap.to(popElement, { y: "-100%", duration: 0.5, ease: "power2.in" });
      }

      if (!contextSafe) return;
      const resizeHandler = contextSafe(() => {
        if (window.innerWidth < 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      });

      resizeHandler();

      window.addEventListener("resize", resizeHandler);

      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    },
    [isOpen],
  );

  return (
    <div className="hamburger-pop fixed inset-0 z-30 flex h-screen w-full flex-col items-center justify-between self-center bg-black p-10 text-primary">
      <div className="flex w-full flex-[1_0_0px] flex-col items-start justify-center gap-[6px] font-ClashDisplay text-[40px] font-thin uppercase leading-[0.8em] -tracking-[0.04em] md:text-[80px] xl:text-[96px]">
        {menuLinks.map((menu, index) => (
          <TransitionLinkCss
            setIsOpen={setIsOpen}
            href={menu.link}
            key={index}
            className={`nav-link ${menu.link === pathname ? "text-orange" : "transition-colors duration-300 hover:text-[rgba(255,255,255,0.3)]"}`}
          >
            {menu.name}
          </TransitionLinkCss>
        ))}
      </div>
      <div className="flex w-full flex-[0_0_auto] justify-between divide-x-[1px] border-2 border-primary p-2 font-Inter text-[15px] uppercase">
        {socialLinks.map((social, index) => (
          <Link
            href={social.link}
            key={index}
            className="group flex w-full items-center justify-center gap-3 py-1 transition-colors duration-300 hover:bg-[#ffffff1a] hover:text-orange"
          >
            {isMobile ? social.shortName : social.name}{" "}
            <Image
              src={"/link-arrow-light.svg"}
              alt={"Link Arrow"}
              width={12}
              height={12}
              className={"h-[12px] w-[12px] transition-transform duration-300 group-hover:rotate-45"}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
