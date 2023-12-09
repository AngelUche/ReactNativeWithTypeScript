import { ReactNode } from "react";
import { Text, StyleSheet, Dimensions, Platform } from "react-native";

interface TitleProps{
  children: ReactNode
}
const Screenwidth =Dimensions.get("window").width


export function Title({children}:TitleProps){  
  
  return <Text style={styles.TextScreen}>{children}</Text>

}
const styles =StyleSheet.create({
  TextScreen:{
    fontSize:Screenwidth<50? 20 :28,
    fontWeight: "bold",
    textAlign: "center",
    padding:12,
    color:"white",
    borderColor:"white",
    // borderWidth:Platform.OS==="android"? 2 :0,
    borderWidth:Platform.select({android:2, ios:0 }),
    maxWidth:"80%",
    width:300
  }
});