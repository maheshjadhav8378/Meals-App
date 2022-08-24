import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

const CategoryGridTile = props => {
  let TouchableComp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComp style={styles.touchable} onPress={props.onSelect}>
        <View style={[styles.container, {backgroundColor: props.color}]}>
          <Text numberOfLines={2} style={styles.text}>
            {props.title}
          </Text>
        </View>
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 20,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    borderRadius: 15,
    elevation: 10,
  },
  touchable: {flex: 1},
  container: {
    flex: 1,
    borderRadius: 15,
    padding: 15,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    shadowOpacity: 0.26,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    textAlign: 'right',
  },
});

export default CategoryGridTile;
