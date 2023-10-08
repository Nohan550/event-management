import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const ReviewDetail = ({rev}) => {

    useEffect(()=>{
        Aos.init({duration:1500});
    },[])
    const {name,review}= rev;
    
    return (
       <div data-aos = "flip-up" className="hero  bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6">{review}</p>
   
    </div>
  </div>
</div>
    );
};

export default ReviewDetail;