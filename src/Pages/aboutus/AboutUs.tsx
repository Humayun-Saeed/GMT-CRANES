import { PageImage } from "src/Components/pageImage/PageImage";
import {
  AboutUsImage,
  AboutUsImagepage,
  AboutUsMobileImage,
  CompletedIcon,
} from "src/Utils/MediaFilesPath";
import CircleSection from "./CircleSection/CircleSection";
import LazyShow from "src/animations/LazyShow";

 const  AboutUs = () => {
  const AboutUsPageContent = [
    // {
    //   title: "About Us",
    //   description:
    //     "Egypt, and a fleet of 100 cranes placed around the world, we can swiftly provide you with all the lifting equipment you need to successfully complete your project. Special–duty cycle cranes can be supplied for dredging work or other heavy–duty job applications. Our fleet of 50– to 1250–ton cranes is available for both rental and sale options.",
    // },
    {
      title: "Services",
      description:
        "can provide you with cranes, technicians, maintenance, and training. Our 24–hour service teams maintain the equipment to the highest standards, and with a worldwide network of offices, we can provide our customers with local support for any project.",
    },
    {
      title: "Cranes",
      description:
        "Our fleet consists of crawler and mobile cranes, both lifting and heavy–duty cycle cranes. With our capacity to supply cranes ranging from 50 to 500 tonnes, we will always have a crane available for your next project. ",
    },
    {
      title: "Industory",
      description:
        "Due to the wide range of cranes in our worldwide fleet, we can deliver to most projects and industries. Our experience in on– and offshore, petrochemical, foundation, marine, and renewable power projects make us a reliable all–round partner for your heavy lifting equipment.",
    },
  ];
  return (
    <>
      <PageImage
        title="ABOUT US"
        image={AboutUsImage}
        mobile={AboutUsMobileImage}
      />
      <LazyShow>
      <section className="main-container">
        <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
          <div className="p-[4%]">
            <h2 className="text-3xl mt-[1rem] font-bold text-center sm:text-5xl">
              ABOUT US
            </h2>
            <p className="max-w-3xl mt-[1rem] mx-auto mt-4 text-xl text-center ">
              With our headquarters in Dubai , and a fleet of 100 cranes
              strategically positioned , we are equipped to promptly
              supply you with all the lifting equipment necessary for the
              successful completion of your project. Whether you require
              special-duty cycle cranes for dredging work or other heavy-duty
              applications, we have you covered. Our diverse fleet ranges from
              50 to 500 tons and is available for both rental and sale options,
              providing flexibility to meet your specific needs.
            </p>
          </div>
          <div className="grid lg:gap-[8rem] lg:grid-cols-2 lg:items-center">
            <div>
              {AboutUsPageContent?.map((item, index) => (
                <div key={index} className="mt-[4rem] space-y-[12px] ">
                  <div className="flex ">
                    {/* Added flex and items-center classes */}
                    <div className="flex-shrink-0">
                      <div className=" w-[1.5rem] h-[1.5rem] rounded-md dark:bg-emerald-4 dark:text-gray-900">
                        <img
                          src={CompletedIcon}
                          className="mt-[0.6rem] h-[full] w-full"
                          alt="Completed Icon"
                        />
                        {/* Added alt attribute */}
                      </div>
                    </div>
                    <div className="ml-[14px]">
                      <h4 className="text-2xl  font-bold">{item?.title}</h4>
                      <p className="mt-2 text-color">{item?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
               
                src={AboutUsImagepage}
                className="mx-auto rounded-lg shadow-lg w-full h-full dark-bg-gray-500"
                alt="Background Image"
                style={{ color: "transparent",marginTop:20 }}
              />
            </div>
          </div>
        </div>
        <CircleSection />
      </section>
      </LazyShow>
    </>
  );
};


export default AboutUs