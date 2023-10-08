import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const ServiceCard = ({services}) => {
  
    useEffect(()=>{
        Aos.init({duration:1500});
    },[])
   const {id,title,image,price,description} = services;
   
    return (
        
<div  className="max-w-sm rounded-lg shadow mx-auto my-7 bg-teal-200 " data-aos = "zoom-out">
    
        <img className="rounded-t-lg h-80 w-full" src={image} alt="" />

    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
        </a>
        <p className="mb-3 h-20 font-normal text-gray-700">{description}</p>
          
          <p className="text-lg mb-2">Price : {price}</p>

       <Link to={`/services/${id}`}> <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-blue-800">
            Read more
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor"  d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button></Link>
    </div>
  
</div>

    );
};

export default ServiceCard;