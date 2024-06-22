import classes from "./Companies.module.css";
import  SaleItem  from "../sales/SaleItem";
import LazyShow from "src/animations/LazyShow";
 const Companies = () => {
  return (
    <LazyShow>
      <div className={classes["companies-container"]}>
        {/* <div className={classes["bg-container"]}></div> */}
        <div className={classes["companies-text"]}>
          <h1 className={"text-[white] text-3xl  font-semibold "}>
            OUR CLIENTS
          </h1>
          <blockquote className="text-lg  italic mt-[2rem]  text-gray-900 dark:text-white">
            <p className={"text-[white] "}>
              "At GMT, we've played a vital role in major projects throughout
              the United Arab Emirates. Our expertise in heavy machinery,
              particularly cranes, has been crucial for successful completion.
              From infrastructure to construction, we've provided essential
              equipment and support. Additionally, our collaboration with
              diverse companies underscores our commitment to facilitating their
              success. Explore our portfolio to see how we've contributed to
              projects and businesses across industries."
            </p>
          </blockquote>
        </div>
        <div className={classes["swiper-companies"]}>
          <SaleItem Type="Company" />
        </div>
      </div>
    </LazyShow>
  );
};

export default Companies