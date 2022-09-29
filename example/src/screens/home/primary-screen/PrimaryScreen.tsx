import React from 'react';
import { Text, View } from 'react-native';

export const PrimaryScreen: React.FC = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#84C3BE',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 24, color: 'white' }}>PRIMARY SCREEN</Text>
    </View>
  );
};
