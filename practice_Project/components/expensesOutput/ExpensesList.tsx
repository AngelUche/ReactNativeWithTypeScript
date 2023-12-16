import { FlatList } from "react-native"

import { ExpenseInterface } from "../../app/expenses/expensesSlice";
import { RenderExpensesItem } from "./RenderExpensesItem"

interface ExpensesOutputinterface{
  expenses:ExpenseInterface[],
}

export const ExpensesList = ({expenses}:ExpensesOutputinterface) => {

  //@ts-ignore this returns the list of items to be rendered on the flatlist
  function renderMealItem(itemData: { item: ExpenseInterface}){
    return <RenderExpensesItem {...itemData.item} />;
   }

  //@return this returrns the flatlist to be the rendered 
  return (
    <FlatList data={expenses} keyExtractor={(item)=>item.id}  renderItem={renderMealItem}/>
  )
}

