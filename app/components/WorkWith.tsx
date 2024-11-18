import Image from "next/image";
import React from "react";

export default function WorkWith() {
  return (
    <section className="flex w-full flex-col items-center justify-start gap-[100px] px-5 xl:px-10 py-[30px] xl:py-[150px] font-ClashDisplay font-thin text-primary">
      <div className="flex w-full max-w-[1680px] flex-col items-center justify-center gap-[60px] overflow-hidden">
        <h2 className="summary">Brands I have worked with</h2>
        <div className="w-full grid grid-cols-3 xl:grid-cols-5 gap-[10px]">
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex items-center justify-center h-[132px] bg-[rgba(255,255,255,0.05)]">
                    <Image src={`/logo${index + 1}.svg`} width={130} height={54} alt="Client Logo" className="h-[54px] object-contain" />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
