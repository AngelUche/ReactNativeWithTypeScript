import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

interface guessLogProp{
  guessRounds:number|undefined;
  guess:number;
}
export function GuessLogsItem({guessRounds, guess}:guessLogProp){
  return(
    <View style={styles.listItem}>
      <Text style={styles.text} >#{guessRounds}</Text>
      <Text style={styles.text}> Oponent's Guess:{guess} </Text>
    </View>
  )
}

const styles =StyleSheet.create({
  listItem:{
    borderColor:Colors.primaryPurple600,
    borderWidth:1,
  
    borderRadius:40,
    padding:16,
    marginVertical:8,
    backgroundColor:Colors.primaryYellow500,
    flexDirection:"row",
    justifyContent:"space-between",
    width:"99%",
    elevation:4,
    shadowColor:"black",
    shadowOffset:{width:0, height:0},
    shadowOpacity:0.25,
    shadowRadius:4,
  },
  text:{
    fontSize:18,
  }
});