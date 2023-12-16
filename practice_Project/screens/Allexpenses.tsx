import { ExpensesOutput } from "../components/expensesOutput"
import { useAppSelector } from "../app/typedHook"

export const Allexpenses = () => {
  const {expenses} = useAppSelector(state=>state.expeses)

  return (
    <ExpensesOutput expenses={expenses} expensesPeriod="All expenses" fallBackText='You have not registered any expenses!'/>

  )
}

