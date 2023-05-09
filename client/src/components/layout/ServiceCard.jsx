import React from "react";
import { services } from "../../constants";

const Service = ({ icon, title, description }) => {
  return (
    <div className=" text-white flex flex-col items-start px-8 w-[310px] h-[410px] bg-[#170E49] shadow-md rounded-[10px]">
      <img src={icon} className="mt-7 w-[100px] h-[100px]" />
      <h3 className="py-2 text-[30px] font-bold">{title}</h3>
      <p className="text-[15px] leading-6">{description}</p>
    </div>
  );
};

const ServiceCard = () => {
  return (
    <>
      <div className="mt-32 pt-10 px-9  bg-gradient-to-b from-[#01081C] to-[#01081C] flex flex-wrap gap-2">
        {services.map((service, index) => (
          <Service key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default ServiceCard;
