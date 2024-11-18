import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaBehance } from "react-icons/fa";

const socials = [
  {
    icon: <AiFillInstagram size={35} />,
    link: "https://www.instagram.com/finnegan_/",
    title: "Instagram",
  },
  {
    icon: <AiFillFacebook size={35} />,
    link: "https://www.facebook.com/finnegan",
    title: "Facebook",
  },
  {
    icon: <AiOutlineTwitter size={35} />,
    link: "https://twitter.com/finnegan",
    title: "Twitter",
  },
  {
    icon: <FaBehance size={35} />,
    link: "https://www.behance.net/finnegan",
    title: "Behance",
  },
  {
    icon: <AiFillYoutube size={35} />,
    link: "https://www.youtube.com/@finnegan",
    title: "YouTube",
  },
  {
    icon: <AiFillLinkedin size={35} />,
    link: "https://www.linkedin.com/in/finnegan",
    title: "LinkedIn",
  },
];

const inputStyles = "w-full border border-[#8888881a] bg-[#ffffff0d] p-3 focus-within:outline-none focus:outline-orange active:outline-none";

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-black px-5 pb-[60px] text-primary md:px-10 md:pb-[100px]">
      {/* Title */}
      <main className="flex h-[40vh] w-full flex-col items-center justify-center">
        <h1 className="title text-primary">Let's talk</h1>
      </main>

      {/* Contact */}
      <section className="flex w-full max-w-[600px] flex-col items-center justify-center gap-[10px]">
        {/* Email */}
        <div className="group flex w-full flex-col items-center bg-[#ffffff1a] p-5 transition-transform duration-500 hover:scale-95">
          <small className="text-[12px] uppercase text-[#faf5ea] opacity-70">Email</small>
          <Link
            href={"mailto:finnegan@mail.com"}
            className="font-ClashDisplay text-[22px] font-thin transition-all duration-500 group-hover:text-orange group-hover:underline"
          >
            Finnegan@mail.com
          </Link>
        </div>

        {/* Phone */}
        <div className="group flex w-full flex-col items-center bg-[#ffffff1a] p-5 transition-transform duration-500 hover:scale-95">
          <small className="text-[12px] uppercase text-[#faf5ea] opacity-70">Phone</small>
          <Link
            href={"tel:+1458741139"}
            className="font-ClashDisplay text-[22px] font-thin transition-all duration-500 group-hover:text-orange group-hover:underline"
          >
            +1458741139
          </Link>
        </div>

        {/* Socials */}
        <div className="grid w-full grid-cols-3 gap-[10px]">
          {socials.map((social, index) => (
            <Link
              href={social.link}
              key={index}
              className="group flex h-[118px] w-full flex-col items-center justify-center gap-3 border-transparent bg-[#ffffff1a] transition-all duration-500 hover:scale-95 hover:border-[1px] hover:border-orange"
            >
              <div className="text-primary transition-colors duration-500 group-hover:text-orange">{social.icon}</div>
              <small className="text-[12px] uppercase text-[#faf5ea] opacity-70">{social.title}</small>
            </Link>
          ))}
        </div>

        {/* Form */}
        <div className="flex w-full flex-col items-center gap-5 bg-[#ffffff1a] p-5 font-Inter text-sm">
          <small className="text-[14px] uppercase text-[#faf5ea] opacity-70">Send a message</small>
          <form className="flex w-full flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              className={inputStyles}
            />
            <div className="flex w-full gap-[10px]">
              <input
                type="email"
                placeholder="Email"
                className={inputStyles}
              />
              <input
                type="tel"
                placeholder="Phone"
                className={inputStyles}
              />
            </div>
            <textarea
              placeholder="Enter your Message"
              className={inputStyles}
              rows={5}
            />
            <button type="submit" className="bg-orange p-3 font-[500]">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
