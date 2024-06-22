import classes from "./About.module.css";
import { AboutImage } from "src/Utils/MediaFilesPath";
import LazyShow from "src/animations/LazyShow";
 const About = () => {
  return (
    <LazyShow>
      <div className=" items-center flex flex-col">
        <div className={classes["about-container"]}>
          <div>
          <img src={AboutImage} alt="about" className={classes["about-img"]} />
          </div>
          <div className={classes["text-container"]}>
            <h1 className="text-3xl font-semibold">ABOUT US</h1>

            {/* <blockquote className="mobile:text-[14px] md:text-lg italic md:p-[4rem] mobile:p-[2rem]  font-semibold text-gray-900 dark:text-white"> */}
            <p className="text-lg  text-[black] leading-[1.6] font-medium p-[0.4rem] ">
              Welcome to Golden Moon General Transport, your trusted heavy machinery partner. Specializing
              in cranes, trucks, and recovery vehicles, we deliver reliability
              and exceptional service. With experts and cutting-edge equipment,
              we ensure efficiency and safety in every project. Choose GMT for
              top-notch solutions in construction, transportation, and recovery
              operations.
            </p>
            {/* </blockquote> */}
          </div>
        </div>
      </div>
    </LazyShow>
  );
};

export default About