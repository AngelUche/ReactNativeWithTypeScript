import { Text,View, StyleSheet, Alert, FlatList } from "react-native";
import { Title, SystemNumberGuessed, MainButton, Card, InstructionText, } from "../components";
import { GuessLogsItem } from "./GuessLogsItem";
import { useState, useEffect } from "react";
interface GameScreenProps{
  userNumber:number| undefined
  openGameOverscreen:(NumberOfGuess:number|undefined)=>void
}

let mainBoundry=1
let maxBoundary=100

  function generateRandomNumber(min:number, max:number, exclude:number| undefined){
    const RandomNumber=Math.floor(Math.random()*(max-min))+min;

    if(RandomNumber ===exclude){
      return generateRandomNumber(min, max, exclude);
    }else{
      return RandomNumber;
    }
  }

export function GameScreen({userNumber, openGameOverscreen}:GameScreenProps){

  // state to hold the array of rounds the user guessed
  const initialNumber =generateRandomNumber(1,100, userNumber)
  const [systemNumber, setSystemNumber] =useState(initialNumber)
  const [numgerOfRounds, setNumberOfRounds] =useState([initialNumber])


  // function to generate randon number 
  function generateNewRandonNumber(lowerOrHigher: "lower" | "greater"){
    if((lowerOrHigher ==='lower' &&userNumber !==undefined && systemNumber<userNumber)){
      // alert the the user  if the nuber guessed is wrongly and the guessed is higher than what is guessed 
      Alert.alert("Sorry, you have guessed wrongly", " the value is higer, Pick a higer value ", [{text:'Ok', style:"cancel"}])
      return
    }
      // alert the the user  if the nuber guessed is wrongly and the guessed is lower than what is guessed 
    if(  (lowerOrHigher ==='greater' &&userNumber !==undefined && systemNumber>userNumber) ){
      Alert.alert("Sorry,you have guessed wrongly", " the value is lower, Pick a lower Value", [{text:'Ok', style:"cancel"}])
     return
    }
    
      if (lowerOrHigher==="lower"){
        maxBoundary =systemNumber;
      }else{  
        mainBoundry =systemNumber +1;
      }
      const newRandomNumber= generateRandomNumber(mainBoundry, maxBoundary, systemNumber)
      setSystemNumber(newRandomNumber);
      setNumberOfRounds((previousGuessRound)=>[newRandomNumber, ...previousGuessRound])
  }

  // render openGameOverscreen whenver there is a chnage in any of the dependencies 
  useEffect(()=>{
      if(systemNumber===userNumber)
      {openGameOverscreen(numgerOfRounds.length)}
  },[systemNumber, userNumber, openGameOverscreen])

  // render once onl when the component mounts, sets the boundaries to its initial value
  useEffect(()=>{
   mainBoundry=1;
   maxBoundary=100
},[])

  const guesRoundListLength =numgerOfRounds.length
  return(
    <View style={styles.GameScreen}>
      <Title>Oponent's Guess</Title>
      <SystemNumberGuessed>{systemNumber}</SystemNumberGuessed>
      <Card>
        <InstructionText>Higher or lower? </InstructionText>
        <View  style={styles.PressableButtonContainer}>
          <View style={styles.presseableButton}>
            <MainButton pressedButton={()=>generateNewRandonNumber( 'lower')}>-</MainButton>
          </View >
          <View style={styles.presseableButton}>
            <MainButton pressedButton={()=>generateNewRandonNumber("greater")}>+</MainButton>
          </View>
        </View>
      </Card>
      {/* scrollable component to render the number of guess */}
      <View style={styles.listContainer}>
        <FlatList data={numgerOfRounds}  renderItem={(itemData)=><GuessLogsItem guess={itemData.item} guessRounds={guesRoundListLength-itemData.index}/>} keyExtractor={(item)=>item.toLocaleString()}></FlatList>
      </View>
    </View>
  )
}
const styles= StyleSheet.create({
  PressableButtonContainer:{
    flexDirection: 'row',
    marginVertical:20
  },
  presseableButton:{
    flex:   1,
  },

  GameScreen:{
    flex: 1,
    alignItems: 'center',
    padding:12,
    marginTop:50,
  },
  listContainer:{
    flex:1,
    padding:16,
  }
});