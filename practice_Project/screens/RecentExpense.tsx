import { ExpensesOutput } from '../components/expensesOutput'
import { useAppDispatch, useAppSelector } from '../app/typedHook'
import { getDateMinusDays } from '../utils/date'
import { StyleSheet, Text, View } from 'react-native'
import { GlobalStyles } from '../constants/styles'
import { setExpenses } from '../app/expenses/expensesSlice'
import { useEffect, useState } from 'react'
import { fetchExpenseData } from '../app/https'
import { LoadingOverlay } from '../components/ui/LoadingOverlay'

export const RecentExpense = () => {
  const {expenses} = useAppSelector(state=>state.expeses)
 const dispatch =useAppDispatch()
  const [isFetching, setIsfeFching] = useState<boolean>(true)


  const recentExpenses=expenses.filter((expenses)=>{
    // initializing new date
    const today = new Date()
    const past7Days = getDateMinusDays(today, 7)
    // check if the expenses date is more than seven days
    return expenses.date>past7Days
    
  })
  
  
 useEffect(()=>{
  async function fetchData(){
      setIsfeFching(true)
      const data= await  fetchExpenseData();
      setIsfeFching(false)

      dispatch(setExpenses(data))
  }
    fetchData()
 },[])

 if(isFetching){
   return<LoadingOverlay/>
 }
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

