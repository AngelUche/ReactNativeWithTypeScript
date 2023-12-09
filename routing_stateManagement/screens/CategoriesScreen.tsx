import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummyData';
import { CategoryGridTiles } from '../components';
import { CategoryIn } from '../models/category';

type CategoriesScreenProps = {
  navigation: any; 
};

export const CategoriesScreen: React.FC<CategoriesScreenProps> = ({ navigation }) => {
  
  
  
  // Function to render each category item
  function renderCategoryItem(itemData: { item: CategoryIn }) {
    
    // Function to handle navigation
    function handleNavigation() {
      navigation.navigate('MealsScreen', {categoryId:itemData.item.id});
      
    }

    return <CategoryGridTiles title={itemData.item.title} color={itemData.item.color} onPress={handleNavigation} />;
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
