import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './NavigationService';
import { HOME, TAB_NAVIGATOR } from './RoutesName';
import Home from '../views/home';
import { defaultNavigationConfig, noHeaderNavigationConfig } from './NavigationOptions';
import TabNavigator from './TabNavigator';

export type ModalNavigatorParamList = {
  [HOME]: undefined;
  [TAB_NAVIGATOR]: NavigatorScreenParams<any>;
};

const Stack = createStackNavigator<ModalNavigatorParamList>();

function AppNavigator() {
  const routeRef = useRef<string | undefined>();

  // gets the current screen from navigation state
  const onStateChange = async () => {
    const previousRouteName = routeRef.current;
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name ?? '';

    if (previousRouteName !== currentRouteName) {
      console.log('New Screen', currentRouteName);
    }

    // Save the current route name for later comparison
    routeRef.current = currentRouteName;
  };

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
      <Stack.Navigator screenOptions={defaultNavigationConfig}>
        <Stack.Screen name={HOME} component={Home} />
        <Stack.Screen name={TAB_NAVIGATOR} component={TabNavigator} options={noHeaderNavigationConfig} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
