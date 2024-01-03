import { Pressable, StyleSheet } from "react-native"
import {Ionicons} from '@expo/vector-icons'

export function IconButton({icon, onPress, size, color}) {
  return (
    <Pressable onPress={onPress} style={({pressed})=>[styles.buttons, pressed &&styles.pressed]}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  )
}

const styles =StyleSheet.create({
  buttons:{
    padding:8,
    margin:4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed:{
    opacity:0.7
  }
})
