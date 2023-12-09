import { FlatList, StyleSheet, } from "react-native"
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import {useLayoutEffect} from 'react'


import { RootStackParamList } from "../constants/RootStackParamList";
import { MealItem } from "../components/categpory/MealItem";
import { MEALS , CATEGORIES} from "../data/dummyData";
import { MealInterface } from "../models/meal";
import { MealList } from "../components";




// Define the type for the MealsScreen route
type MealsScreenRouteProp = RouteProp<RootStackParamList, 'MealsScreen'>;


export const MealsScreen: React.FC = () => {

  // i can define it this way 
  const route = useRoute<MealsScreenRouteProp>();
   const categoryId =route.params.categoryId
  const navigation = useNavigation(); 
  
  // or this way
  // const route = useRoute();
  // const { categoryId } = route.params as MealsScreenParams;



  // getting the category title
  const CategoryTitle=CATEGORIES.find((categorytitle) => categorytitle.id===categoryId)?.title

  //  setting the tittle of the page 
  useLayoutEffect(()=>{
    navigation.setOptions({
      title: CategoryTitle
    })
  }, [categoryId, navigation])

 const displyayedMeal=MEALS.filter((mealitem=>{
  return mealitem.categoryIds.indexOf(categoryId)>=0
 }))

 function renderMealItem(itemData: { item: MealInterface}){
  return <MealItem {...itemData.item} />;
 }


  return (
    // <FlatList
    // style={styles.MealContainer}
    // data={displyayedMeal}
    // keyExtractor={(item) => item.id}
    // renderItem={renderMealItem}
    // />
    <MealList data={displyayedMeal} />
  )
}

