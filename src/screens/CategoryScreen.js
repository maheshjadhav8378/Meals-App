import React from 'react';
import {FlatList} from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';

import {categories} from '../DUMMY_DATA';

const CategoryScreen = props => {
  const renderItem = ({item}) => {
    return (
      <CategoryGridTile
        title={item.title}
        onSelect={() =>
          props.navigation.navigate('CategoryMeals', {catId: item.id})
        }
        color={item.color}
      />
    );
  };

  return (
    <FlatList
      data={categories}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id}
    />
  );
};

export default CategoryScreen;
