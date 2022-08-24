import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {Item} from 'react-navigation-header-buttons';
import {useDispatch} from 'react-redux';

import IoniconsHeaderButtons from '../components/CustomHeaderButton';

import Colors from '../constants/colors';
import {setFilters} from '../store/mealsSlice';

const SwitchItem = props => {
  return (
    <View style={styles.switchItem}>
      <Text style={styles.switchText}>{props.text}</Text>
      <Switch
        value={props.value}
        onValueChange={props.onChange}
        style={styles.switch}
        trackColor={{true: Colors.accent}}
        thumbColor={Colors.primary}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const [isVegan, setIsVegan] = useState(false);
  const [isLactoseFree, setLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isGlutenFree, setIsGlutenFree] = useState(false);

  const dispatch = useDispatch();

  const {navigation} = props;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IoniconsHeaderButtons>
          <Item
            title="save"
            iconName="ios-save"
            onPress={() => {
              const selectedFilters = {
                isVegan: isVegan,
                isLactoseFree: isLactoseFree,
                isVegetarian: isVegetarian,
                isGlutenFree: isGlutenFree,
              };
              dispatch(setFilters(selectedFilters));
            }}
          />
        </IoniconsHeaderButtons>
      ),
    });
  }, [
    navigation,
    isGlutenFree,
    dispatch,
    isLactoseFree,
    isVegetarian,
    isVegan,
  ]);

  return (
    <View style={styles.container}>
      <SwitchItem
        value={isLactoseFree}
        text="Lactose Free"
        onChange={newVal => setLactoseFree(newVal)}
      />
      <SwitchItem
        value={isGlutenFree}
        text="Gluten Free"
        onChange={newVal => setIsGlutenFree(newVal)}
      />
      <SwitchItem
        value={isVegetarian}
        text="Vegetarian"
        onChange={newVal => setIsVegetarian(newVal)}
      />
      <SwitchItem
        value={isVegan}
        text="vegan"
        onChange={newVal => setIsVegan(newVal)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  switchText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
  switchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    margin: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  switch: {},
});

export default FiltersScreen;
