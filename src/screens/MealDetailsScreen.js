import React, {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {Item} from 'react-navigation-header-buttons';
import {useDispatch, useSelector} from 'react-redux';
import IoniconsHeaderButtons from '../components/CustomHeaderButton';

import DefaultText from '../components/DefaultText';
import {toggleFav} from '../store/mealsSlice';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailsScreen = props => {
  const {navigation} = props;

  const dimensions = useWindowDimensions();
  const dispatch = useDispatch();

  const mealId = props.route.params.mealId;

  const selectedMeal = useSelector(state => state.meals.allMeals).find(
    meal => meal.id === mealId,
  );

  const isFav = useSelector(state =>
    state.meals.favourites.some(meal => meal.id === mealId),
  );

  useEffect(
    () =>
      navigation.setOptions({
        headerTitle: selectedMeal.title,
        headerRight: () => (
          <IoniconsHeaderButtons>
            <Item
              title="fav"
              iconName={isFav ? 'ios-star' : 'ios-star-outline'}
              onPress={() => dispatch(toggleFav(selectedMeal.id))}
            />
          </IoniconsHeaderButtons>
        ),
      }),
    [navigation, selectedMeal, dispatch, isFav],
  );

  return (
    <ScrollView>
      <Image
        style={[styles.image, {height: 0.35 * dimensions.height}]}
        source={{uri: selectedMeal.imageUrl}}
        resizeMode="cover"
      />
      <View style={styles.row}>
        <DefaultText>{selectedMeal.duration} Min</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      <View style={styles.container}>
        {selectedMeal.ingredients.map(ing => (
          <ListItem key={ing}>{ing}</ListItem>
        ))}
      </View>
      <Text style={styles.title}>Steps</Text>
      <View style={styles.container}>
        {selectedMeal.steps.map(step => (
          <ListItem key={step}>{step}</ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
  title: {
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  container: {
    padding: 10,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  listItem: {
    width: '100%',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default MealDetailsScreen;
