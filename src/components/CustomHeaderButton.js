import React from 'react';
import {HeaderButton, HeaderButtons} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
import colors from '../constants/colors';

const IoniconsHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={20}
      color={Platform.OS === 'android' ? 'white' : colors.primary}
    />
  );
};

const IoniconsHeaderButtons = props => {
  return (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton} {...props} />
  );
};

export default IoniconsHeaderButtons;
