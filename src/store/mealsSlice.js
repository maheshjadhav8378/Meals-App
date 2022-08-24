import {createSlice} from '@reduxjs/toolkit';

import {Meals} from '../DUMMY_DATA';

const initialState = {
  allMeals: Meals,
  favourites: [],
  filtered: Meals,
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    toggleFav: (state, action) => {
      const selectedIndex = state.favourites.findIndex(
        meal => meal.id === action.payload,
      );
      if (selectedIndex >= 0) {
        state.favourites.splice(selectedIndex, 1);
      } else {
        state.favourites.push(
          state.allMeals.find(meal => meal.id === action.payload),
        );
      }
    },
    setFilters: (state, action) => {
      const selectedFilters = action.payload;
      console.log(selectedFilters);
      state.filtered = state.allMeals.filter(meal => {
        if (selectedFilters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (selectedFilters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (selectedFilters.isVegan && !meal.isVegan) {
          return false;
        }
        if (selectedFilters.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
    },
  },
});

export const {toggleFav, setFilters} = mealsSlice.actions;

export default mealsSlice.reducer;
