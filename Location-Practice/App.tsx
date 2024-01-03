import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';


import { AllPlaces, AddPlaces } from './screens';
import { IconButton } from './components/ui/IconButton';
import { Colors } from './constants/styles';
import { Maps } from './components/places/Maps';
import { RootStackParamList } from './constants/RootStackParams';


const Stack = createNativeStackNavigator<RootStackParamList>();


    export default function App() {
      return (
        <>
          <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            headerStyle:{backgroundColor:Colors.primary500},
            headerTintColor:Colors.gray700,
            contentStyle:{backgroundColor:Colors.gray700}
          }}
          >
            <Stack.Screen name='AllPlaces' component={AllPlaces} options={({navigation})=>({headerRight:
                ({tintColor})=><IconButton size={24} color={tintColor} icon="add" onPress={()=>navigation.navigate("AddPlaces")}/>,
              title:'Your favourite places'
              })}
            />
              <Stack.Screen name='AddPlaces' component={AddPlaces} options={{
                title:'Add a new place'
              }}/>
              <Stack.Screen name='Maps' component={Maps}/>
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}
