import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {OverflowMenuProvider} from 'react-navigation-header-buttons';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

import DrawerNavigation from './src/navigation/MealsNavigator';

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <OverflowMenuProvider>
          <DrawerNavigation />
        </OverflowMenuProvider>
      </NavigationContainer>
    </Provider>
  );
};
