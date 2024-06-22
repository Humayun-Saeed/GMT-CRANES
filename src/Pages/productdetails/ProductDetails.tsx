
import LazyShow from "src/animations/LazyShow";
import { useLocation, useNavigate } from "react-router-dom";

 const ProductDetails = () => {
  const location = useLocation();
  const { features, image, title, description } = location.state;

  const navigate = useNavigate()
  const handleClick = () =>{
    navigate('/contact')
  }
  return (
    <LazyShow>
    <div className="main-container">
      <div className="flex flex-col mt-[9rem]  ">
        <div className="md:flex-row flex mobile:flex-col  items-center gap-[2rem] justify-center text-center">
          <div className="md:w-[40%] mobile:w-[100%]   ">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <div className="items-center flex justify-center">
              <div className="h-[0.4rem] rounded-[3rem] self-center w-[10rem] bg-[red] mt-[1rem] "></div>
            </div>
            <p className="text-xl mt-[2rem] text-color">{description}</p>
            <p className="text-left text-xl mt-[2rem]">Located in Uae</p>
            <p className="text-left  text-xl mt-[1rem]">
              For all technical specifications download the brochure or request
              a quote.
            </p>
            <div>
              {features &&
                features.map((feature, key) => (
                  <>
                    <div  className="justify-between flex h-[2.3rem] mt-[1rem] items-center ">
                      <p key={key} className="mb-3 font-bold  ">
                        {Object.keys(feature)[0]}
                      </p>
                      <p>{Object.values(feature)[0]}</p>
                    </div>
                    <div className="border-b border-[lightgray] w-full"></div>
                  </>
                ))}
              <button onClick={handleClick} className="w-[12rem] rounded-xl   mt-[1rem] mx-auto h-[3rem] bg-[red]">
                <p className="text-[white] font-bold">Equire Now</p>
              </button>
            </div>
          </div>
          <div className="w-1/3 flex justify-center">
            <img
              src={image}
              alt="details"
              className="h-[24rem] max-w-[24rem] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    </LazyShow>
  );
};

export default ProductDetails