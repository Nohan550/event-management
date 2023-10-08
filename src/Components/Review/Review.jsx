import { useEffect, useState } from "react";
import ReviewDetail from "./ReviewDetail";


const Review = () => {
   
const [reviews,setReviews]=useState([])

useEffect(()=>{
    fetch("/review.json")
    .then(res => res.json())
    .then(data => setReviews(data))
},[])



    return (
        <div className="py-4 bg-base-200">

            <h1 className="text-7xl text-teal-500 font-bold text-center pb-5 "> Reviews</h1>
            <div className="grid md:grid-cols-2 gap-5">

            
{
  reviews?.map(rev => <ReviewDetail key={rev.rating} rev={rev}></ReviewDetail>
    
  )  
}

</div>
        </div>
    );
};

export default Review;