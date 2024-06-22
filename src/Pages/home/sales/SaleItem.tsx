import {
  AboutImage,
  Demo2,
  LTM500,
  R30,
  T15,
  eiaci,
  jafza,
  sabic,
} from "src/Utils/MediaFilesPath";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";

import classes from "./SalesItem.module.css";

import "swiper/css";
import "swiper/css/autoplay";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import LazyShow from "src/animations/LazyShow";
SwiperCore.use([Autoplay, Pagination]);

const SaleItem = (props: any) => {
  const [data, setData] = useState<any[]>([]);
  const Type = props.Type;

  const salesData = [
    {
      image: LTM500,
      title: "LIEBHERR LTM1095-5.1",
      features: [
        { capcity: "7 Ton" },
        { width: "24 Feet" },
        { length: "6 Feet" },
      ],
      description:
        "The Liebherr LTM1095–5.1 is a state–of–the–art mobile crane that offers superior performance and reliability. With a maximum lifting capacity of 100t, a maximum boom length of 58 metres, and a maximum jib length of 19 metres, this crane is capable of handling even the most complex and challenging lifting jobs. Its advanced features, such as its four–section telescopic boom, its powerful engine, and its advanced safety systems, make it an ideal choice for construction and industrial applications. Located in Europe for quick transportation to your jobsite. For all technical specifications download the brochure or request a quote.",
    },
    {
      image: R30,
      title: "Recovery 30 Ton",
      features: [
        { capcity: "7 Ton" },
        { width: "24 Feet" },
        { length: "6 Feet" },
      ],
      description:
        "The 'Recovery 30 Ton' crane is a robust solution designed for heavy-duty recovery operations. With a lifting capacity of 30 tons, it is equipped to handle demanding tasks with ease. Its features include a lifting capacity of 7 tons, a width of 24 feet, and a length of 6 feet. This crane is engineered to deliver reliable performance in challenging recovery scenarios, making it a dependable choice for various industrial applications.",
    },
    {
      image: T15,
      title: "Truck 20 Ton",
      features: [
        { capcity: "7 Ton" },
        { width: "24 Feet" },
        { length: "6 Feet" },
      ],
      description:
        "The 'Truck 20 Ton' truck is a versatile vehicle tailored for demanding recovery operations. Boasting a lifting capacity of 20 tons, it excels in tackling heavy-duty tasks with precision. Its key features include a lifting capacity of 7 tons, a width spanning 24 feet, and a length extending 6 feet. Engineered to deliver optimal performance, this truck is well-suited for a wide range of recovery applications, offering reliability and efficiency when it matters most.",
    },
    { image: AboutImage, title: "Crane" },
  ];

  const compnyData = [jafza, eiaci, sabic, Demo2, sabic];

  useEffect(() => {
    if (Type === "sell") {
      setData(salesData);
    } else {
      setData(compnyData);
    }
  }, [Type]);

  const swiperRef = useRef(null);

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

  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate("/productdetails", {
      state: {
        title: item.title,
        description: item.description,
        image: item.image,
        features: item.features,
      },
    });
  };
  return (
    <LazyShow>
      <div className="flex flex-col items-center">
        {Type === "sell" && (
          <h1 className="m-auto text-3xl font-semibold mt-[2rem]">
            SALE PRODUCTS
          </h1>
        )}
        <div className={classes["swiper-container"]}>
          <div className="flex items-center md:gap-4">
            {Type === "sell" && (
              <div
                className="flex items-center justify-center w-[16px] h-[16px] transition-all bg-white rounded-full cursor-pointer swiper-custom-button aspect-square hover:scale-110"
                onClick={goPrev}
              >
                <IoArrowBackOutline />
              </div>
            )}
            <Swiper
              ref={swiperRef}
              className="grid w-full h-full  p-[4px] md:p-[8px] cursor-grab active:cursor-grabbing"
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                // when window width is <= 768px (tablet)
                768: {
                  slidesPerView: 1,
                },
                // when window width is <= 1024px (tablet landscape and larger)
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {data.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={classes["sale-item"]}>
                      <div className="h-[70%] max-w-[100%] w-full ">
                        <img
                          src={Type === "sell" ? item.image : item}
                          className={
                            Type === "sell"
                              ? classes["swiper-img"]
                              : classes["swiper-company-img"]
                          }
                          alt="sale"
                        />
                      </div>
                      <div className="m-auto">
                        {Type === "sell" && (
                          <>
                            <p className="text-xl font-bold">{item.title} </p>
                            <div
                              onClick={() => {
                                handleNavigate(item);
                              }}
                              className="h-[2.5rem] mt-[1rem] m-auto w-[8rem] bg-[red] rounded-full justify-center flex items-center"
                            >
                              <p className="text-[0.8rem] font-bold text-[white]">
                                Send Enquiry
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {Type === "sell" && (
              <div
                className="flex items-center justify-center w-[16px] h-[16px] transition-all bg-white rounded-full cursor-pointer swiper-custom-button aspect-square hover:scale-110"
                onClick={goNext}
              >
                {Type === "sell" && <MdArrowForward />}
              </div>
            )}
          </div>
        </div>
      </div>
    </LazyShow>
  );
};

export default SaleItem;
