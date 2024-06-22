import {
  SwiperBackButtonIcon,
  SwiperNextButtonIcon,
} from "src/Utils/MediaFilesPath";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { PiHandsClapping } from "react-icons/pi";
import { LuRocket } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LiaEnvira } from "react-icons/lia";

export const ChooseUsSwiperSection = () => {
  const swiperRef = useRef(null);

  const data = [
    {
        icon: <PiHandsClapping className="h-[2rem] w-[10rem]" />,
        title: "Budget-Friendly Solutions",
        description:
          "At GMT Cranes and Heavy Equipment, we offer budget-friendly solutions without compromising on quality. Experience top-notch equipment and services at unbeatable prices, making your project both efficient and cost-effective.",
      },
    {
      icon: <BsFillPersonCheckFill className="h-[2rem] w-[10rem]" />,
      title: "Safety First",
      description:
        "We prioritize the safety of our crew, your cargo, and the environment. Our strict safety protocols and adherence to industry best practices set us apart.",
    },
    {
      icon: <LuRocket className="h-[2rem] w-[10rem]" />,
      title: "Fast Services",
      description:
        "With a great network of partners, we can serve you wherever you need us.",
    },
    {
      icon: <MdOutlineSupportAgent className="h-[2rem] w-[10rem]" />,
      title: "24/7 Support",
      description:
        "Description: Rest assured with our round-the-clock support, providing assistance and solutions whenever you need them, day or night.",
    },
    {
      icon: <PiHandsClapping className="h-[2rem] w-[10rem]" />,
      title: "Customer Satisfaction",
      description:
        "Description: Your satisfaction is our top priority. Experience exceptional service and personalized attention that exceeds your expectations every step of the way.",
    },
    {
      icon: <LiaEnvira className="h-[2rem] w-[10rem]" />,
      title: "Environmental Responsibility",
      description:
        "We are committed to reducing our environmental footprint. Our vessels comply with the most stringent environmental regulations.",
    },
  ];

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="flex items-center mobile:gap-[2rem] md:gap-[1rem]">
      <div
        className="flex items-center justify-center w-[1rem] h-[1rem] transition-all bg-[white] rounded-full cursor-pointer swiper-custom-button aspect-square hover:scale-110"
        onClick={goPrev}
      >
        <img src={SwiperBackButtonIcon} alt="Swiper Back" />
      </div>

      <Swiper
        ref={swiperRef}
        className="!grid !w-full !h-full !p-[1rem] md:p-[2rem] cursor-grab active:cursor-grabbing"
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          // when window width is <= 768px (tablet)
          768: {
            slidesPerView: 1,
          },
          // when window width is <= 1024px (tablet landscape and larger)
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="group h-full flex flex-col gap-[0.1875rem] text-center p-[1.5rem] md:p-[2.25rem] rounded-[2.1875rem] bg-white card-shadow transition-all hover:bg-[red] text-main-color-5 hover:text-[white]">
              <div className="flex flex-col items-center gap-[0.3125rem]">
                {item.icon}
                {/* <img
                      src={item.icon}
                      alt="Icon"
                      className="max-w-[2rem] max-h-[2rem] group-hover:brightness-[9]"
                    /> */}
                <h2 className="text-[1.125rem] font-semibold">{item.title}</h2>
              </div>
              <p className="text-[1rem] font-medium">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="flex items-center justify-center w-[1rem] h-[1rem] transition-all bg-white rounded-full cursor-pointer swiper-custom-button aspect-square hover:scale-110"
        onClick={goNext}
      >
        <img src={SwiperNextButtonIcon} alt="Swiper Next" />
      </div>
    </div>
  );
};
