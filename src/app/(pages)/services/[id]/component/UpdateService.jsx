"use client";

import {
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} from "@/provider/query/services";

const UpdateService = ({ id }) => {
  const { data: singleService, refetch } = useGetSingleServiceQuery(id);

  const [updateService, { isLoading, isSuccess, isError, error }] =
    useUpdateServiceMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Build the object
    const updatedData = {
      title: data?.title,
      price: parseFloat(data?.price),
      description: data?.description,
    };

    updateService({ id, updatedData })
      .unwrap()
      .then((res) => {
        if (res.modifiedCount > 0) {
          document.getElementById("my_modal_1").close();
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 mt-10 p-8 rounded-md space-y-6 shadow-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            defaultValue={singleService?.title}
            placeholder="Service Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Service Price"
            name="price"
            defaultValue={singleService?.price}
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Text here"
            name="description"
            defaultValue={singleService?.description}
            className="input input-bordered w-full"
          />
        </div>

        <button
          type="submit"
          className="btn bg-red-500 hover:bg-red-600 text-white w-full"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateService;
