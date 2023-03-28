import React, { FC, useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus, View } from 'react-native';

const AppStateSideEffects: FC = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const handleAppStateChange = (nextAppState: AppStateStatus) => {
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    if (appStateVisible === 'active') {
      // Put active side-effects here
    }
  }, [appStateVisible]);

  return <View />;
};

export default AppStateSideEffects;
