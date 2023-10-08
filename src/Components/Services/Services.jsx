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

  return <div>

     {services?.map(services => <ServiceCard key={services.id} services={services}></ServiceCard>)}
  </div>;
};

export default Services;
