import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import { AuthContext, AuthContextProvider } from './app/AuthContext';
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtxt = useContext(AuthContext)

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen}
      options={{headerRight:({tintColor})=><IconButton icon="exit" color={tintColor} size={24} onPress={authCtxt.logOut} />}}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtxt = useContext(AuthContext)
  return (
    <NavigationContainer>
      {!authCtxt.isAuthenticated && <AuthStack />}
      {authCtxt.isAuthenticated &&AuthenticatedStack}
      </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />

    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
    </>
  );
}