import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { Provider } from 'react-redux';


import { Allexpenses, ManageExpenses, RecentExpense } from './screens';
import { IconButton } from './components/expensesOutput';
import { GlobalStyles } from './constants/styles';
import { RootStackParamList } from './constants/types/RootParams';
import { store } from './app/store';

// definning the navigation  
const Stack = createNativeStackNavigator<RootStackParamList>()
const Bottom = createBottomTabNavigator()

function BottomNavigation(){
  return(
    <Bottom.Navigator screenOptions={({navigation})=>({
      headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
      headerTintColor:"white",
      tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
      tabBarActiveTintColor:GlobalStyles.colors.accent500,
      headerTitleAlign: "center",
      headerRight:({tintColor})=><IconButton size={24} icon='add' color={tintColor} onPress={()=>{navigation.navigate("ManageExpenses")}}/>
    })}>
      <Bottom.Screen name='RecentExpense' component={RecentExpense} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />),
          tabBarLabel:"Recent",
          title:"Recent Expense"
      }}
      />
      <Bottom.Screen name='allExpenses' component={Allexpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />),
          tabBarLabel:"All",
          title:"All Expense"
      }}
      />
    </Bottom.Navigator>
  )
}


export default function App() {
  return (
    <>
    <StatusBar style='auto'/>
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator 
        screenOptions={{
          headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
          headerTintColor:"white",
          headerTitleAlign: "center",
        }}>
          <Stack.Screen name='ExpensesOverview'  component={BottomNavigation} options={{headerShown: false, title: "Expenses Overview"}}/>
          <Stack.Screen name='ManageExpenses' component={ManageExpenses}  options={{
            presentation:"modal",
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </>
  );
}


