function CircleSection() {
  const circleData = [
    {
      title: "Nationwide Delivery",
      description:
        "We Provide delivery of equipment to your project site, with nationwide coverage ensuring prompt and reliable service wherever you are located.",
    },
    {
      title: "Competitive Pricing",
      description:
        "Benefit from our competitive pricing options, ensuring cost-effectiveness without compromising on quality or service.",
    },
    {
      title: "Flexible Rental Options",
      description:
        "Explore our flexible rental plans tailored to suit your budget and project duration, providing you with the flexibility you need without any hassle",
    },
  ];
  return (
    <div>
      <div className="max-w-[76.125rem] mx-auto pt-[7.5rem] pb-[5.5rem]">
        <div className="flex flex-wrap items-center justify-center gap-x-[7.625rem] gap-y-[3.125rem]">
          {circleData.map((item, index) => (
            <div
              key={index}
              className="w-[18.75rem] h-[18.75rem] rounded-full border border-[black] flex items-center justify-center hover:bg-[red] text-main-color-5 hover:text-[white] transition-all hover:scale-125"
            >
              <div className="flex flex-col gap-5 text-center max-w-[13.438rem]">
                <div className="text-2xl leading-[110%] font-bold">
                  {item.title}
                </div>
                <div className="leading-[140%] mt-[1rem] text-sm">{item.description}</div>
                <div className="flex justify-center">{/* <ShipIcon /> */}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CircleSection;
