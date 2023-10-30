import { ReactNode } from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

interface TitleProps{
  children: ReactNode
}

export function Title({children}:TitleProps){
  return <Text style={styles.TextScreen}>{children}</Text>

}
const styles =StyleSheet.create({
  TextScreen:{
    fontSize:28,
    fontWeight: "bold",
    textAlign: "center",
    padding:12,
    color:"white",
    borderColor:"white",
    borderWidth:2,
  }
});