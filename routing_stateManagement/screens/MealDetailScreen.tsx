import { Image, ScrollView, StyleSheet, Text } from "react-native"
import { View } from "react-native"
import { RouteProp } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from "../constants/RootStackParamList";
import { MEALS } from "../data/dummyData";
import { IndividualMealDetails } from "../components";
import { SubTitle } from "../components/ui/SubTitle";
import { List } from "../components/ui/List";
import { useAppDispatch, useAppSelector } from "../app/typedAppStore";
import { addFavorite, removeFavorite } from "../app/favorite";

type MealDetailsScreenRouteProp = RouteProp<RootStackParamList, 'MealDetails'>;


export const MealDetailScreen: React.FC<{ route: MealDetailsScreenRouteProp; navigation: NavigationProp<RootStackParamList, 'MealDetails'> }> = ({ route, navigation })=> {
  // extracting the id from the react route
  const { id } = route.params;

  const SelectedMeal= MEALS.find((mealId=>mealId.id === id))

// getting the array of ids from the redux state management
  const {ids} = useAppSelector(state=>state.favoriteMealSlice)
  const dispatch =useAppDispatch()
   
  const favaoriteMeal=ids.includes(id)

  
  // adding favorite screen
  function addFavoriteMeal(){
    if(favaoriteMeal){
      dispatch(removeFavorite({id}))      
    }else{
      dispatch(addFavorite({id}));
    }
  }


// adding extra icon for the favaorite screen so that the screen can be added on the fav screen
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight:()=>{
        return (
          <Ionicons name={favaoriteMeal?"star":"star-outline"} size={24} color="white" onPress={addFavoriteMeal}/>
        )
      }
    })
  })


  return (
    <ScrollView style={styles.MainContainer}> 
      <Image source={{uri:SelectedMeal?.imageUrl}} style={styles.imageStyle}/>
      <Text style={styles.title}>{SelectedMeal?.title}</Text>
      <IndividualMealDetails affordability={SelectedMeal?.affordability} duration={SelectedMeal?.duration} complexity={SelectedMeal?.complexity} detailStyles={styles.detailStyle}/>
     
      {/* ingredients details and steps to  make it */}
      <View style={styles.listDetailContainer}>
        <View style={styles.listItemInnerContainer}>
          <SubTitle>Ingrediets</SubTitle>
          <List data={SelectedMeal?.ingredients}/>
          <SubTitle>Steps</SubTitle>
          <List data={SelectedMeal?.steps}/>
        </View>
      </View>
    </ScrollView>
  )
};
const styles =StyleSheet.create({
  MainContainer:{
    marginBottom:24,
  },
  imageStyle:{ 
    width: '100%',
    height: 300,
  },
  title:{
    fontWeight:"bold",
    fontSize:24,
    textAlign: 'center',
    color: 'white',
    margin:4,
  },
  detailStyle:{
    color:'white',
  },
  listDetailContainer:{
    alignItems:"center"
  },
  listItemInnerContainer:{
    width:"80%",
  },

})