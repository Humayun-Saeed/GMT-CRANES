import {
  FooterMainLogo,
} from "src/Utils/MediaFilesPath";
import classes from "./Footer.module.css";
import { FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";

function Footer() {
  const footerData = [
    {
      title: "Company",
      children: [
        { title: "Contact Us", href: "contact" },
        { title: "About Us", href: "about-us" },
        { title: "Resouces", href: "resource" },
      ],
    },
    {
      title: "OFFICE",
      children: [
        {
          title: "info@gmail.com",
          icon: <HiOutlineMail size={20} color="gray" />,
        },
        { title: "+971 50 617 9048", icon: <FaPhoneAlt size={20} color="gray" /> },
        { title: "00971-50-6179701", icon: <FaPhoneAlt size={20} color="gray" /> },

        
        {
          title:
            "M-17 - Abu Dhabi United Arab Emirates",
          icon: <MdOutlineLocationOn size={25} color="gray" />,
        },
      ],
    },
    {
      title: "About Us",
      children: [
        {
          title:"We are the leading crane rental company known for providing cost-effective crane rental services. Our offerings are available round the clock, ensuring that you can access our services anytime and anywhere you require them.",
        },
      ],
    },
  ];

  return (
    <div className="mx-auto main-container">
      <footer className={classes["footer-container"]}>
        <div className="">
          <div className={classes["brand-container"]}>
            <div className={classes["flex flex-col gap-[1.50rem"]}>
              <img
                src={FooterMainLogo}
                alt="Brand Logo"
                className="w-[8rem] h-[7rem] object-contain md:ml-[2rem]"
              />
              <h2 className={classes["company-desc"]}>
              Golden Moon General Transport Your Trusted Partner in Crane Rental,
                Heavy Lifting and  Transportation
              </h2>
            </div>
            {footerData.map((columnData, index) => (
              <div key={index} className={classes["footer-headings"]}>
                <h2 className={classes["footer-title-text"]}>
                  {columnData.title}
                </h2>
                {columnData.title === "OFFICE" ? (
                  <div className="flex flex-col gap-4 ">
                    {columnData.children.map((linkData, linkIndex) => (
                      <div key={linkIndex} className="flex items-center gap-[1rem] mt-[1.5rem]  ">
                        {linkData.icon}
                        <h3
                          key={linkIndex}
                          className={
                            columnData.title !== "OFFICE"
                              ? classes["footer-child-text"]
                              : "text-[grey]"
                          }
                        >
                          <a href={linkData.href}>{linkData.title}</a>
                        </h3>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-[1rem] mt-[1.5rem]">
                    {columnData.children.map((linkData, linkIndex) => (
                      <h3
                        key={linkIndex}
                        className={classes["footer-child-text"]}
                      >
                        <a href={linkData.href}>{linkData.title}</a>
                      </h3>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={classes["social-media-section"]}>
            <div className="text-[white]">
              <p>Copyright © 2023 GMT Crane Rentals · All Rights Reserved</p>
            </div>
            <div className={classes["footer-icons"]}>
              <FaInstagram size={30} color="white" />
              <FiTwitter size={30} color="white" />
              <FaLinkedin size={30} color="white" />

              {/* 
                <img src={MobileCrane} alt="Twitter" />
                <img src={MobileCrane} alt="LinkedIn" />
                <img src={MobileCrane} alt="Facebook" /> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
