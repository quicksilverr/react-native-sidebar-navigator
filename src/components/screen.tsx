import type {
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { SidebarDescriptorMap } from 'src/types';

interface ScreenProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: SidebarDescriptorMap;
}

export const Screen: React.FC<ScreenProps> = ({ state, descriptors }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, i) => {
        return (
          <View
            key={route.key}
            style={[
              StyleSheet.absoluteFill,
              { display: i === state.index ? 'flex' : 'none' },
            ]}
          >
            {descriptors[route.key]?.render()}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
