import React from "react";
import ReviewComponent from "@/components/ReviewComponent";

const reviews = [
  {
    name: "Alice Johnson",
    title: "CEO, Company",
    image: "/client1.avif",
    quote:
      "The team delivered outstanding product photography for our new line. Their meticulous attention to detail and innovative style resulted in images that truly captured the essence of our products. Highly recommended!",
    stars: 4,
  },
  {
    name: "Bob Williams",
    title: "CEO, Company",
    image: "/client2.avif",
    quote:
      "Their product photography services exceeded our expectations. The creative approach and precision in every shot brought our products to life. We couldn't be happier with the results. Highly recommended!",
    stars: 5,
  },
  {
    name: "Charlie Brown",
    title: "CEO, Company",
    image: "/client3.avif",
    quote:
      "Exceptional product photography that highlighted our collection perfectly. Their keen eye for detail and artistic vision made a significant impact on our marketing materials. Highly recommended!",
    stars: 4,
  },
  {
    name: "Diana Evans",
    title: "CEO, Company",
    image: "/client4.avif",
    quote:
      "The product photography provided was top-notch. Their dedication to capturing the perfect shot and their creative flair resulted in stunning images that showcased our products beautifully. Highly recommended!",
    stars: 3,
  },
  {
    name: "Evelyn Clark",
    title: "Marketing Director, Company",
    image: "/client5.avif",
    quote: "Their product photography is simply outstanding. The images captured the essence of our brand perfectly. Highly recommended!",
    stars: 5,
  },
  {
    name: "Frank Miller",
    title: "Product Manager, Company",
    image: "/client6.avif",
    quote: "The attention to detail in their photography is remarkable. The final images exceeded our expectations. Highly recommended!",
    stars: 4,
  },
  {
    name: "Grace Lee",
    title: "Creative Director, Company",
    image: "/client7.avif",
    quote: "Their creative approach to product photography brought our products to life. The results were stunning. Highly recommended!",
    stars: 5,
  },
  {
    name: "Henry Adams",
    title: "Brand Manager, Company",
    image: "/client8.avif",
    quote:
      "The product photography was top-notch. The team's dedication to capturing the perfect shot was evident in every image. Highly recommended!",
    stars: 4,
  },
  {
    name: "Isabella Martinez",
    title: "Sales Director, Company",
    image: "/client9.avif",
    quote:
      "The product photography exceeded our expectations. The images were vibrant and captured the essence of our products beautifully. Highly recommended!",
    stars: 5,
  },
  {
    name: "Jack Wilson",
    title: "Operations Manager, Company",
    image: "/client10.avif",
    quote:
      "Their product photography services were exceptional. The images were of the highest quality and showcased our products perfectly. Highly recommended!",
    stars: 4,
  },
  {
    name: "Karen Thompson",
    title: "Chief Marketing Officer, Company",
    image: "/client11.avif",
    quote: "The product photography was outstanding. The team's creativity and attention to detail resulted in stunning images. Highly recommended!",
    stars: 5,
  },
  {
    name: "Liam Scott",
    title: "Art Director, Company",
    image: "/client12.avif",
    quote: "The product photography was exceptional. The images captured the essence of our brand and products perfectly. Highly recommended!",
    stars: 4,
  },
  {
    name: "Mia Davis",
    title: "Head of Design, Company",
    image: "/client13.avif",
    quote:
      "The product photography was top-notch. The team's dedication to capturing the perfect shot was evident in every image. Highly recommended!",
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section className="w-full bg-black px-5 text-primary md:px-10">
      {/* Title */}
      <div className="flex h-[35vh] md:h-[50vh] w-full flex-col items-center justify-center">
        <h1 className="title">Reviews</h1>
      </div>

      {/* Reviews */}
      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-3 py-[60px] md:py-[100px]">
        {reviews.map((review, index) => (
          <ReviewComponent key={index} {...review} className="flex flex-shrink-0 flex-col gap-5 bg-[#ffffff0d] px-5 py-10" />
        ))}
      </div>
    </section>
  );
}
