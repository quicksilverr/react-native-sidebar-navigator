import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const SecondaryScreen: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SECONDARY SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#606E8C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontSize: 24, color: 'white' },
});
