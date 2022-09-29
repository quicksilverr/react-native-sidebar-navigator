import React from 'react';
import { Text, View } from 'react-native';

export const SecondaryScreen: React.FC = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#606E8C',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 24, color: 'white' }}>SECONDARY SCREEN</Text>
    </View>
  );
};
