import React from 'react';
import {Platform, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import CategoryScreen from '../screens/CategoryScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import {categories} from '../DUMMY_DATA';
import colors from '../constants/colors';
import IoniconsHeaderButtons from '../components/CustomHeaderButton';
import {Item} from 'react-navigation-header-buttons';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FilterScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const MealStack = createNativeStackNavigator();

export const MealStackNavigation = () => {
  return (
    <MealStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? colors.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
        headerTitleStyle: {fontFamily: 'OpenSans-Bold'},
      }}>
      <MealStack.Screen
        name="Category"
        component={CategoryScreen}
        options={({navigation}) => {
          return {
            headerLeft: () => (
              <IoniconsHeaderButtons>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => navigation.toggleDrawer()}
                />
              </IoniconsHeaderButtons>
            ),
          };
        }}
      />
      <MealStack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({route, navigation}) => {
          const selectedCat = categories.find(
            cat => cat.id === route.params.catId,
          );
          return {
            title: selectedCat.title,
            headerBackTitleStyle: {fontFamily: 'OpenSans-Regular'},
          };
        }}
      />
      <MealStack.Screen name="MealDetails" component={MealDetailsScreen} />
    </MealStack.Navigator>
  );
};

const TabsNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <TabsNavigator.Navigator
      activeColor="white"
      barStyle={styles.tabBarSTyle}
      shifting={true}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.accent,
        tabBarLabelStyle: {
          fontSize: 18,
          fontFamily: 'OpenSans-Regular',
        },
        tabBarStyle: {
          height: 90,
        },
      }}>
      <TabsNavigator.Screen
        options={{
          tabBarColor: colors.primary,
          tabBarLabel:
            Platform.OS === 'android' ? (
              <Text style={styles.tabLabel}>Meals</Text>
            ) : (
              'Meals'
            ),
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name="ios-restaurant" size={20} color={color} />;
          },
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 18,
          },
        }}
        name="Stack"
        component={MealStackNavigation}
      />
      <TabsNavigator.Screen
        options={{
          tabBarColor: colors.accent,
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="ios-star" size={20} color={color} />;
          },
          headerShown: false,
          tabBarLabel:
            Platform.OS === 'android' ? (
              <Text style={styles.tabLabel}>Favourites</Text>
            ) : (
              'Favourites'
            ),
        }}
        name="Favourites"
        component={FavNavigation}
      />
    </TabsNavigator.Navigator>
  );
};

const FavNavigator = createNativeStackNavigator();

const FavNavigation = () => {
  return (
    <FavNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? colors.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
      }}>
      <FavNavigator.Screen
        name="Fav"
        component={FavouritesScreen}
        options={({navigation}) => ({
          title: 'Your Favourites',
          headerLeft: () => (
            <IoniconsHeaderButtons>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => navigation.toggleDrawer()}
              />
            </IoniconsHeaderButtons>
          ),
        })}
      />
      <FavNavigator.Screen name="MealDetails" component={MealDetailsScreen} />
    </FavNavigator.Navigator>
  );
};

const FilterNavigator = createNativeStackNavigator();

const FilterNavigation = () => {
  return (
    <FilterNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? colors.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
      }}>
      <FilterNavigator.Screen
        name="Filters"
        component={FiltersScreen}
        options={({navigation}) => ({
          title: 'Fiter Meals',
          headerLeft: () => (
            <IoniconsHeaderButtons>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => navigation.toggleDrawer()}
              />
            </IoniconsHeaderButtons>
          ),
        })}
      />
    </FilterNavigator.Navigator>
  );
};

const DrawerNavigator = createDrawerNavigator();

const drawerItemConfig = {
  drawerLabelStyle: {
    fontSize: 20,
  },
  drawerActiveTintColor: colors.accent,
  drawerInactiveTintColor: colors.primary,
};

export default () => {
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <DrawerNavigator.Screen
        name="Tabs"
        component={TabsNavigation}
        options={{...drawerItemConfig, title: 'Meals'}}
      />
      <DrawerNavigator.Screen
        name="FilterStack"
        component={FilterNavigation}
        options={{...drawerItemConfig, title: 'Filters'}}
      />
    </DrawerNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
  tabBarStyle: {backgroundColor: colors.primary, height: 60},
});
