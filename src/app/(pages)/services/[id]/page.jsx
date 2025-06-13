"use client";

import { useGetSingleServiceQuery } from "@/provider/query/services";
import Image from "next/image";
import { useParams } from "next/navigation";
import UpdateService from "./component/UpdateService";

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
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="btn btn-accent"
          >
            Update Service Info
          </button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <UpdateService id={singleService?._id}></UpdateService>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}
