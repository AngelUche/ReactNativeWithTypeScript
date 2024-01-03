import axios from 'axios'



export  const API_KEY="AIzaSyCbPfOnYisBtChSTxcgo-R_QDAlYTXcjXQ"

// general fumction for authentcating user
export async function authenticatecate(mode:string, email:string, password:string){
  const url= `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`

  const respone =await axios.post(url,{
    email,
    password,
    returnSecureToken:true
  });
  const token =respone.data.idToken;
  return token 
 }
export  function creatUser(email:string, password:string){
  return authenticatecate("signUp", email, password)
}

export  function signInUser(email:string, password:string){
  return authenticatecate("signInWithPassword", email, password)
}


