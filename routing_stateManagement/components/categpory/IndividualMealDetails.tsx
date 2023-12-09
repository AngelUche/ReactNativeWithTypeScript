import { View, Text, StyleSheet } from "react-native"

interface MealDetailProps{
  duration:number|undefined, complexity:string|undefined, affordability:string|undefined
  detailStyles:any
}
export const IndividualMealDetails = ({duration, complexity, affordability, detailStyles}:Partial<MealDetailProps>) => {
  return (
    <View style={styles.details}>
    <Text style={[styles.eachItemdetail, detailStyles]}>{duration}m</Text>
    <Text style={[styles.eachItemdetail, detailStyles]}>{complexity?.toUpperCase()}</Text>
    <Text style={[styles.eachItemdetail, detailStyles]}>{affordability?.toUpperCase()}</Text>
  </View>
  )
}

const styles =StyleSheet.create({
  details:{
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"black"
  },
  eachItemdetail:{
    // fontWeight:"bold",
    fontSize:12,
    margin:4,
  },
})