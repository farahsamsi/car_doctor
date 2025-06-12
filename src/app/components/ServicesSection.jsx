import dbConnect from "@/library/dbConnect";
import Image from "next/image";
import React from "react";

const ServicesSection = async () => {
  const services = await dbConnect("services").find({}).toArray();

  return (
    <div className="grid grid-cols-1  md:grid-cols-12 w-11/12 mx-auto gap-4">
      {services?.map((service) => {
        return (
          <div key={service?._id} className="md:col-span-6 lg:col-span-4">
            <div className="card bg-base-100 w-full shadow-sm">
              <div className="relative flex justify-center items-center h-[208px] md:h-[300px]">
                <Image
                  src={service?.img}
                  alt="service image"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
