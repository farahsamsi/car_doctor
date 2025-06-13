"use client";

import { useGetAllServicesQuery } from "@/provider/query/services";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ServicesSection = () => {
  const services = [];
  // const services = await dbConnect("services").find({}).toArray();

  const {
    data: servicesFromRTK,
    isError,
    isLoading,
  } = useGetAllServicesQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1  md:grid-cols-12 w-11/12 mx-auto gap-4">
      {servicesFromRTK?.data?.map((service) => {
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
                <h2 className="card-title">{service?.title}</h2>
                <p>
                  {service?.description?.slice(0, 100)}...
                  <Link
                    href={`/services/${service?._id}`}
                    className="underline"
                  >
                    Read More
                  </Link>
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
