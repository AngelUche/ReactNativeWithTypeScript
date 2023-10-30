import { useState } from 'react';
import { MainButton, Card, InstructionText } from '../components';
import { View, TextInput,StyleSheet, Alert} from 'react-native';
import { Colors } from '../constants/Colors';
import { Title } from '../components';


interface startScreenPops{
  onUserPicked:(pickedNumber:number | undefined)=>void
}
export const StartGameScreen=({onUserPicked}:startScreenPops)=>{

  const [enteredNumber, setEnteredNumber] =useState<string>("")

  function inputHandler(numberValue:any){
    setEnteredNumber(numberValue)
  }
  function ConfirmButtonHandler(){
    const ConvertedNumber =Number(enteredNumber)
    
    if( ConvertedNumber <=0 ||ConvertedNumber>99 ||isNaN(ConvertedNumber) || /[.,]/.test(enteredNumber)){
      Alert.alert("Invalid Number", "Number must between 1 and 99", [{text:'Okay', style:"destructive",onPress:ResetInput}])
      return
    }
    onUserPicked(ConvertedNumber)
  }

  function ResetInput(){
    setEnteredNumber("")
  }


  return(
    <View style={styles.mainRootContainer}>
        {/* guess a number  */}
      <Title>Guess My Number</Title>
      {/* card container */}
      <Card>
        {/* instruction container */}
        <InstructionText >guess a number n</InstructionText>

        {/* text input container to collect user input */}
        <TextInput style={styles.InputContainer} 
        onChangeText={inputHandler}
        value={enteredNumber}
        maxLength={2} 
        keyboardType='numeric' 
        inputMode='numeric' 
        keyboardAppearance='default'
        />
        <View style={styles.PressableButtonContainer}> 
          <View style={styles.presseableButton}>
            <MainButton pressedButton={ResetInput}>Reset</MainButton>
          </View >
          <View style={styles.presseableButton}>
            <MainButton pressedButton={ConfirmButtonHandler}>Confirm</MainButton>
          </View>
        </View>
      </Card>
    </View>

  )
}

const styles = StyleSheet.create({
  mainRootContainer:{
    flex: 1,
    alignItems: 'center',
    marginTop:120
  },
    PressableButtonContainer:{
      flexDirection: 'row',
    },
    presseableButton:{
      flex:   1,
    },

   InputContainer:{
    height:50,
    width:60,
    fontSize:38,
    fontWeight:"bold",
    textAlign:"center",
    color:Colors.primaryYellow500,
    borderBottomColor:Colors.primaryYellow500,
    borderBottomWidth:2,
    marginVertical:10
   },
})