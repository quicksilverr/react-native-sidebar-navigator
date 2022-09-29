import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const TertiaryScreen: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TERTIARY SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C35831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontSize: 24, color: 'white' },
});
