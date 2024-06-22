import  { useEffect, useState } from "react";
import classes from "./PageImage.module.css";

export const PageImage = (props: any) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageUrl = isSmallScreen ? props.mobile || props.image : props.image;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: "80vh",
        backgroundAttachment: isIOS ? "scroll" : "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* {props.contact !== "contact" && */}
      <div className="absolute top-0 left-0 w-full h-full bg-[black] bg-opacity-60"></div>
{/* } */}
      {props?.title && (
        <div className="absolute bottom-[30%] left-[10%]">
          <h1 className="md:text-[4rem] mobile:text-[3rem] font-white text-[white] text-[bold] leading-[70%]">
            {props?.title}
          </h1>
          <div className="h-[0.4rem] rounded-[3rem] w-[10rem] bg-[red] mt-[30px]"></div>
        </div>
      )}
    </div>
  );
};
