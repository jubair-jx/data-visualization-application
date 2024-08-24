import { baseApi } from "./baseApi";

export const mainApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTotalSales: build.query({
      query: (arg: string) => ({
        url: `/orders/total-sales?interval=${arg}`,
        method: "GET",
      }),
      providesTags: ["Sales"],
    }),
  }),
});

export const { useGetTotalSalesQuery } = mainApi;
