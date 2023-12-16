import { StyleSheet, Text, View } from "react-native"
import { useWindowDimensions } from "react-native"


import { GlobalStyles } from "../../constants/styles"
import { ExpenseInterface } from "../../app/expenses/expensesSlice"

interface expensesSummaryinterface{
  expenses:ExpenseInterface[],
  periodName:string,
}

export const ExpensesSummary = ({expenses, periodName}:expensesSummaryinterface) => {
  
  const {height} = useWindowDimensions()
  // getting the min height
  const minHeight=380
  const expensesSum =expenses.reduce((sum,expenses)=>{
    return sum + expenses.amount
  }, 0)

// defining the style based on the height of the screen
  const PeriodNameStyles={
    fontSize:height<minHeight?14:16,
    color:GlobalStyles.colors.primary400
  }
  const sumStyles={
    fontSize:height<minHeight?14:19,
  }

  return (
    <View style={styles.container}>
      <Text style={PeriodNameStyles}>{periodName}</Text>
      <Text style={[styles.sum, sumStyles]}>#{expensesSum.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
 container:{
    padding:8,
    backgroundColor:GlobalStyles.colors.primary50,
    borderRadius:8,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
 },
 sum:{
  color:GlobalStyles.colors.primary500,
  fontWeight:"bold",
 }
})
