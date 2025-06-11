import React from "react";

const ServicesSection = async () => {
  const res = await fetch("/services.json");
  const data = await res.json();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default ServicesSection;
