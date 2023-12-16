import { Pressable, StyleSheet, Text, View, ViewStyle  } from "react-native"
import React, { ReactNode } from "react";

import { GlobalStyles } from "../../constants/styles"

interface ButtonProps {
  children: ReactNode;
  onPress: any;
  mode:string,
  style?: ViewStyle
}
export const Button :React.FC<ButtonProps>= ({children, onPress, mode, style}) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({pressed})=>pressed&&styles.pressed}>
        <View style={[styles.button, mode==="flat"&&styles.flat]}>
          <Text  style={[styles.button, mode==="flat"&&styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}


const styles =StyleSheet.create({
  button:{
    borderRadius:4,
    padding:8,
    backgroundColor:GlobalStyles.colors.primary500,
  },
  flat:{
    backgroundColor:"transparent"
  },
  buttonText:{
    color:"white",
    textAlign:"center",
  },
  flatText:{
    color:GlobalStyles.colors.primary200,
  },
  pressed:{
    opacity:0.75,
    backgroundColor:GlobalStyles.colors.primary200,
    borderRadius:4,
  }
})