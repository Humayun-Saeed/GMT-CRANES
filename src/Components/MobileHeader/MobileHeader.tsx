import { Link, NavLink, useLocation } from "react-router-dom";
import { MainLogo } from "src/Utils/MediaFilesPath";
import { useEffect, useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";


function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const headerData = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
    { title: "Services", href: "/services" },
    { title: "Resource", href: "/resource" },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const headerClass =
    isScrolled || isMenuOpen ? "bg-[white]/50 backdrop-blur shadow-sm" : "";

  const menuOpenClass = isMenuOpen ? "max-h-[624.938rem] mt-[4rem]" : "max-h-[0px]";

  return (
    <header
      className={`fixed w-full z-[50] transition-all duration-500 ${headerClass}`}
    >
      <div className="p-[4%]">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img src={MainLogo} alt="gmt-logo" className="h-[6rem] object-contain w-full"/>
            </Link>
            <div
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-main-color-2"
            >
              {isMenuOpen ? (
                <IoIosClose className="w-[2rem] h-[2rem]" />
              ) : (
                <IoIosMenu className="w-[2rem] h-[2rem]" />
              )}
            </div>
          </div>
          <ul
            className={`flex flex-col items-start justify-between gap-[4rem] overflow-hidden transition-all ${menuOpenClass}`}
          >
            {headerData.map((item, index) => (
              <li key={index} className="text-1.5xl font-medium leading-none">
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
            <div className="flex items-center justify-end">
              <Link to={"/contact"}>
                <button>
                  Contact Us
                </button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default MobileHeader;
