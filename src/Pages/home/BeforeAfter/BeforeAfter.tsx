import React from "react";
import { RxCross2 } from "react-icons/rx";
import { MdDone } from "react-icons/md";

export const BeforeAfter = () => {
  const BeforeData = [
    { icon: <RxCross2 color="red" />, text: "Arriving late" },
    {
      icon: <RxCross2 color="red" />,
      text: "Delivering incorrect lifting equipment",
    },
    { icon: <RxCross2 color="red" />, text: "Lifting over power lines" },
    { icon: <RxCross2 color="red" />, text: "Disorganized operations" },
    { icon: <RxCross2 color="red" />, text: "Unexpected invoice charges" },
  ];

  const AfterData = [
    {
      icon: <MdDone color="white" />,
      text: "Taking charge of project scope.",
    },
    {
      icon: <MdDone color="white" />,
      text: "Creating unique lift plans with our engineers.",
    },
    {
      icon: <MdDone color="white" />,
      text: "Using advanced scheduling for smooth.",
    },
    {
      icon: <MdDone color="white" />,
      text: "Managing diverse crane fleet.",
    },
    {
      icon: <MdDone color="white" />,
      text: "Hiring skilled, proactive crews.",
    },
  ];

  return (
    <div className="text-center mt-[2rem]">
      <h1 className="mx-auto text-3xl font-extrabold">
        Fed up with dealing with crane hire companies that lack professionalism?
      </h1>
      <div className="md:h-[17rem]  mt-[3rem] relative text-center justify-center md:flex flex-col md:flex-row w-[100%] bg-teal">
        <div className="md:w-[50%] xl:w-[27%] bg-[#ececec] w-screen py-[2rem] px-[3rem] h-full">
          <h1 className="text-2xl font-extrabold">Before</h1>
          <div className="mt-[2rem]">
            {BeforeData?.map((item, index) => (
              <div key={index} className="flex mt-[6px] items-center mt-2">
                {item.icon}
                <h3 className="ml-[8px] font-semibold text-[1rem]">
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:w-[27%] md:w-[50%] w-screen py-[2rem] px-[3rem]  bg-[#ed1f24] h-full">
          <h1 className="text-2xl text-[white] font-extrabold">After</h1>
          <div className="mt-[2rem]">
            {AfterData?.map((item, index) => (
              <div key={index} className="flex mt-[6px]  items-center mt-2">
                {item.icon}
                <h3 className="ml-[8px] font-semibold text-[1rem] text-[white]">
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
