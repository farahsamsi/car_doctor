"use client";

import { usePostServiceMutation } from "@/provider/query/services";
import { useRouter } from "next/navigation";

const AddServiceForm = () => {
  const router = useRouter();
  const [postService, { isLoading, isSuccess, isError, error }] =
    usePostServiceMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Build the object
    const serviceData = {
      title: data?.title,
      price: parseFloat(data?.price),
      description: data?.description,
    };

    postService(serviceData)
      .unwrap()
      .then((res) => {
        console.log("Service added successfully", res);
        if (res.insertedId) {
          form.reset();
          router.push("/services");
        }
      })
      .catch((err) => {
        console.error("Failed to add service:", err);
      });
  };

  return (
    <div>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 mt-10 p-8 rounded-md space-y-6 shadow-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Service Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Service Price"
            name="price"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Text here"
            name="description"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Service Type"
            className="input input-bordered w-full"
          />
        </div>

        <textarea
          placeholder="Product Description"
          className="textarea textarea-bordered w-full h-40"
        ></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className="btn bg-red-500 hover:bg-red-600 text-white w-full"
        >
          {!isLoading && `Submit`}
          {isLoading && `Posting..`}
        </button>
      </form>
    </div>
  );
};

export default AddServiceForm;
