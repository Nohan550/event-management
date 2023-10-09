import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const [service, setService] = useState({});

  const { id } = useParams();

  const services = useLoaderData();
  useEffect(() => {
    const findService = services?.find((event) => event.id == id);
    setService(findService);
  }, [id, services]);

  console.log(service);
   const{title,image,description}=service;
  return (
    <div>
      <div
        className="hero min-h-[650px]"
        style={{
          backgroundImage:
            `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">
              {description}
               We provide customer friendly events.We will suggest you some extra activiity as well as give a plan of our team.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
