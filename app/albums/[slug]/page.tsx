import SingleBanner from "../components/SingleBanner";
import SingleContent from "../components/SingleContent";
import SingleGallery from "../components/SingleGallery";
import SingleCarousel from "../components/SingleCarousel";
export default async function SingleAlbum({ params }: { params: Promise<{ slug: string }> }) {
  const slug = await params;

  return (
    <div className="relative w-full bg-black text-primary">
      <SingleBanner />
      <SingleContent />
      <SingleGallery />
      <SingleCarousel />
    </div>
  );
}
