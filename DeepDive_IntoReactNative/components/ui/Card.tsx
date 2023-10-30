import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
 interface CardProps{
  children:ReactNode
 }
export function Card({children}:CardProps){
  return<View style={styels.Card}>
    {children}
  </View>
}
const styels =StyleSheet.create({
  
  Card:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,
    marginHorizontal:20,
    padding:16,
    backgroundColor:Colors.primaryPurple900,
    borderRadius:8,
    // elevation is a shodow effet property specific for androids
    elevation:4,

    // to add shadow effect for ios, we use the shadow property instead
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:4,
    shadowOpacity:0.3
   },
})