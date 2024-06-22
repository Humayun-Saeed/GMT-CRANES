import { useLocation } from "react-router-dom";
import LazyShow from "src/animations/LazyShow";

const renderSplitDescription = (description) => {
  const sentences = description.split(". ");

  const splitIndex = Math.ceil(sentences.length / 2);

  const firstHalf = sentences.slice(0, splitIndex).join(". ");
  const secondHalf = sentences.slice(splitIndex).join(". ");

  return (
    <>
      <p className="mt-[2rem] text-slate-500">{firstHalf}</p>
      <p className="mt-[2rem] text-slate-500">{secondHalf}</p>
    </>
  );
};

 const ServiceDetails = () => {
  const location = useLocation();
  const { image, title, service } = location.state;

  return (
    <LazyShow>
      <div className="main-container">
        <div className="max-w-md mt-[9rem] mx-auto bg-white h-screen overflow-hidden md:max-w-[70%]">
          <div className="md:flex md:gap-[5rem]">
            <div className="mobile:order-1">
              <h1 className="uppercase text-3xl font-semibold">{title}</h1>
              <div className="h-[0.4rem] text-[1.1rem] leading-[1.6] font-medium text-text-color rounded-[3rem] mt-[0.5rem] w-[10rem] bg-[red] "></div>
              {renderSplitDescription(service)}
            </div>
            <div className="md:shrink-0 h-[30rem] md:max-w-[50%] mobile:order-2">
              {/* Ensure the alt text accurately describes the image */}
              <img
                className="h-full w-full object-contain md:h-full md:max-w-full"
                src={image}
                alt="A modern building"
              />
            </div>
          </div>
          {/* <div className="h-[18rem] z-[50] mt-[2rem] w-full flex-col items-center justify-center flex bg-[black]">
            <h1 className="text-[white]  md:text-3xl md:font-semibold">
              ARE YOU INTERESTED IN BUYING OR RENTING A CRANE?
            </h1>
            <a
              href="#"
              className="inline-flex mt-[1rem] max-w-[23%] items-center px-[3rem] py-[0.7rem] text-sm font-medium text-center text-[white] bg-[red] rounded-lg hover:bg-[red]/30 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Acquire Now
            </a>
        </div> */}
          {/* <ContactUs/> */}
        </div>
      </div>
    </LazyShow>
  );
};


export default ServiceDetails