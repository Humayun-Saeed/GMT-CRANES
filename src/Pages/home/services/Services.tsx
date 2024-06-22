import React from "react";
import classes from "./Services.module.css";
import {
  CarRecovery,
  CivilConstruction,
  GulfServices,
  HeavyLifting,
  HeavyTransport,
  Transport,
} from "src/Utils/MediaFilesPath";
import { useNavigate } from "react-router-dom";
import LazyShow from "src/animations/LazyShow";

const services = [
  {
    imgUrl: CivilConstruction,
    description:
      "GMT Cranes has a rich history in civil construction equipment, allowing us to provide expert guidance in selecting the ideal cranes or other related construction machinery through our affiliated companies. With over six decades of industry experience, making the right equipment choice can not only optimize costs but also streamline construction timelines.Our extensive background and expertise empower us to serve as a comprehensive solution for all your construction equipment requirements. Whether you require a mobile crane for on-site maneuverability or one tailored for navigating tight spaces effortlessly, explore our products page or reach out to our sales managers for personalized recommendations.In summary, GMT Cranes offers a wide range of construction equipment options, backed by decades of experience, ensuring efficiency and effectiveness in your projects.",
    title: "Civil Construction",
  },
  {
    imgUrl: GulfServices,
    description:
      "At GMT Cranes and Heavy Equipment, we go beyond crane rentals and sales, offering comprehensive transportation solutions across Gulf countries. Our fleet of trucks and heavy transport vehicles ensures efficient and reliable transportation of goods and equipment to your desired destinations. Whether you need to move heavy machinery, construction materials, or oversized cargo, we have the expertise and resources to handle your transportation needs with precision and care. With a commitment to safety, timeliness, and professionalism, we strive to exceed your expectations and deliver exceptional service every step of the way. Trust GMT Cranes and Heavy Equipment for all your transportation requirements in the Gulf region.",
    title: "Gulf Countries Transportation",
  },
  {
    imgUrl: HeavyTransport,
    description:
      "In the heavy transport sector, where the demand for specialized equipment is paramount, GMT Cranes steps in as a reliable provider of a diverse range of machinery, including trucks, recovery vehicles, and truck trailers, all equipped with our top-of-the-line cranes. Our comprehensive fleet caters to the unique needs of heavy transport operations, boasting robust cranes capable of handling large loads with ease. With GMT Cranes as your partner, you can count on efficient and effective solutions for your heavy transport projects. Our knowledgeable sales team is ready to offer expert guidance in selecting the right equipment, ensuring optimal performance tailored to your specific requirements. Whether you're in need of cranes for sale or rental, GMT Cranes is here to support your heavy transport endeavors every step of the way. Unsure about the ideal crane setup for your heavy transport needs? Let us assist you in finding the perfect solution to tackle your challenges head-on.",
    title: "Heavy Transport",
  },
  {
    imgUrl: HeavyLifting,
    description:
      "GMT has the largest fleet of cranes and other specialised equipment for complete lifting solutions that range from conventional to highly innovative alternative lifting methods.All our specialised equipment is available for rent with or without operator for long term requirements as well as short-term. We will take care of everything – from maintenance to safety necessities, so you can run your project efficiently. With highly skilled and trained personnel along with state of the art equipment, Al Faris group strives to ensure that every lift is preformed safely with utmost perfection. We aim to save you time by understanding of all of your requirements and specify the most efficient and economical solution to ensure your project needs are met.",

    title: "Heavy Lifting",
  },
  {
    imgUrl: CarRecovery,
    description:
"Our company excels in providing professional car recovery services, offering swift and reliable assistance whenever you encounter vehicle troubles. Equipped with a dedicated team of experienced technicians and a fleet of specialized recovery vehicles, we guarantee prompt roadside assistance and seamless vehicle transportation to your preferred destination.At the core of our operations lies a steadfast commitment to customer satisfaction and efficiency, making us the preferred choice for all your car recovery needs. Our goal is to provide peace of mind during stressful situations on the road, ensuring that you receive the assistance you need promptly and effectively.In summary, our company is dedicated to delivering top-notch car recovery services, backed by a skilled team and specialized equipment, to ensure your safety and satisfaction at all times.",
 title: "Car Recovery",
  },
  {
    imgUrl: Transport,
    description:
      "Our company offers premier truck transport services tailored to meet your logistics needs efficiently and reliably. With a modern fleet of well-maintained vehicles and skilled drivers, we ensure prompt and secure delivery of your goods, whether local or long-distance. Our commitment to safety and compliance with transportation regulations guarantees peace of mind for our clients. Moreover, our state-of-the-art tracking systems provide real-time visibility into your shipments, ensuring transparency every step of the way. Trust us to be your reliable partner in freight transportation, facilitating smooth and hassle-free logistics operations for your business",

    title: "Transport",
  },
];

 const Services: React.FC = () => {
  const navigate = useNavigate();

  const trimDescription = (description: string | undefined) => {
    return description?.split(" ").slice(0, 16).join(" ");
  };

  const handleClick = (title: string, service: string, image: any) => {
    navigate("/ServiceDetails", {
      state: { service: service, title: title, image: image },
    });
  };

  return (
    <LazyShow>
      <div className={classes["services-container"]}>
        <div className="flex  items-center flex-col">
          <h2 className="text-3xl  mt-[1rem] font-semibold m-auto">
            OUR SERVICES
          </h2>
        </div>

        <div className={classes["service-item-container"]}>
          {services?.map((item, index) => (
            <div
              onClick={() => {
                handleClick(item?.title, item?.description, item.imgUrl);
              }}
              key={index}
              className={classes["servicesContainer"]}
            >
              <div className={classes["servicesContent"]}>
                <a>
                  <img alt="service" src={item.imgUrl} className={classes["image"]}  />
                </a>
                <div>
                  <div className={classes["text-container"]}>
                    <a className={classes["servicesTitle"]}>{item.title}</a>
                    <p className={classes["servicesDescription"]}>
                      {trimDescription(item.description)}
                    </p>
                    <p className={classes["read-more"]}>Read More</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LazyShow>
  );
};

export default Services