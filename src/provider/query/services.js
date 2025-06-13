import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const servicesAPI = createApi({
  reducerPath: "servicesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => {
    return {
      getAllServices: builder.query({
        query: () => ({
          url: "/api/services",
          method: "GET",
        }),
      }),

      getSingleService: builder.query({
        query: (id) => ({
          url: `/api/services/${id}`,
          method: "GET",
          providesTags: ["Service"],
        }),
      }),

      postService: builder.mutation({
        query: (serviceCatch) => ({
          url: "/api/services",
          method: "POST",
          body: serviceCatch,
          headers: {
            "Content-Type": "application/json",
          },
        }),
      }),

      updateService: builder.mutation({
        query: ({ id, updatedData }) => ({
          url: `/api/services/${id}`,
          method: "PATCH",
          body: updatedData,
        }),
        invalidatesTags: ["Service"],
      }),
    };
  },
});

export const {
  useGetAllServicesQuery,
  useGetSingleServiceQuery,
  usePostServiceMutation,
  useUpdateServiceMutation,
} = servicesAPI;
