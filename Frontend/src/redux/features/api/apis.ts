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
    getNewCutomers: build.query({
      query: (arg: string) => ({
        url: `/customers/new-customers?interval=${arg}`,
        method: "GET",
      }),
      providesTags: ["Customers"],
    }),
    getReapeatCutomers: build.query({
      query: (arg: string) => ({
        url: `/customers/repeat-customers?interval=${arg}`,
        method: "GET",
      }),
      providesTags: ["Customers"],
    }),
  }),
});

export const {
  useGetTotalSalesQuery,
  useGetNewCutomersQuery,
  useGetSalesGrowthQuery,
  useGetReapeatCutomersQuery,
} = mainApi;
