import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// Import the RootState type if needed in your application
// import type { RootState } from '../../app/store';


// Expense definition
export interface ExpenseInterface {
  id: string;
  amount: number;
  description: string;
  date: Date; 
}

// ExpensesState definition
interface ExpensesState {
  expenses: ExpenseInterface[];
}

// RootState definition
interface RootState {
  expenses: ExpensesState;
}

// Initial state for the expenses slice
const initialState: ExpensesState = {
  expenses: [],
};

// Create the expenses slice using createSlice
export const expensesSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    // Reducer to add an expense to the state
    addExpense: (state, action: PayloadAction<ExpenseInterface>) => {
      state.expenses.push(action.payload);
    },
    // Reducer to delete an expense from the state
    deleteExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
    },
    // Reducer to update an expense in the state
    updateExpense: (state, action: PayloadAction<ExpenseInterface>) => {
      const index = state.expenses.findIndex(expense => expense.id === action.payload.id);
      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
    },
    setExpenses:(state, action:PayloadAction<ExpenseInterface[]>)=>{
      console.log(action.payload);
      if(action.payload){
        state.expenses=action.payload.reverse()
      }
    },
   
  },
});

// Extract the action creators
export const { addExpense, updateExpense, deleteExpense, setExpenses } = expensesSlice.actions;

// Selector to retrieve the expenses from the state
export const selectExpenses = (state: RootState) => state.expenses.expenses;

// Export the reducer
export default expensesSlice.reducer;
