import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import DefaultText from './DefaultText';

const MealItem = props => {
  return (
    <View style={styles.box}>
      <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onClick}>
          <View style={styles.imageContainer}>
            <ImageBackground
              style={styles.image}
              source={{uri: props.imageUrl}}>
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.textContainer}>
            <DefaultText style={styles.text}>{props.duration} min</DefaultText>
            <DefaultText style={styles.text}>
              {props.complexity.toUpperCase()}
            </DefaultText>
            <DefaultText style={styles.text}>
              {props.affordability.toUpperCase()}
            </DefaultText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    width: '100%',
    height: 300,
    backgroundColor: '#ccc',
    borderRadius: 20,
    overflow: 'hidden',
  },
  box: {
    padding: '0.5%',
    margin: '0.5%',
    marginVertical: '2%',
    width: '100%',
    height: 300,
    borderRadius: 20,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowOpacity: 0.5,
    elevation: 10,
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
  },
  titleContainer: {
    paddingHorizontal: '2%',
    paddingVertical: '3%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  imageContainer: {
    width: '100%',
    height: '85%',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '15%',
    padding: '2%',
  },
  text: {
    fontSize: 20,
  },
});

export default MealItem;
