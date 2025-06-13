import Image from "next/image";
import AddServiceForm from "./component/AddServiceForm";

export default function AddServicePage() {
  return (
    <div className="max-w-5xl mx-auto my-10">
      {/* Banner */}
      <div className="relative h-48 md:h-64 w-full rounded-md overflow-hidden">
        <Image
          src="https://i.ibb.co/wh7t3N3/555.jpg"
          alt="Add Service"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Add New Service
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-red-500 text-white px-6 py-1 rounded-sm text-sm font-semibold z-50 mt-10 ">
          Home / Service
        </div>
      </div>
      <AddServiceForm></AddServiceForm>
    </div>
  );
}
