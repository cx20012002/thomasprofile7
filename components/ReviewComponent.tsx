import Image from "next/image";

interface ReviewProps {
  name: string;
  title: string;
  image: string;
  quote: string;
  stars: number;
  className?: string;
}

export default function ReviewComponent({ name, title, image, quote, stars, className }: ReviewProps) {
  return (
    <div className={`reviews-card ${className}`}>
      <div className="flex flex-col gap-5">
        <div className={"relative flex h-[63px] w-[63px] items-center justify-center text-[8px]"}>
          <Image src={image} alt={name} width={50} height={50} className="aspect-square w-full rounded-full object-cover" />
          <div className="absolute left-0 top-0 h-[7px] w-[7px] border-l-[1px] border-t-[1px]" />
          <div className="absolute right-0 top-0 h-[7px] w-[7px] border-r-[1px] border-t-[1px]" />
          <div className="absolute bottom-0 right-0 h-[7px] w-[7px] border-b-[1px] border-r-[1px]" />
          <div className="absolute bottom-0 left-0 h-[7px] w-[7px] border-b-[1px] border-l-[1px]" />
        </div>
        <div className="font-Inter text-[16px] font-[300]">"{quote}"</div>
      </div>
      <hr className="border-1 border-[#ffffff1a]" />
      <div className="flex flex-col gap-2 font-Inter font-[300]">
        <div className="font-ClashDisplay text-[22px] font-thin">{name}</div>
        <small className="text-neutral-400">{title}</small>
        <div className="flex gap-3">
          {[...Array(stars)].map((_, index) => (
            <Image key={index} src="/star.svg" alt="star" width={15} height={15} className="aspect-square w-[15px]" />
          ))}
        </div>
      </div>
    </div>
  );
}
