import { useEffect } from "react"


import { ExpensesOutput } from "../components/expensesOutput"
import { useAppSelector } from "../app/typedHook"
import { fetchExpenseData } from "../app/https"
import { useAppDispatch } from "../app/typedHook"
import { setExpenses } from "../app/expenses/expensesSlice"

export const Allexpenses = () => {
  const {expenses} = useAppSelector(state=>state.expeses)
  const dispatch = useAppDispatch()
  console.log(expenses);
  

  useEffect(()=>{
    async function fetchData(){
        const data= await  fetchExpenseData();
        console.log(data);
        dispatch(setExpenses(data))
    }
      fetchData()
   },[])

  return (
    <ExpensesOutput expenses={expenses} expensesPeriod="All expenses" fallBackText='You have not registered any expenses!'/>

  )
}

