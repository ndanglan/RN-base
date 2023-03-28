import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppNavigator from './navigators/AppNavigator';
import AppStateSideEffects from './AppStateSideEffects';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <AppNavigator />
      <AppStateSideEffects />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
