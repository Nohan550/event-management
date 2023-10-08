import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(
    () =>
    {  fetch("/event.json")
    .then((res) => res.json())
    .then((data) => setServices(data))},
    []
  );

  return <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-4 px-4 bg-teal-400">

     {services?.map(services => <ServiceCard key={services.id} services={services}></ServiceCard>)}
  </div>;
};

export default Services;
