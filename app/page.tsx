import BannerSection from "./components/BannerSection";
import Faq from "./components/Faq";
import Inspiration from "./components/Inspiration";
import MyExpertise from "./components/MyExpertise";
import SelectedWorks from "./components/SelectedWorks";
import Testimonial from "./components/Testimonial";
import WorkWith from "./components/WorkWith";

export default function Home() {
  return (
    <div className="bg-black">
      <BannerSection />
      <WorkWith />
      <SelectedWorks />
      <MyExpertise />
      <Testimonial />
      <Inspiration />
      <Faq />
    </div>
  );
}
