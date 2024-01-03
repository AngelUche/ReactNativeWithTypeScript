import { useContext, useState } from 'react';


import AuthContent from '../components/Auth/AuthContent';
import { signInUser } from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../app/AuthContext';

function LoginScreen() { 
  const [isAuthenticated, setIsAuthenticated] =useState<boolean(false)

  const authCtxt = useContext(AuthContext)

  async function HandleSubmit(email, password){
   setIsAuthenticated(true)
   try {
    
     const token = await  signInUser(email, password)
     authCtxt.authenticate(token)

   } catch (error) {
    Alert.alert('Authentication error', 'could not sign in please check your credentials or try again later')
    setIsAuthenticated(false)
   }
  }


   if(isAuthenticated){
     return <LoadingOverlay message="login user..."/>
   }
 
  return <AuthContent isLogin onAuthenticate={HandleSubmit}/>;
}

export default LoginScreen;
