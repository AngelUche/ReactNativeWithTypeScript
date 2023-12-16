import { StyleSheet, Text, View } from "react-native"

import { ExpensesList,ExpensesSummary  } from "."
// import { Allexpensesinterface } from "../../constants/types/Allexpensesinterface"
import { GlobalStyles } from "../../constants/styles"
import { ExpenseInterface } from "../../app/expenses/expensesSlice"


interface ExpensesOutputinterface{
  expenses:ExpenseInterface[],
  expensesPeriod:string,
  fallBackText:string,
}

export const ExpensesOutput = ({expenses, expensesPeriod, fallBackText}:ExpensesOutputinterface) => {

  let content=<Text style={style.fallBackText}>{fallBackText}</Text>;
  if(expenses.length>=0){
    content=  <ExpensesList expenses={expenses}/>
  }
  return (
    <View style={style.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
    {content}
    </View>
  )
}
const style =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:GlobalStyles.colors.primary800,
    paddingHorizontal:24,
    paddingTop:24,
    paddingBottom:0,
  },
  fallBackText:{
    color:"white",
    fontSize:18,
    textAlign:"center",
    marginTop:32,
  }
})

