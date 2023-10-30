import {Text, StyleSheet} from 'react-native'
import { Colors } from '../../constants/Colors'
import { ReactNode } from 'react'

interface instructionProps{
  children:ReactNode
}

export function InstructionText({children}:instructionProps){
    //  returns the chikdren on which other react native acn be rendered
      return  <Text style={styles.instructionText}>{children}</Text>
}

const styles = StyleSheet.create({
  instructionText:{
    color: Colors.primaryYellow400,
    fontSize:20,
  },
})