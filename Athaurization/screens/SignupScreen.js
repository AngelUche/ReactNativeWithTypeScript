import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import AuthContent from '../components/Auth/AuthContent';
import { creatUser } from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../app/AuthContext';

function SignupScreen() {
  const [isAuthenticated, setIsAuthenticated] =useState<boolean(false)
  const navigation = useNavigation()


   const AuthContxt=useContext(AuthContext)

  async function HandleSubmit(email, password){
    setIsAuthenticated(true)
    try {
      const token = await  creatUser(email, password)
      AuthContxt.authenticate(token)
      navigation.navigate("Login")

   } catch (error) {
    Alert.alert('Authentication error', 'could not screate user, please check your credentials or try again later')
    setIsAuthenticated(false)
  }
}
  if(isAuthenticated){
    return <LoadingOverlay message="createng user..."/>
  }

  return <AuthContent  onAuthenticate={HandleSubmit}/>;
}

export default SignupScreen;
