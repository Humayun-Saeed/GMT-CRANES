import React from "react";
import classes from "./Categories.module.css";
import {

  CategoryTruck,
  CategoryTruckMounted,
  MainLiftCategory,
  MobileCrane,
  RecoveryVehcial,
  RoughTerrianCategory,
} from "src/Utils/MediaFilesPath";
import LazyShow from "src/animations/LazyShow";
import { useNavigate } from "react-router-dom";
const Categories = () => {
  const categories = [
    { image: MobileCrane, title: "ALL TERRIAN CRANES", id: "Terrian",alt:"Terrian" },
    { image: MainLiftCategory, title: "MAIN LIFT CRANES", id: "Lift",alt: "Lift" },
    {
      image: RecoveryVehcial,
      title: "RECOVERY & Towing Services",
      id: "RecoveryVehical",
      alt: "RecoveryVehical",
    },
    { image: CategoryTruckMounted, title: "TRUCK MOUNTED", id: "TruckMounted",alt: "TruckMounted" },
    // { image: AboutImage, title: "Escavators" },
    { image: CategoryTruck, title: "TRAILERS & TRUCKS", id: "Truck",alt: "Truck" },
    { image: RoughTerrianCategory, title: "Rough & Terrian", id: "Rough",alt: "Rough" },

    
  ];

  const navigate = useNavigate();
  const handleNavigate = (item: any) => {
    navigate("/resource", { state: { name: item.id } });
  };
  return (
    <LazyShow>
      <div className="main-container">
        <div className="flex flex-col items-center">
          <div className={classes["categories-text"]}>
            <h2 className={classes["categories-title"]}>Our Products</h2>
            <p className={classes["categories-description"]}>
              Golden Moon General Transport  specializes in premium brands in the crane industry,
              including Liebherr ,terex,kato and Truck mounted cranes and is
              committed to offering high-quality equipment. Our wide range of
              cranes is suitable for various terrains and job sites. If you are
              unsure about the best crane for your project, you can use our
              filter option on the products page or contact our sales managers
              for expert guidance in selecting the most suitable equipment for
              your requirements.
            </p>
          </div>
          <div className={classes["categories-item-container"]}>
            {categories?.map((item, index) => (
              <div key={index} className={classes["categories-item"]}>
                {/* Content for each category */}
                <div className={classes["image-container"]}>
                  <img
                    src={item.image}
                    className={classes["categories-item-img"]}
                    alt={item.alt}
                  />
                </div>
                <span className={classes["categories-item-title"]}>
                  {item?.title}
                </span>
                <div className={classes["overlay"]}>
                  <div
                    onClick={() => {
                      handleNavigate(item);
                    }}
                    className={classes["text"]}
                  >
                    Explore More
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LazyShow>
  );
};

export default Categories;
