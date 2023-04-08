import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "./types";

// We are using redux toolkit query (really commonly used)

// createApi ( a function from REDUX TOOLKIT again) is used to make 
// "API END POINTS" that we can use to call our BACKEND.
// fetchBaseQuery is also another function from REDUX TOOLKIT to get base url
// reducerPath: "main" is the "name" of the API endpoint
//  tagTypes: ["Kpis", "Products", "Transactions"] is used TO STORE API DATA

/* endpoints: (build) => ({
    getKpis : build.query({
        query : () => "kpi/kpis/",
        provideTags : ["kpis"]
    })
    getProducts : build.query({
        
    })
    getTransactions : build.query({
        
    })
})
    
*/


export const api = createApi({

    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products", "Transactions"],

    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>, void>({
        query: () => "kpi/kpis/",
        providesTags: ["Kpis"],
        }), 
        getProducts: build.query<Array<GetProductsResponse>, void>({
        query: () => "product/products/",
        providesTags: ["Products"],
        }),
        getTransactions: build.query<Array<GetTransactionsResponse>, void>({
        query: () => "transaction/transactions/",
        providesTags: ["Transactions"],
        }),
    }),

});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;