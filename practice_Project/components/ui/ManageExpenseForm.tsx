import React from "react";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { uid } from "uid";

import { Input } from "./Input";
import { Button } from "./Button";
import { ExpenseInterface } from "../../app/expenses/expensesSlice";
import { getFormattedDate } from "../../utils/date";

interface FormProps{
  amount:string,
  description:string
}

interface mangeExpenseForm{
  cancelHandler:()=>void;
  onSubmit:(newExpense:{})=>void;
  isEditing:boolean,
  editedExpenses:string
  selectedDeafultValues:ExpenseInterface |undefined
}
export const ManageExpenseForm = ({cancelHandler, isEditing , onSubmit, editedExpenses,selectedDeafultValues}:mangeExpenseForm) => {

  const [formData, setFormData] = useState<FormProps>({
    amount: selectedDeafultValues?selectedDeafultValues.amount.toString():"",
    description: selectedDeafultValues?selectedDeafultValues.description:"",
  });
  // const [date, setDate] =useState(selectedDeafultValues?selectedDeafultValues.date.toISOString().slice(0,10) :"")
  const [date, setDate] =useState(selectedDeafultValues?getFormattedDate(selectedDeafultValues.date) :"")

  const formatDateString = (text: string) => {
    // Remove non-numeric characters
    const cleanedText = text.replace(/[^0-9]/g, "");

    // Check the length to determine where to add hyphens
    if (cleanedText.length <= 4) {
      return cleanedText; // No hyphen added yet, return the year
    } else if (cleanedText.length <= 6) {
      // Add hyphen after the year
      return cleanedText.slice(0, 4) + "-" + cleanedText.slice(4);
    } else {
      // Add hyphens after the year and the month
      return cleanedText.slice(0, 4) + "-" + cleanedText.slice(4, 6) + "-" + cleanedText.slice(6);
    }
  };


  const handleDateChange = (text: string) => {
    const formattedDate = formatDateString(text);
    // setFormData((prevData) => ({ ...prevData, date: formattedDate }));
   
    
    setDate(formattedDate)
  };

  function  handleCHangeInput(inputType: string, value: string){
      setFormData(currentInput=>{
        return{
          ...currentInput,
          [inputType]:value
        }
      })
  }

 function handleSubmit(){
  const newExpense = {
    id: isEditing ? editedExpenses: uid(),
    amount: Number(formData.amount),
    description: formData.description,
    date: new Date(date),
  };
  onSubmit(newExpense)
  }

  return (
    <View style={styles.formContainer}>
      {/* Input for Amount */}
      <Input
        label="amount"
        formInputConfig={{
          keyboardType: "decimal-pad",
          placeholder: "00",
          onChangeText: handleCHangeInput.bind(this, 'amount'),
          value:formData.amount,
        }}
      />

      {/* Input for Date */}
      <Input
        label="Date"
        formInputConfig={{
          onChangeText: handleDateChange, // Use the handleDateChange function
          placeholder: "YYYY-MM-DD",
          maxLength: 10, // Adjust the max length to allow only 10 characters (YYYY-MM-DD)
          value: date,
          keyboardType:"numeric"
        }}
      />

      {/* Input for Description */}
      <Input
        label="Description"
        formInputConfig={{
          multiline: true,
          onChangeText: handleCHangeInput.bind(this, 'description'),
          value:formData.description,
          placeholder: "",
        }}
      />
       <View style={styles.buttons}>
      <Button mode="flat" onPress={cancelHandler} style={styles.button}>cancel</Button>
      <Button mode="flat" onPress={handleSubmit} style={styles.button}>{isEditing?"Update":"Add"}</Button>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    // Add your desired styles here
    // backgroundColor: "white",
    // flex: 1,
  },
  buttons:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems: "center",
  },
  button:{
    minWidth:120,
    marginHorizontal:8,
  },
});
