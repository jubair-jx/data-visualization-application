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
    getSalesGrowth: build.query({
      query: (arg: string) => ({
        url: `/orders/sales-growth?interval=${arg}`,
        method: "GET",
      }),
      providesTags: ["Growth"],
    }),
  }),
});

export const { useGetTotalSalesQuery, useGetSalesGrowthQuery } = mainApi;
