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
    getKpis : build.query({   <--------------API call to import.meta.env.VITE_BASE_UR/kpi/kpis
        query : () => "kpi/kpis/",           A function will be grabbing the data that the API 
        provideTags : ["kpis"]               endpoint gives and saving it into kpis inside the Tag
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

    // Just 3 API CALLS
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

// "prefix of use and suffix of Query" on the api calls is HOW YOU GET THE "HOOKS"
// see the func name is api and we are exporting this function and it's HOOKS (i think, Learn React LOL)
export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;