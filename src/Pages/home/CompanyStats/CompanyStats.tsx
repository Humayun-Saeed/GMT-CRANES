import CountUp from 'react-countup';
export const CompanyStats = () => {
  const stats = [
    { number: "20", text: "Satisfied Clients" },
    { number: "400", text: "Completed Projects" },
    { number: "50", text: "Team Member" },
    { number: "15", text: "Years Experience" },
  ];
  return (
    <div className="md:h-[18rem] mobile:h-[30rem] mt-[2rem]  w-screen bg-[rgb(247,247,247)]">
      <div className="m-auto h-full items-center  md:flex   max-w-[80%]  justify-evenly">
        {stats?.map((item,index) => (
          <div key={index} className="text-center mt-[1rem] gap-[2rem]">
            <h2 className="text-5xl text-[red] ">{<CountUp end={+item.number} />  }</h2>
            <h3 className="text-3xl font-semibold mt-[1rem]">{item.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CompanyStats