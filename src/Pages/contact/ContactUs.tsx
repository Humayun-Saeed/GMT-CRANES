import React from "react";
import { Form } from "./form/Form";
import Info from "./Info/Info";
import { Map } from "src/Components/Map/Map";
import {
  BackgroundContactUs,
  BackgroundContactUsMobile,
} from "src/Utils/MediaFilesPath";
import { PageImage } from "src/Components/pageImage/PageImage";
import LazyShow from "src/animations/LazyShow";

 const ContactUs = () => {
  return (
    <>
      <PageImage
        title="CONTACT US"
        contact="contact"
        image={BackgroundContactUs}
        mobile={BackgroundContactUsMobile}
      />
      <LazyShow>
          <div className="bg-[#DFDDDD]">
        <div className="p-[4%] bg-[url('src/assets/contact-us-body-bg.svg')]">
            <article className="py-[3rem] text-center max-w-[45.352rem] main-container mx-auto">
              <h1 className="text-[2.5rem] font-semibold text-main-color-7">
                Have a question?
              </h1>
              <h2 className="mt-[1rem]text-lg  text-text-color">
                If you want to establish a business partnership with us or want
                to ask a question on any subject, you can fill out the form. Our
                expert teams will get back to you as soon as possible.
              </h2>
            </article>

            <div className="flex flex-wrap items-start justify-center gap-[8rem] py-[16px] lg:justify-between gap-y-[32px]">
              <div className="md:max-w-[40rem] mobile:w-[100%]">
                <Form />
              </div>
              <div className="max-w-[38rem]">
                <Info />
              </div>
            </div>
            <div>
              <Map />
            </div>
          </div>
        </div>
      </LazyShow>
    </>
  );
};

export default ContactUs
