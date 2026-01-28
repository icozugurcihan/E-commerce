import Slider from "../components/Slider";
import EditorsPick from "../components/EditorsPick";
import Bestseller from "../components/Bestseller";
import SliderPromo from "../components/SliderPromo";
import PromoBanner from "../components/PromoBanner";
import FeaturedPosts from "../components/FeaturedPosts";
export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* HERO SECTION */}
      <section className="flex">
        <Slider />
      </section>

      {/* EDITOR'S PICK */}
      <EditorsPick />
      <Bestseller />
      <SliderPromo />
      <PromoBanner />
      <FeaturedPosts />
    </div>
  );
}
