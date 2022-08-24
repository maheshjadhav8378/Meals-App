import React from 'react';
import {useSelector} from 'react-redux';

import MealList from '../components/MealList';

// import {categories} from '../DUMMY_DATA';

const CategoryMealsScreen = props => {
  // React.useEffect(() => {
  //   const selectedCat = categories.find(
  //     cat => cat.id === props.route.params.catId,
  //   );
  //   props.navigation.setOptions({
  //     title: selectedCat.title,
  //   });
  // }, [props]);

  const availableMeals = useSelector(state => state.meals.filtered);

  const catId = props.route.params.catId;

  const displayMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
