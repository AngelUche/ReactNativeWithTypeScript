import {View, Text, StyleSheet,Dimensions} from 'react-native'
import {ReactNode} from 'react'
import { Colors } from '../constants/Colors';

interface Props{
  children: ReactNode
}
export function SystemNumberGuessed({children}:Props){
  return(
    <View style={style.NumberContainer}>
      <Text style={style.NmberText}>{children}</Text>
    </View>
  )
}
const Screenwidth =Dimensions.get("window").width

const style= StyleSheet.create({
  NumberContainer:{
    borderWidth:2,
    borderColor:Colors.primaryYellow500,
    padding:24,
    margin:24,
    borderRadius:8,
    alignItems:"center",
    justifyContent: "center",
  },
  NmberText:{
    color:Colors.primaryYellow500,
    fontWeight:"bold",
    fontSize:Screenwidth<50? 28:38,
  }
});