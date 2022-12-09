import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Preloader from './src/components/Preloader/Preloader';

import {createNavigationContainerRef} from '@react-navigation/native';
import Registration from './src/components/Registration/Registration';
import Authorization from './src/components/Authorization/Authorization';
import {NativeBaseProvider} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import MainScreen from './src/components/MainScreen/MainScreen';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
const theme = {
  colors: {
    lightest1: '#FFE6B1',
    lightest2: '#FED06E',
    light1: '#FFA048',
    light2: '#DA802E',
    accent1: '#ED4A71',
    accent2: '#FF6187',
    accent3: '#FF7D9C',
    darkest1: '#0B304B',
    darkest2: '#11466C',
    darkest3: '#5ED9EA',
  },
  typography: {
    h1: {
      fontSize: 40,
      fontWeight: '700',
    },
    h2: {
      fontSize: 36,
      fontWeight: '700',
    },
    h3: {
      fontSize: 32,
      fontWeight: '700',
    },
  },
};
const App = props => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer
        ref={navigationRef}
        theme={theme}
        initialRouteName="Preloader">
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Preloader"
            component={Preloader}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Authorization"
            component={Authorization}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
