import BlogCard from "@/components/BlogCard";
import ButtonComponent from "@/components/ButtonComponent";

const blogData = [
  {
    imgUrl: "/blog1.avif",
    title: "Elevate your photos with my signature color grading presets",
    category: ["Resources", "March 6, 2024"],
  },
  {
    imgUrl: "/blog2.avif",
    title: "How to create a stunning portfolio website in minutes",
    category: ["Resources", "March 6, 2024"],
  },
  {
    imgUrl: "/blog3.avif",
    title: "The ultimate guide to creating a successful online store",
    category: ["Resources", "March 6, 2024"],
  },
];

export default function Inspiration() {
  return (
    <section className="mx-auto flex w-full flex-col gap-[60px] px-5 pb-[60px] pt-[30px] font-ClashDisplay font-thin text-primary md:px-10 md:py-[150px]">
      {/* Title */}
      <div className="w-full">
        <h2 className="summary w-full max-w-[1680px] text-center md:text-left">Stay inspired with my</h2>
        <h2 className="subtitle w-full max-w-[1680px] text-center text-orange md:text-right">Insightful Articles</h2>
      </div>

      {/* Grid */}
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((blog, index) => (
          <BlogCard key={index} imgUrl={blog.imgUrl} title={blog.title} category={blog.category} />
        ))}
      </div>

      {/* Button */}
      <div className="flex w-full justify-center md:justify-end">
        <ButtonComponent buttonText="All Blogs" href="/blogs" />
      </div>
    </section>
  );
}
