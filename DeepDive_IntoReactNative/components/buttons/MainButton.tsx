import { StyleSheet, View, Text, Pressable } from "react-native"
import React, { ReactNode } from "react";


// prop type for the children that will be rendered whenever the component is used
type MainButtonProps = {
  children: ReactNode;
  pressedButton:any
}


export const MainButton = ({ children , pressedButton}: MainButtonProps) => {
  return (
    <View style={styles.OuterButton}>
      {/* toggle between the main styles for androd and that of ios ripple effect */}
      <Pressable onPress={pressedButton} style={({pressed})=>pressed ? [styles.ButtonInput, styles.ios_ripple] :styles.ButtonInput} android_ripple={{color:"#650c8a"}}>
        <Text style={styles.TextInput}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  OuterButton:{
    borderRadius:30,
    margin:4,
    overflow:"hidden",
    // width:100,
  },
  ButtonInput:{
    // height:50,
    // justifyContent:"center",
    // alignItems: "center",
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor:"#650c7e",
    elevation:2,
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:2,
    shadowOpacity:0.2
  },
  TextInput:{
    color:"white",
    textAlign:"center",
    // fontSize:17,
  },
  ios_ripple:{
    opacity:0.8,
  }
})