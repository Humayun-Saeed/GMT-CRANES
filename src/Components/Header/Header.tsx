import { Link, NavLink } from "react-router-dom";
import { MainLogo } from "src/Utils/MediaFilesPath";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

import classes from "./Header.module.css";

export const headerData = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  { title: "Services", href: "/services" },
  { title: "Resource", href: "/resource" },
];

function Header(props: any) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = scrolling
    ? "bg-[white]/50 backdrop-blur shadow-sm"
    : "";
    
  return (
    <header
      className={`fixed w-full z-[50] transition-all duration-500 ${headerClass} `}
    >
      <div className="grid grid-flow-col  px-[4%]">
        <div className="flex items-center   justify-start">
          <Link to="/">
            <img src={MainLogo} alt="gmt-logo" className="h-[7rem] " />
          </Link>
        </div>
        <ul className="flex items-center  justify-between col-span-2 row-start-2 gap-[4rem] lg:justify-start lg:col-span-1 lg:row-start-1">
          {headerData.map((item, index) => (
            <li key={index} className="text-lg font-medium leading-none">
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold transition-all text-main-color-6 underline"
                    : "text-main-color-2"
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex  items-center justify-end">
          <Link to={"/contact"}>
            <Button className="h-[3rem] w-[10rem] rounded-lg font-bold text-[white] bg-[red]">
              CONTACT US
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
