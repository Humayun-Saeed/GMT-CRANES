import { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer.tsx";
import Header from "./Components/Header/Header.tsx";
import MobileHeader from "./Components/MobileHeader/MobileHeader.tsx";
import Modal from "./Components/Models/Model.tsx";
import { ScrollToTop } from "./Utils/scrollToTop.tsx";
import { IoLogoWhatsapp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
// import { Helmet, HelmetProvider } from "react-helmet-async";

// const Home = lazy(() => import("./Pages/home/Home.tsx"));
import Home from "./Pages/home/Home.tsx";
import ContactUs from "./Pages/contact/ContactUs.tsx";
import AboutUs from "./Pages/aboutus/AboutUs.tsx";
import CategoriesList from "./Pages/categories/CategoriesList.tsx";
import ServicesPage from "./Pages/services/ServicesPage.tsx";
import ProductDetails from "./Pages/productdetails/ProductDetails.tsx";
import ServiceDetails from "./Pages/serviceDetails/ServiceDetails.tsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
        <ScrollToTop />
  
        <div>
          <div className="overflow-x-hidden">
            <div className="hidden md:block">
              <Header />
            </div>
            <div className="block md:hidden">
              <MobileHeader />
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/resource" element={<CategoriesList />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/productdetails" element={<ProductDetails />} />
              <Route path="/serviceDetails" element={<ServiceDetails />} />
              <Route
                path="*"
                element={
                  <div className="h-screen mx-auto pt-36 w-fit">Not Found!</div>
                }
              />
            </Routes>

            <Footer />
            {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}

            <div
              onClick={toggleModal}
              className="fixed flex items-center justify-center h-[4rem] w-[4rem] bottom-[2rem] right-[2rem] bg-[green] text-white font-bold py[-1.5rem] px-[2rem ] rounded-full z-[100]"
            >
              {!isModalOpen ? (
                <IoLogoWhatsapp color="white" size={28} />
              ) : (
                <ImCross size={20} color="white" />
              )}
            </div>
          </div>
        </div>
    </>
  );
}
export default App;
