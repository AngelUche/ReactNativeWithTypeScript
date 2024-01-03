import { ExpenseInterface } from "../../app/expenses/expensesSlice";

export type RootStackParamList = {
  ManageExpenses: { expenseId: string };
  ExpensesOverview:{}
  // other screens
};

export interface updateExpensestype{
  id:string,
  credentials:ExpenseInterface
}
