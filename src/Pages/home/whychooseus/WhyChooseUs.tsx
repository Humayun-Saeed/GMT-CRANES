import { ChooseUsSwiperSection } from "./ChooseUsSwiperSection/ChooseUsSwiperSection";
import LazyShow from "src/animations/LazyShow";

 const WhyChooseUs = () => {
  return (
    <LazyShow>
    <div className="max-w-[80%] mx-auto pb-[4rem] text-center mt-[2rem] pt-[1rem]">
      <h1 className="text-3xl font-semibold"> WHY CHOOSE US</h1>
      <div className="mt-[2rem]">
      <ChooseUsSwiperSection />
      </div>
    </div>
    </LazyShow>
  );
};

export default WhyChooseUs
