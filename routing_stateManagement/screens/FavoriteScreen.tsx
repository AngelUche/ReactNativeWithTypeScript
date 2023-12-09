import {Text, View, StyleSheet} from 'react-native'

import { MEALS } from '../data/dummyData'
import { MealList } from '../components'
import { useAppSelector } from '../app/typedAppStore'

export const FavoriteScreen = () => {
  const {ids} = useAppSelector(state=>state.favoriteMealSlice)
  const favoriteMeals= MEALS.filter((meal)=>ids.includes(meal.id))
  if(favoriteMeals.length===0){
    return(
      <View style={styles.FavContainer}>
        <Text style={styles.Text}>You have no favourite meals yet!</Text>
      </View>
    )
  }
  return (
    <MealList data={favoriteMeals}/>
  )
}

const styles = StyleSheet.create({
  FavContainer:{
    flex: 1,
    alignItems:"center",
    justifyContent: "center",
  },
  Text:{
    color: "white",
    fontSize:22,
    fontWeight:"400"

  }
})

