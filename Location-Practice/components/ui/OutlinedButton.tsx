import { Pressable, StyleSheet, Text } from "react-native"
import {Ionicons} from '@expo/vector-icons'

import { Colors } from "../../constants/styles"

export const OutlinedButton = ({icon, onPress, children}) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=>[styles.button, pressed&& styles.Pressed]}>
      <Ionicons name={icon} size={18} color={Colors.primary500} style={styles.icon}/>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

const styles =StyleSheet.create({
  button:{
    paddingHorizontal:12,
    paddingVertical:6,
    margin:4,
    flexDirection:"row",
    justifyContent:"center",
    alignContent:"center",
    borderWidth:1,
    borderColor:Colors.primary500,
  },
  Pressed:{
    opacity:0.7,
  },
  icon:{
    marginRight:6,
  },
  text:{
    color:Colors.primary500,
  }
})

