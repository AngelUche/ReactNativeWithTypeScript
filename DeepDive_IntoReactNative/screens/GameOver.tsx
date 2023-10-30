import {View, Text, Image, StyleSheet } from "react-native";
import { MainButton, Title } from "../components";
import { Colors } from "../constants/Colors";

interface gameOver{
  userNumber:number| undefined,
  timesPlayed:number| undefined,
  onStartGame:any
}

export function GameOverScreen({userNumber, timesPlayed, onStartGame}:gameOver){
return(
  <View style={styles.RootContainer}>
    <Title>Game Over</Title>
    <View style={styles.ImgaeContainer}>
      <Image source={require('../assets/success.png')} style={styles.image}/>
    </View>
    <Text style={styles.TextHighlight}>You had <Text style={styles.Text}> {userNumber} </Text> guesses to gues<Text style={styles.Text}> {timesPlayed} </Text>correctly</Text>
    <MainButton pressedButton={onStartGame}>Start a new Game</MainButton>
  </View>
)
}

const styles = StyleSheet.create({
  RootContainer:{
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
  },
  ImgaeContainer:{
    overflow: "hidden",
    margin:20,
    height:400,
    width:400,
    borderColor:Colors.primaryPurple600,
    borderWidth:2,
    borderRadius:200,
  },
  image:{
    height:"100%",
    width:"100%",
  },
  TextHighlight:{
    fontSize:30,
    textAlign:"center",
  letterSpacing:1,
  width:"80%",
  paddingHorizontal:1,
  color:"white",
  marginBottom:20,
  },
  Text:{
    color:Colors.primaryYellow600,
    paddingHorizontal:3,
    letterSpacing:2,
  },
});