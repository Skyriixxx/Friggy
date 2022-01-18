/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';

import App from './src/App'

interface Props {}

interface State {
  switchTheme?: boolean;
}

export default class AppBoostrap extends React.Component {
  public render() {
    return (
      <NavigationContainer>
          <NativeBaseProvider>
              <App/>
          </NativeBaseProvider>
      </NavigationContainer>
    )
  }
}