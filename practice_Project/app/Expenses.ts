import { emptySplitApi, } from "./api";
import { ExpenseInterface } from "./expenses/expensesSlice";
// import { updateExpensestype } from "../constants/types/RootParams";

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
    }),

    // updateExpenses: builder.mutation<updateExpensestype, ExpenseInterface>({
    //   query: ({id, credentials}) => ({
    //     url: `expenses/${id}.json`,
    //     method: 'POST',
    //     body: credentials
    //   }),
    //   invalidatesTags: ["Expenses"],
    // }),
  }),
});

export const { useSendExpensesMutation, useGetExpensesQuery } = UserExpenses;
