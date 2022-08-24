import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';

const FavouritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favourites);

  if (favMeals.length === 0) {
    return <Text>Retry</Text>;
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavouritesScreen;
