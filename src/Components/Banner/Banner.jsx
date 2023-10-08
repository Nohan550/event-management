import Review from "../Review/Review";
import Services from "../Services/Services";
import Stat from "../stat/Stat";

const Banner = () => {
  return (
    <div>
      <div className="bg-teal-200 w-full  rounded text-center  h-full">
        <div>
          <h1 className=" text-2xl md:text-4xl font-medium pt-16 ">
            Welcome to{" "}
            <span className="text-3xl md:text-5xl font-semibold">
              {" "}
              <span className="text-teal-500">G</span> TECH
            </span>
          </h1>
          <p
            className="text-xl pt-4
            md:text-2xl font-normal"
          >
            Find the best service suitable for your event via G TECH
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00cba9"
            fillOpacity="1"
            d="M0,0L24,32C48,64,96,128,144,154.7C192,181,240,171,288,186.7C336,203,384,245,432,224C480,203,528,117,576,106.7C624,96,672,160,720,165.3C768,171,816,117,864,85.3C912,53,960,43,1008,80C1056,117,1104,203,1152,218.7C1200,235,1248,181,1296,170.7C1344,160,1392,192,1416,208L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div>
        <Services></Services>

        <Review></Review>

        <Stat></Stat>
      </div>
    </div>
  );
};

export default Banner;
