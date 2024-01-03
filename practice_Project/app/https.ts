import { BaseUrl } from "../constants/BaseUrl";
import { ExpenseInterface } from "./expenses/expensesSlice";
import axios from "axios";

export async function sendExpenseRequest(expesneData:ExpenseInterface){
  const response = await axios.post(BaseUrl + 'expenses.json', expesneData)
  const id = response.data.name;
  return id
}

export async function fetchExpenseData(){
  const response =await axios.get(BaseUrl+'expenses.json');
  const expenses:ExpenseInterface[]=[];

  for (const key in response.data){
    const expenseObj ={
      id:key,
      amount:response.data[key].amount,
      date: new Date(response.data[key].date),
      description:response.data[key].description
    }
    expenses.push(expenseObj)
  }
  return expenses
}

export async function deleteExpenseHttp(id:string){
  return axios.delete(BaseUrl +`expenses/${id}.json`)
}

export async function updateExpenseHttp(id:string, expenseData:ExpenseInterface){
  axios.put(BaseUrl +`expenses/${id}.json`, expenseData)
}
