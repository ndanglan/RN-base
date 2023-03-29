import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { FIRST_TAB, SECOND_TAB, THIRD_TAB, FOURTH_TAB } from './RoutesName';
import { noHeaderNavigationConfig } from './NavigationOptions';

export type TabNavigatorParamList = {
  [FIRST_TAB]: undefined;
  [SECOND_TAB]: undefined;
  // TODO: reimplement when memories added
  // [ROUTE_MEMORIES]: undefined;
  [THIRD_TAB]: undefined;
  [FOURTH_TAB]: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    // tabBar={(props) => <CrcleTabBar {...props} />}
    >
      <Tab.Screen name={FIRST_TAB} component={() => <Text>{FIRST_TAB}</Text>} options={noHeaderNavigationConfig} />
      <Tab.Screen name={SECOND_TAB} component={() => <Text>{SECOND_TAB}</Text>} options={noHeaderNavigationConfig} />
      <Tab.Screen name={THIRD_TAB} component={() => <Text>{THIRD_TAB}</Text>} options={noHeaderNavigationConfig} />
      <Tab.Screen name={FOURTH_TAB} component={() => <Text>{FOURTH_TAB}</Text>} options={noHeaderNavigationConfig} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
