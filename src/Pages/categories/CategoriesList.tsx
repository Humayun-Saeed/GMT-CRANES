import {
  CategoriesPageImage,
  CategoriesPageMobileImage,
  CategoryTruck,
  DMAG100,
  JLG230,
  JLG500,
  JLG625,
  LRT100,
  LRT55,
  LRT60,
  LRT70,
  LRT80,
  LRT90,
  LTM100,
  LTM110,
  LTM120,
  LTM130,
  LTM160,
  LTM230,
  LTM250,
  LTM300,
  LTM40,
  LTM400,
  LTM450,
  LTM50,
  LTM500,
  LTM60,
  LTM70,
  LTM80,
  LTM90,
  R20,
  R3,
  R30,
  S20,
  S30,
  S50,
  T35,
  T55,
  T60,
  Tr1,
  Tr2,
} from "src/Utils/MediaFilesPath";
import { PageImage } from "src/Components/pageImage/PageImage";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LazyShow from "src/animations/LazyShow";
import { R25 } from "../../Utils/MediaFilesPath";

const Recoveries = [
  {
    image: R20,
    ton: 20,
    title: "RECOVERY TRUCK",
    alt:"RECOVERY TRUCK",
    features: [
      { capcity: "20 Ton" },
      // { modal: "2001" },
      // { Jib : "9m to 14.6m" },
    ],
  },
  {
    title: "RECOVERY TRUCK",
    image: R30,
    ton: 30,
    alt:"RECOVERY TRUCK",
    features: [
      { capcity: "10 Ton" },
      // { modal: "2002" },
      // { Jib : "9m to 14.6m" },
    ],
  },
  {
    title: "RECOVERY TOW TRUCK",
    image: R25,
    ton: 25,
    alt:"RECOVERY TRUCK",
    features: [
      { capcity: "25 Ton" },
      // { modal: "2002" },
      // { Jib : "9m to 14.6m" },
    ],
  },
  {
    title: "RECOVERY TRUCK",
    image: R3,
    ton: 3,
    alt:"RECOVERY TRUCK",
    features: [
      { capcity: "3 Ton" },
      // { modal: "2002" },
      // { Jib : "9m to 14.6m" },
    ],
  },
];

const CategoriesList = () => {
  const TruckMounted = [
    {
      image: T60,
      ton: 60,
      title: "TADANO GT600EX",
      alt: "TADANO GT600EX",
      features: [
        { capcity: "60 Ton" },
        { boom: "11m to 43m" },
        { Jib : "9m to 14.6m" },
      ],
    },
    {
      image: T55,
      ton: 60,
      title: "TADANO GT 550E",
      alt: "TADANO GT 550E",
      features: [
        { capcity: "55 Ton" },
        { boom: "11.1m to 42m" },
        { Jib : "9m to 14.6m" },
      ],
    },
    {
      image: S50,
      ton: 50,
      title: "SANY QY 50C",
      alt: "SANY QY 50C",
      features: [
        { capcity: "55 Ton" },
        { boom: "11.1m to 42.5m" },
        { Jib : "9.2m to 16.6m" },
      ],
    },
    {
      image: T35,
      ton: 30,
      title: "TADANO TG 350 M",
      alt: "TADANO TG 350 M",
      features: [
        { capcity: "30 Ton" },
        { boom: "10.14m to 31.59m" },
        { Jib : "8m" },
      ],
    },
    {
      image: S30,
      ton: 25,
      title: "SANY STC 300S",
      alt: "SANY STC 300S",
      features: [
        { capcity: "25 Ton" },
        { boom: "10.65 to 31.5m" },
        { Jib : "8m" },
      ],
    },
    {
      image: S20,
      ton: 20,
      title: "SANY QY25C",
      alt: "SANY QY25C",
      features: [
        { capcity: "35 Ton" },
        { boom: "10.65m to 33.5m" },
        { Jib : "8m" },
      ],
    },
  ];

  const RoughTerrian = [
    {
      image: LRT100,
      ton: 100,
      title: "LIEBHERR LRT 1100-2.1",
      alt: "LIEBHERR LRT 1100-2.1",
      features: [
        { capcity: "100 Ton" },
        { boom: "12.6m to 50m" },
        { Jib : "19m" },
      ],
    },
    {
      image: LRT90,
      ton: 90,
      title: "LIEBHERR LRT 1090-2.1",
      alt: "LIEBHERR LRT 1090-2.1",
      features: [{ capcity: "90 Ton" }, { boom: "12m to 47m" }, { Jib : "19m" }],
    },
    {
      image: LRT80,
      ton: 80,
      title: "TADANO GR-800EX",
      alt: "TADANO GR-800EX",
      features: [
        { capcity: "80 Ton" },
        { boom: "12m to 47m" },
        { Jib : "17.7m" },
      ],
    },
    {
      image: LRT70,
      ton: 70,
      title: "TADANO GR-700 EX",
      alt: "TADANO GR-700 EX",
      features: [
        { capcity: "70 Ton" },
        { boom: "11m to 43m" },
        { Jib : "17.7m" },
      ],
    },
    {
      image: LRT60,
      ton: 60,
      title: "TADANO TR 600 EXL",
      alt: "TADANO TR 600 EXL",
      features: [
        { capcity: "60 Ton" },
        { boom: "11m to 42.2m" },
        { Jib : "17.1m" },
      ],
    },
    {
      image: LRT55,
      ton: 55,
      title: "TADANO GR-550EX",
      alt: "TADANO GR-550EX",
      features: [
        { capcity: "55 Ton" },
        { boom: "1.1m to 42m" },
        { Jib : "17.7m" },
      ],
    },
  ];

  const Terrian = [
    // 1,2,3,4,5,6,7,8
    // {
    //   image: LTM1200,
    //   title: "LIEBHERR LTM 11200-9.1",
    //   features: [
    //     { capcity: "1200 Ton" },
    //     { boom: "18.3m to 100m" },
    //     { Jib : "84m to 126m" },
    //   ],
    // },
    // {
    //   image: LTM750,
    //   title: "LIEBHERR LTM 1750-9.1",
    //   features: [
    //     { capcity: "750 Ton" },
    //     { boom: "16.3m to 52m" },
    //     { Jib : "21m to 91m" },
    //   ],
    // },
    {
      image: LTM500,
      ton: 500,
      title: "LIEBHERR LTM 1500-8.1",
      alt: "LIEBHERR LTM 1500-8.1",
      features: [
        { capcity: "500 Ton" },
        { boom: "16.1m to 50m/84m" },
        { Jib : "21m to 91m" },
      ],
    },
    {
      image: LTM450,
      ton: 450,
      title: "LIEBHERR LTM 1450-8.1",
      alt: "LIEBHERR LTM 1450-8.1",
      features: [
        { capcity: "450 Ton" },
        { boom: "16m to 85m" },
        { Jib : "14m to 84m" },
      ],
    },
    {
      image: LTM400,
      ton: 400,
      title: "LIEBHERR LTM 1400-7.1",
      alt: "LIEBHERR LTM 1400-7.1",
      features: [
        { capcity: "400 Ton" },
        { boom: "15.4m to 60m" },
        { Jib : "14m to 84m" },
      ],
    },
    {
      image: LTM300,
      ton: 300,
      title: "LIEBHERR LTM 1300-6.2",
      alt: "LIEBHERR LTM 1300-6.2",
      features: [
        { capcity: "300 Ton" },
        { boom: "14.7m to 78m" },
        { Jib : "17.5m to 70m" },
      ],
    },
    {
      image: LTM250,
      ton: 250,
      title: "LIEBHERR LTM 1250-6.1",
      alt: "LIEBHERR LTM 1250-6.1",
      features: [
        { capcity: "500 Ton" },
        { boom: "15.5m to 72m" },
        { Jib : "17.5m to 70m" },
      ],
    },
    {
      image: LTM230,
      ton: 230,
      title: "LIEBHERR LTM 1230-5.1",
      alt: "LIEBHERR LTM 1230-5.1",
      features: [
        { capcity: "230 Ton" },
        { boom: "75m" },
        { Jib : "11m to 30m" },
      ],
    },
    // {
    //   image: LTM200,
    //   ton: 200,
    //   title: "LIEBHERR LTM 1200-5.1",
    //   features: [
    //     { capcity: "160 Ton" },
    //     { boom: "13.1m to 62m" },
    //     { Jib : "10.8m to 19m" },
    //   ],
    // },
    {
      image: LTM160,
      ton: 160,
      title: "LIEBHERR LTM 1160-5.2",
      alt: "LIEBHERR LTM 1160-5.2",
      features: [
        { capcity: "200 Ton" },
        { boom: "13.1m to 62m" },
        { Jib : "10.8m to 19m" },
      ],
    },
    {
      image: LTM50,
      ton: 160,
      title: "DEMAG AC 160-5",
      alt: "DEMAG AC 160-5",
      features: [
        { capcity: "160 Ton" },
        { boom: "12.4m to 68m" },
        { Jib : "11.4m to 21m" },
      ],
    },
    {
      image: LTM130,
      ton: 130,
      title: "LIEBHERR LTM 1130-5.1",
      alt: "LIEBHERR LTM 1130-5.1",
      features: [
        { capcity: "130 Ton" },
        { boom: "12.7m to 60m" },
        { Jib : "10.8m to 19m" },
      ],
    },
    {
      image: LTM120,
      ton: 120,
      title: "LIEBHERR LTM 1120-4.1",
      alt: "LIEBHERR LTM 1120-4.1",
      features: [
        { capcity: "120 Ton" },
        { boom: "66m" },
        { Jib : "10m to 19m" },
      ],
    },
    {
      image: LTM110,
      ton: 110,
      title: "LIEBHERR LTM 1110-5.1",
      alt: "LIEBHERR LTM 1110-5.1",
      features: [
        { capcity: "110 Ton" },
        { boom: "12.7m to 60m" },
        { Jib : "10m to 19m" },
      ],
    },
    {
      image: LTM100,
      ton: 100,
      title: "LIEBHERR LTM 1100-5.2",
      alt: "LIEBHERR LTM 1100-5.2",
      features: [
        { capcity: "100 Ton" },
        { boom: "11.5m to 52m" },
        { Jib : "10.8m to 19m" },
      ],
    },
    {
      image: DMAG100,
      ton: 100,
      title: "DEMAG AC 100",
      alt: "DEMAG AC 100",
      features: [
        { capcity: "100 Ton" },
        { boom: "12.5m to 50.2m" },
        { Jib : "9.2m to 17m" },
      ],
    },
    
    {
      image: LTM90,
      ton: 90,
      title: "LIEBHERR LTM 1090-4.2",
      alt: "LIEBHERR LTM 1090-4.2",
      features: [{ capcity: "90 Ton" }, { boom: "60" }, { Jib : "19m" }],
    },
    {
      image: LTM80,
      ton: 80,
      title: "DEMAG AC 205",
      alt: "DEMAG AC 205",
      features: [
        { capcity: "80 Ton" },
        { boom: "10.9m to 50m" },
        { Jib : "9m to 14.3m" },
      ],
    },
    {
      image: LTM70,
      ton: 70,
      title: "LIEBHERR LTM 1070-4.2",
      alt: "LIEBHERR LTM 1070-4.2",
      features: [
        { capcity: "70 Ton" },
        { boom: "11m to 50m" },
        { Jib : "9.5m to 16m" },
      ],
    },
    {
      image: LTM60,
      ton: 60,
      title: "LIEBHERR LTM 1060/2",
      alt: "LIEBHERR LTM 1060/2",
      features: [
        { capcity: "60 Ton" },
        { boom: "10.9m to 42m" },
        { Jib : "9.5m to 17m" },
      ],
    },
 
    {
      image: LTM40,
      ton: 40,
      title: "DEMAG AC 95",
      alt: "DEMAG AC 95",
      features: [
        { capcity: "40 Ton" },
        { boom: "9.9m to 32.3m" },
        { Jib : "17.6m" },
      ],
    },
    // {
    //   image: LTM35,
    //   ton: 35,
    //   title: "LIEBHERR LTM 1035-3",
    //   features: [
    //     { capcity: "40 Ton" },
    //     { boom: "9.5m to 30m" },
    //     { Jib : "8.3m" },
    //   ],
    // },
  ];

  const Trucks = [
    {
      title: "Truck with Flatbed Trailer",
      alt: "Truck with Flatbed Trailer",
      image: Tr1,
      ton: 80,
      features: [
        { capcity: "25 to 45 Ton" },
        // { weight: "6 to 9 Ton" },
        // { length: "20 Feet" },
      ],
    },
    {
      image: Tr2,
      ton: 50,
      title: "volvo fh 12 lowbed",
      alt: "volvo fh 12 lowbed",
      features: [
        { capcity: "40 to 80 Ton" },
        { width: "5 to 6 Ton" },
        // { length: "6 Feet" },
      ],
    },
    {
      title: "Volvo Truck",
      alt: "Volvo Truck",
      image: CategoryTruck,
      ton: 50,
      features: [
        { capcity: "15 Ton" },
        { width: "24 Feet" },
        { length: "6 Feet" },
      ],
    },
  ];

  const ManLift = [
    {
      title: "MANLIFT JLG 600AJ",
      alt: "MANLIFT JLG 600AJ",
      image: JLG625,
      features: [
        { capcity: "625 Lbs" },
        { Height: "60 Feet" },
        { Load: "500Lbs" },
      ],
    },
    {
      title: "MANLIFT JLG 600AJ",
      alt: "MANLIFT JLG 600AJ",
      image: JLG500,
      features: [
        { capcity: "500 Lbs" },
        { Height: "110 Feet" },
        { Load: "500Lbs" },
      ],
    },
    {
      title: "MANLIFT JLG 660 SJ",
      alt: "MANLIFT JLG 660 SJ",
      image: JLG230,
      features: [
        { capcity: "625 Lbs" },
        { Height: "66 Feet" },
        { Load: "500Lbs" },
      ],
    },
  ];


  const [data, setData] = useState<any[]>([]);

  const options = [
    { id: "all", text: "All Machines" },
    { id: "Terrian", text: "Terrian Cranes" },
    { id: "TruckMounted", text: "Truck Mounted" },
    { id: "Truck", text: "Trucks" },
    { id: "RecoveryVehical", text: "Recovery Vehical" },
    { id: "Rough", text: "Rough Terrian" },
    { id: "Lift", text: "Man Lift" },
  ];
  const [selectedTonRange, setSelectedTonRange] = useState("");
  const [selectedOption, setSelectedOption] = useState(options[0].id);

  const allCranes = [
    ...Terrian,
    ...RoughTerrian,
    ...ManLift,
    ...TruckMounted.map((item) => item),
    ...Recoveries?.map((item) => item),
    ...Trucks?.map((item) => item),
  ];

  const handleSelectedOption = (type) => {
    setSelectedOption(type);
    setSelectedTonRange(""); // Reset ton range when a new category is selected
    switch (type) {
      case "all":
        setData(allCranes);
        // Handle case for "all"
        break;
      case "Terrian":
        setData(Terrian);
        break;
      case "Truck":
        setData(Trucks);
        break;
      case "TruckMounted":
        setData(TruckMounted);
        break;
      case "RecoveryVehical":
        setData(Recoveries);
        break;
      case "Rough":
        setData(RoughTerrian);
        break;
      case "Lift":
        setData(ManLift);
        break;
      default:
        // Handle default case
        break;
    }
  };

  useEffect(() => {
    if (selectedTonRange) {
      setSelectedOption("");
      const [minTon, maxTon] = selectedTonRange.split("-").map(Number);
      const filteredData = allCranes.filter((crane) => {
        let ton = 0;
        if (crane.ton) {
          ton = crane.ton;
        }
        //  else if (crane.features) {
        //   ton = parseInt(crane.features[0].capcity, 10);
        // }
        return ton >= minTon && ton <= maxTon;
      });
      setData(filteredData);
    } else {
      // If no ton range is selected, reset data to show all cranes
      setData(allCranes);
    }
  }, [selectedTonRange]);

  const Tons = ["400-500", "300-400", "200-300", "100-200", "0-100"];

  const location = useLocation();

  const pageData = location.state;

  useEffect(() => {
    if (pageData?.name) {
      setSelectedOption(pageData.name);
      switch (pageData.name) {
        case "all":
          setData(allCranes);
          // Handle case for "all"
          break;
        case "Terrian":
          setData(Terrian);
          break;
        case "Truck":
          setData(Trucks);
          break;
        case "TruckMounted":
          setData(TruckMounted);
          break;
        case "RecoveryVehical":
          setData(Recoveries);
          break;
        case "Rough":
          setData(RoughTerrian);
          break;
        case "Lift":
          setData(ManLift);
          break;
        default:
          // Handle default case
          break;
      }
    }
  }, [pageData?.name]);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };
  return (
    <div className="text-center flex flex-col ">
      <PageImage
        title="CATEGORIES"
        image={CategoriesPageImage}
        mobile={CategoriesPageMobileImage}
      />
      <LazyShow>
        <div className="flex flex-wrap justify-center gap-[1rem] ">
          {options?.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                handleSelectedOption(item.id);
              }}
              className={`cursor-pointer   md:px-[1rem] mobile:px-[0.5rem] rounded-md mobile:mt-[0.6rem] mobile:text-[0.8rem] h-[2.2rem] md:mt-[1rem] border-[0.125rem] border-[black] flex items-center justify-center  ${
                selectedOption === item.id ? "bg-[red] text-[white]" : ""
              }`}
            >
              <p className="text-center">{item.text}</p>
            </div>
          ))}

          <form className="max-w-sm ">
            <select
              id="tonRange"
              value={selectedTonRange}
              onChange={(e) => setSelectedTonRange(e.target.value)}
              className="bg-gray-50 border h-[2.2rem] md:mt-[1rem] border-gray-300 text-gray-900 mobile:mt-[0.6rem] rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="">Choose a Ton Range</option>
              {Tons.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="flex flex-wrap w-[90%] m-auto overflow-auto h-full gap-[2rem]  justify-center">
          {data?.map((item, index) => (
            <div
              key={index}
              className="w-[400px] hover:shadow-2xl  p-[1rem] text-center  border border-gray-200 mt-[2rem] rounded-lg shadow "
            >
              <a >
                <img
                
                  className={
                    selectedOption === "TruckMounted"
                      ? "h-[12rem] w-[100%] m-auto  object-contain"
                      : "h-[10rem] w-[18rem] m-auto  object-contain"
                  }
                  src={item?.image}
                  alt={item.alt}
                />
              </a>
              <div className="p-5">
                <a >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item?.title}
                  </h5>
                </a>

                {item.features &&
                  item.features.map((feature, key) => (
                    <>
                      <div className="justify-between flex h-[2.3rem] items-center ">
                        <p
                          key={key}
                          className="mb-3 font-normal text-gray-700 "
                        >
                          {Object.keys(feature)[0]}
                        </p>
                        <p>{Object.values(feature)[0]}</p>
                      </div>
                      <div className="border-b border-[lightgray] w-full"></div>
                    </>
                  ))}
                <div className="flex flex-row mt-[1rem]">
                  <a
                    onClick={handleNavigate}
                    href="#"
                    className="inline-flex mt-auto items-center px-[1.5rem] py-[0.5rem] text-sm font-medium text-center text-[white] bg-[red] rounded-lg hover:bg-[red]/30 focus:ring-4 focus:outline-none focus:ring-[black]"
                  >
                    Aquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LazyShow>
    </div>
  );
};

export default CategoriesList;
