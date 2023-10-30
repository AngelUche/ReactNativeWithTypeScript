// import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, SafeAreaView} from 'react-native';
import { StartGameScreen, GameScreen,GameOverScreen } from './screens';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Colors } from './constants/Colors';

export default function App() {

  // state to hold the entered value 
  const [userNumber, setUserNumber] = useState<number| undefined>(undefined)
  const [timesPlayed, setTimesPlayed] = useState<number| undefined>(undefined)
  const [gameOverscreen, setGameOverScreen] = useState<boolean>(true)


  
  // Function to set the userNumber when a number is picked
  function userPickedNumber(pickedNumber:number | undefined){
    setUserNumber(pickedNumber)
    setGameOverScreen(false)
  }
  
  function openGameOverscreen(numberOfGuess:number | undefined){
    setGameOverScreen(true)
    setTimesPlayed(numberOfGuess)
  }

  function startNewGameHandler(){
      setUserNumber(undefined)
      setTimesPlayed(undefined)
  }

  // variable to hold the start screen and responsibe for changing the screen
  let ScreenToShow =<StartGameScreen onUserPicked={userPickedNumber}/>


  // chekc to switch to another component if a user has picked a number
  if(userNumber){
    ScreenToShow=<GameScreen userNumber={userNumber} openGameOverscreen={openGameOverscreen}/>
  }

  
  // chekc to switch to another component if a user has picked a number
  if(userNumber &&gameOverscreen){
    ScreenToShow=<GameOverScreen userNumber={userNumber} timesPlayed={timesPlayed} onStartGame={startNewGameHandler}/>
  }

  return (
    <LinearGradient style={styles.MainScreen} colors={[Colors.primaryPurple600,Colors.primaryYellow600]}>
      <ImageBackground source={require('./assets/Nature.jpg')} style={styles.MainScreen} imageStyle={styles.ImagckBackground}>
        <SafeAreaView style={styles.MainScreen}>{ ScreenToShow}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  MainScreen:{
    flex: 1,
  },
  ImagckBackground:{
    flex:1,
    opacity:0.3
  }
});
