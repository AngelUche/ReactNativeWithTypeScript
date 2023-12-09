import { FlatList, StyleSheet, } from "react-native"


import { MealItem } from "../categpory/MealItem";
import { MealInterface } from "../../models/meal";

export const MealList = ({data}) => {
  function renderMealItem(itemData: { item: MealInterface}){
    return <MealItem {...itemData.item} />;
   }
  
  return (
    <FlatList
    style={styles.MealContainer}
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={renderMealItem}
    />
  )
}

const styles = StyleSheet.create({
  MealContainer: {
    flex: 1,
    padding: 26,
  },
});
