import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { FaWpforms } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { TbCarCrane } from "react-icons/tb";

export const HowWeWork = () => {
  const HowweWorkData = [
    {
      icon: <FaWpforms color="red" size={50} />,
      no: 1,
      title: "CALL US",
      description:
        "Please Contact us directly by phone, or use our Booking Form to provide precise job details.",
    },

    {
      icon: <MdOutlineSupportAgent color="red" size={50} />,
      no: 2,
      title: "CALL Representive",
      description: "Our representive will contact you as soon as possible",
    },

    {
      icon: <GrMapLocation color="red" size={50} />,
      no: 3,
      title: "Site Visit",
      description: "Our representative will try to visit site if its possible",
    },
    {
      icon: <MdMarkEmailRead color="red" size={50} />,
      no: 4,
      title: "Booking",
      description:
        "We will check all information after we will send you booking confirmation",
    },
    {
      icon: <TbCarCrane size={50} color="red" />,
      no: 5,
      title: "Machines",
      description: "Our machines will start work on project site",
    },
  ];

  return (
    <div className="flex flex-col text-center mt-[3rem]">
      <h1 className="text-3xl font-extrabold">How We Works</h1>
      <ol className="items-center justify-center mt-[2rem] w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
        {HowweWorkData?.map((item, index) => (
          <div className="flex flex-col items-center">
            {item.icon}
            <li
              key={index}
              className="flex items-center max-w-[20rem] ml-[10px] space-x-2.5 rtl:space-x-reverse"
            >
              <div className="flex items-center justify-center">
                <span className="flex items-center bg-[#ed1f24] text-[white] font-bold justify-center w-[2rem] h-[2rem] border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                  {item.no}
                </span>
                <span className="p-[9px]">
                  <h3 className="font-bold leading-tight mr-[2rem] ">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </span>
              </div>
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
};
