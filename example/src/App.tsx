import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RootNavigator } from './navigation';
export default function App() {
  return <RootNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
