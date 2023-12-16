import { emptySplitApi, } from "./api";
import { ExpenseInterface } from "./expenses/expensesSlice";
import { FetchBaseQueryMeta } from "@reduxjs/toolkit/query";

export const UserExpenses = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    sendExpenses: builder.mutation<any, ExpenseInterface>({
      query: (credentials) => ({
        url: `expenses.json`,
        method: 'POST',
        body: credentials
      }),
      invalidatesTags: ["Expenses"],
    }),
    getExpenses: builder.query<ExpenseInterface[], void>({
      query: () => ({
        url: `expenses.json`,


      }),
      // transformResponse: (
      //   response: ExpenseInterface[],
      //   meta?: FetchBaseQueryMeta
      //   ) => {
      //     console.log('Transforming response...');


      // // Transformation logic: Convert the response object into an array
      // const transformedData: ExpenseInterface[] = Object.values(response);
      // console.log('Type of transformedData:', Array.isArray(transformedData) ? 'Array' : 'Not an Array');


      //   return transformedData;
      //   } 
    }),
  }),
});

export const { useSendExpensesMutation, useGetExpensesQuery } = UserExpenses;
