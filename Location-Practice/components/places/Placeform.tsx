import { useState } from "react"
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native"
import { Colors } from "../../constants/styles"
import { ImagePicker } from "./ImagePicker"
import { LocationPicker } from "./LocationPicker"

export const Placeform = () => {
  const [enteredtTitle, setEnteredTitle] =useState<string>("")

  function changeTextHandler(enteredText){
    setEnteredTitle(enteredText)
  }
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Place form</Text>
        <TextInput onChangeText={changeTextHandler} value={enteredtTitle} style={styles.input}/>
      </View>
      <ImagePicker/>
      <LocationPicker/>
    </ScrollView>
  )
}

const styles =StyleSheet.create({
  form:{
    flex: 1,
    padding:24,
  },
  label:{
    fontWeight: "bold",
    marginBottom:4,
    color:Colors.primary500
  },
  input:{
    marginVertical:8,
    paddingHorizontal:4,
    paddingVertical:8,
    fontSize:16,
    borderBottomColor:Colors.primary700,
    borderBottomWidth:2,
    backgroundColor:Colors.primary100
  }
})