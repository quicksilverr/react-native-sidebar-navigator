import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

interface BadgeProps {
  size?: number;
  children?: string | number;
  style?: StyleProp<TextStyle>;
}

export const Badge: React.FC<BadgeProps> = ({ children, size = 16, style }) => {
  const borderRadius = size / 2;
  return (
    <Text
      numberOfLines={1}
      style={[
        {
          width: size,
          height: size,
          lineHeight: size,
          borderRadius: borderRadius,
        },
        styles.container,
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 15,
    top: -5,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    textAlign: 'center',
    overflow: 'hidden',
  },
});
