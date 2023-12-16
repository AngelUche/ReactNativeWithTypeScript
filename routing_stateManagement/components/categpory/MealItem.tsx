import { Image, Pressable, StyleSheet, Text, View, Platform } from "react-native"
import {useNavigation } from "@react-navigation/native";
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';


import { RootStackParamList } from "../../constants/RootStackParamList";
import { MealInterface } from "../../models/meal"
import { IndividualMealDetails } from "./IndividualMealDetails";


// Then, in your MealItem component:
export const MealItem: React.FC<MealInterface> = ({ title, imageUrl, duration, complexity, affordability, id }) => {
  // const navigation = useNavigation();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  function handleNavigation() {
    navigation.navigate('MealDetails', { id: id });
  }


  return (
    <View style={styles.mealItemContainer}>
      <Pressable style={({pressed})=> pressed?styles.butonPressed:null}  android_ripple={{color:"#ccc"}} onPress={handleNavigation}>
        <View style={styles.mealItemInerContainer}>
          <View >
            <Image source={{uri:imageUrl}} style={styles.imageStyle}/>
            <Text style={styles.titleStyle}>{title}</Text>
          {/* meals details */}
          <IndividualMealDetails complexity={complexity} duration={duration} affordability={affordability}/>
        </View>
      </View>
      </Pressable>
    </View>
  )
}
const styles =StyleSheet.create({
  mealItemContainer:{
    margin:16,
    backgroundColor:"white",
    elevation:6,
    shadowColor:"black",
    overflow:Platform.OS==="android"?"hidden":"visible",
    shadowOpacity: 0.2,
    shadowOffset:{width:0, height:2},
    shadowRadius:6,
    borderRadius:9,
  },
  butonPressed:{
    opacity:0.7,
    overflow: 'hidden',
  },

  mealItemInerContainer:{
     borderRadius:9,
    overflow: 'hidden',
  },
 
  imageStyle:{ 
    width: '100%',
    height: 300,
  },

  titleStyle:{
    fontSize:18 ,
    fontWeight: 'bold',
    textAlign:"center",
    marginVertical:6
  },
 
})

