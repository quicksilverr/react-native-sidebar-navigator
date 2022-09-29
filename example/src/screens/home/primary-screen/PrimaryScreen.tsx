import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PrimaryScreen: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PRIMARY SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84C3BE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontSize: 24, color: 'white' },
});
