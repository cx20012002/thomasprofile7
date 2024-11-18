"use client";

import { useState, useRef, FC, ReactNode } from "react";

interface AccordionItemProps {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

const AccordionItem: FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="group border-b border-neutral-600 text-primary">
      <button
        className="flex w-full items-center justify-between rounded-t-lg py-5 text-left text-[20px] md:text-[22px] font-thin transition-colors duration-300 focus:outline-none group-hover:text-orange"
        onClick={toggleAccordion}
      >
        <span className="pr-5">{title}</span>
        <span className={`transform font-Inter text-2xl font-[300] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : "0",
        }}
      >
        <div className="font-Inter text-[15px] font-[300] pb-5">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
