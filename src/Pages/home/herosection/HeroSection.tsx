import { useNavigate } from "react-router-dom";
import classes from "./HeroSection.module.css";

const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/resource');
  };
 
  // const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  return (
    <div className={classes["main-container-bg"]} style={{ backgroundAttachment: isIOS ? 'scroll' : 'fixed' }}>
      {/* <div className={classes["hero-shade"]}></div> */}
      <div className="absolute top-0 left-0 w-full h-full z-[0] bg-[black] bg-opacity-60"></div>
      <div className="main-container">

      <div className={classes["main-container-text"]}>
        <h1 className={classes["hero-title"]}>Assured Quality Cranes </h1>
        <h3 className={classes["hero-sub-title"]}>Availble Now On Hire </h3>
        <button onClick={handleNavigate} className={classes["hero-button"]}>Aquire Now</button>
      </div>
    </div>
    </div>
  );
};

export default HeroSection