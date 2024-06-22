import {
  CivilConstruction,
  HeavyLifting,
  CarRecovery,
  GulfServices,
  ServiceBackgroundImage,
  ServiceBackgroudMobileImage,
  Transport,
} from "src/Utils/MediaFilesPath";
import { PageImage } from "src/Components/pageImage/PageImage";
import LazyShow from "src/animations/LazyShow";

const data = [
  {
    reverse: true,
    image: HeavyLifting,
    title: "Heavy Lifiting",
    description:
      "GMT has the largest fleet of cranes and other specialised equipment for complete lifting solutions that range from conventional to highly innovative alternative lifting methods.All our specialised equipment is available for rent with or without operator for long term requirements as well as short-term. We will take care of everything – from maintenance to safety necessities, so you can run your project efficiently. With highly skilled and trained personnel along with state of the art equipment, Al Faris group strives to ensure that every lift is preformed safely with utmost perfection. We aim to save you time by understanding of all of your requirements and specify the most efficient and economical solution to ensure your project needs are met.",
  
    },
  {
    reverse: false,
    image: GulfServices,
    description:
    "At GMT Cranes and Heavy Equipment, we go beyond crane rentals and sales, offering comprehensive transportation solutions across Gulf countries. Our fleet of trucks and heavy transport vehicles ensures efficient and reliable transportation of goods and equipment to your desired destinations. Whether you need to move heavy machinery, construction materials, or oversized cargo, we have the expertise and resources to handle your transportation needs with precision and care. With a commitment to safety, timeliness, and professionalism, we strive to exceed your expectations and deliver exceptional service every step of the way. Trust GMT Cranes and Heavy Equipment for all your transportation requirements in the Gulf region.",
    title: "Gulf Countries Transportation",
    },
  {
    reverse: true,
    image: CivilConstruction,
    title: "Civil Construction",
    description:
      "GMT Cranes has a strong background in civil construction equipment, which is why we can assist you with the right choice of cranes or other related construction equipment through our sister companies. With over 60 years of experience in construction equipment, the right choice of equipment can not only save you money but also valuable construction time. Our background and experience enables you to use us as a “one–stop shop“ for your construction equipment needs. Need a crane that is mobile on the jobsite or one that can maneuver tight spaces with ease? Check our products page or contact our sales managers; they are happy to advise you on the best equipment for your job.",
  },
  {
    reverse: false,
    image: Transport,
    title: "Transport Services",
    description:
      "Our company offers premier truck transport services tailored to meet your logistics needs efficiently and reliably. With a modern fleet of well-maintained vehicles and skilled drivers, we ensure prompt and secure delivery of your goods, whether local or long-distance. Our commitment to safety and compliance with transportation regulations guarantees peace of mind for our clients. Moreover, our state-of-the-art tracking systems provide real-time visibility into your shipments, ensuring transparency every step of the way. Trust us to be your reliable partner in freight transportation, facilitating smooth and hassle-free logistics operations for your business",
  
    },
  {
    reverse: true,
    image: CarRecovery,
    title: "Car Recovery",
    description:
      "Our company specializes in professional car recovery services, offering swift and dependable assistance whenever you encounter vehicle troubles. With a dedicated team of experienced technicians and a fleet of specialized recovery vehicles, we ensure prompt roadside assistance and vehicle transportation to your desired location. Our commitment to customer satisfaction and efficiency makes us the ideal choice for all your car recovery needs, providing peace of mind during stressful situations on the road.",
 
    },

];

const RenderRow = (props: any) => (
  <div
    key={props.key}
    className={`flex flex-col p-[4%]  lg:flex-row gap-[6rem]  bg- mx-auto py-[1rem] ${
      props.reverse && "lg:flex-row-reverse"
    }`}
  >
    <div className="flex items-center justify-center ">
      <div className="text-[20rem] md:text-[28.125rem] leading-none font-bold bg-services-number-bg-image bg-center bg-cover w-fit text-transparent bg-clip-text">
        <img className="w-[35rem] h-[18rem] rounded-xl"  alt="service-details" src={props?.image} />
      </div>
    </div>
    <div className="flex flex-col justify-center h-full gap-[0.5rem]">
      <div>
        <h1 className="text-[2.5rem] font-semibold max-w-[24.5rem]">
          {props.title}
        </h1>
        <div className="h-[0.2rem] rounded-[3rem] w-[8rem] bg-[red]"></div>
      </div>
      <div className="h-px w-[8.688rem] bg-main-color-2 rounded-full"></div>
      <p className="max-w-[40rem] text-[1.1rem] text-[#4c5267] leading-[1.6] font-medium">
        {props.description}
      </p>
    </div>
  </div>
);
 const ServicesPage = () => {
  return (
    <>
      <PageImage
        title="SERVICES"
        image={ServiceBackgroundImage}
        mobile={ServiceBackgroudMobileImage}
      />
      <LazyShow>
      <div className="bg-[white]">
        <div className="py-[4rem]">
          <div className="flex flex-col">
            {data.map((item, index) => (
              <RenderRow
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                reverse={item.reverse}
              />
            ))}
          </div>
        </div>
      </div>
      </LazyShow>
    </>
  );
};


export default ServicesPage