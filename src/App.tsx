import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import AppNavigator from './navigators/AppNavigator';
import AppStateSideEffects from './AppStateSideEffects';
import { appStore, persistor } from '@stores/index';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={appStore}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
          <AppStateSideEffects />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
