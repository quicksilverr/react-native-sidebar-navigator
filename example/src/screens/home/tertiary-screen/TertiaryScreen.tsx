import React from 'react';
import { Text, View } from 'react-native';

export const TertiaryScreen: React.FC = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#C35831',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 24, color: 'white' }}>TERTIARY SCREEN</Text>
    </View>
  );
};
