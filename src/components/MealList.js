import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import MealItem from '../components/MealItem';

const MealList = props => {
  const rendorItem = ({item}) => {
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        affordability={item.affordability}
        complexity={item.complexity}
        imageUrl={item.imageUrl}
        onClick={() =>
          props.navigation.navigate('MealDetails', {
            mealId: item.id,
          })
        }
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.list}
        data={props.listData}
        renderItem={rendorItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '98%',
  },
});

export default MealList;
