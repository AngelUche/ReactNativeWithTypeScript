import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useLayoutEffect } from "react";
// import { uid } from "uid";
import { deleteExpenseHttp, updateExpenseHttp } from "../app/https";

import { RootStackParamList } from "../constants/types/RootParams";
import { IconButton } from "../components/ui";
import { GlobalStyles } from "../constants/styles";
import { addExpense, deleteExpense, updateExpense } from "../app/expenses/expensesSlice";
import { useAppDispatch, useAppSelector } from "../app/typedHook";
import { ManageExpenseForm } from "../components/ui/ManageExpenseForm";
// import { useSendExpensesMutation, useGetExpensesQuery } from "../app/Expenses";
import { sendExpenseRequest } from "../app/https";
import { useSendExpensesMutation } from "../app/Expenses";
import { LoadingOverlay } from "../components/ui/LoadingOverlay";


type ManageExpensesScreenRouteProp = RouteProp<RootStackParamList, "ManageExpenses">;
type ManageExpensesScreenNavigationProps = NavigationProp<RootStackParamList, "ManageExpenses">;

interface ManageExpensesProps {
  route: ManageExpensesScreenRouteProp;
  navigation: ManageExpensesScreenNavigationProps;
}

export const ManageExpenses: React.FC<ManageExpensesProps> = ({ route, navigation }) => {
  const dispatch =useAppDispatch()
  const {expenses}=useAppSelector((state)=>state.expeses)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  // const [sendExpenses, {isLoading}]=useSendExpensesMutation()


  const editedExpensesId = route.params?.expenseId;
  const isEditing=!!editedExpensesId

  
  // getting the endPoint to send data to the firebase

  const selectedDeafultValues=expenses.find((expenses)=>expenses.id===editedExpensesId)

  // setting the options to either edit or add or add new expenses
  useLayoutEffect(()=>{

    navigation.setOptions({
      title:isEditing?"Edit Expenses":"Add Expenses"
    })
  },[ navigation, isEditing])


    // this deletes the expenses if a user wants to delete any expense
  async function deleteExpenses(){
    // setIsLoading(true)
     await deleteExpenseHttp(editedExpensesId)
     setIsLoading(false)
    dispatch(deleteExpense(editedExpensesId))
    navigation.goBack()
  }

  // function that cancels the edit
  function cancelHandler(){
    navigation.goBack()
  }

  // @ts-ignore function that confirms either a user update or add a new expense
  
  async function confirmHandler(newExpense) {
  
    setIsLoading(true)
    if (isEditing) {
     await updateExpenseHttp(editedExpensesId, newExpense)
      dispatch(updateExpense(newExpense));


    } else {
      // const id = sendExpenses(newExpense)
      const id  = await sendExpenseRequest(newExpense)
     dispatch(addExpense({...newExpense, id:id}));
    }
    setIsLoading(false)
    navigation.goBack();
  }
  
  if(isLoading){
    return <LoadingOverlay/>
  }
  

  return (
   <View style={styles.container}>
      <ManageExpenseForm isEditing={isEditing} cancelHandler={cancelHandler} editedExpenses={editedExpensesId} editedExpensesId={editedExpensesId} onSubmit={confirmHandler} selectedDeafultValues={selectedDeafultValues}/>
    {/* buttpon container */}
   
    {/* conditionally rendering an icon */}
    {isEditing && 
    <View style={styles.deleteCobtainer}>
      <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenses}/>
    </View>}
   </View>
  );
}


const styles =StyleSheet.create({
  container: {
    flex: 1,
    padding:24,
    backgroundColor:GlobalStyles.colors.primary800,
  },
 
  deleteCobtainer:{
    marginTop:16,
    padding:8,
    borderWidth:2,
    borderTopColor:GlobalStyles.colors.primary200,
    alignItems:"center",
  },
})