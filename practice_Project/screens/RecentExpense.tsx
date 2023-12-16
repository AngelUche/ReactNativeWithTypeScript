import { ExpensesOutput } from '../components/expensesOutput'
import { useAppSelector } from '../app/typedHook'
import { getDateMinusDays } from '../utils/date'
import { StyleSheet, Text, View } from 'react-native'
import { GlobalStyles } from '../constants/styles'

export const RecentExpense = () => {
  const {expenses} = useAppSelector(state=>state.expeses)

  const recentExpenses=expenses.filter((expenses)=>{
    // initializing new date
    const today = new Date()
    const past7Days = getDateMinusDays(today, 7)
    // check if the expenses date is more than seven days
    return expenses.date>past7Days
    
  })
  
  if(recentExpenses.length===0){
    return(
      <View style={styles.container}>
        <Text style={styles.Text}>No recent expenses since past seven days</Text>
      </View>
    )
  }

  return (
    
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallBackText='No recent expenses since past seven days!'/>
  )
}

const styles =StyleSheet.create({
  container:{
    backgroundColor:GlobalStyles.colors.primary800,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  Text:{
    color:'white',
    fontSize:20,
    fontWeight: 'bold',
  }
})

