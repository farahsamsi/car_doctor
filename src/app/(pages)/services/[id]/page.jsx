"use client";

import { useGetSingleServiceQuery } from "@/provider/query/services";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function SingleServicePage() {
  const { id } = useParams();

  const {
    data: singleService,
    isLoading,
    isError,
  } = useGetSingleServiceQuery(id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto my-8">
      <div>
        <div className="card bg-base-100 w-full shadow-sm">
          <div className="relative flex justify-center items-center h-[208px] md:h-[300px]">
            <Image
              src={singleService?.img || null}
              alt="singleService image"
              fill
              className="object-cover"
            />
          </div>

          <div className="card-body">
            <h2 className="card-title">{singleService?.title}</h2>
            <p>{singleService?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
