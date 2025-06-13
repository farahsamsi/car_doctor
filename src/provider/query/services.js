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

      //   For more end points write them here
      getSingleService: builder.query({
        query: (id) => ({
          url: `/api/services/${id}`,
          method: "GET",
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
    };
  },
});

export const {
  useGetAllServicesQuery,
  useGetSingleServiceQuery,
  usePostServiceMutation,
} = servicesAPI;
