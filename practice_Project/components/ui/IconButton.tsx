import { Pressable, StyleSheet, View } from "react-native"
import {Ionicons} from '@expo/vector-icons'

type iconbuttontype={
  color:string |undefined, 
  size:number,
  onPress:any
  icon:any
}

export const IconButton = ({icon, size, color, onPress}:iconbuttontype) => {
  return (
    <Pressable onPress={onPress} style={(pressed)=>pressed && styels.pressed}>
      <View style={styels.buttonContainer}><Ionicons name={icon} size={size} color={color}/></View>
    </Pressable>
  )
}

const styels=StyleSheet.create({
  buttonContainer:{
    borderRadius:24,
    padding:6,
    marginHorizontal:6,
    marginVertical:2,
  },
  pressed:{
    opacity:0.75
  }
})