import {
  NavigationHelpers,
  ParamListBase,
  Route,
  TabActions,
  TabNavigationState,
} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import type {
  SidebarDescriptorMap,
  SidebarNavigationConfig,
  SidebarNavigationEventMap,
} from 'src/types';
import { SidebarItem } from './sidebarItem';

export interface SidebarProps extends SidebarNavigationConfig {
  state: TabNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase, SidebarNavigationEventMap>;
  descriptors: SidebarDescriptorMap;
}

export const Sidebar: React.FC<SidebarProps> = ({
  state,
  navigation,
  descriptors,
  sideBarStyle,
  sideBarActiveBackgroundColor,
  sideBarActiveTintColor,
  sideBarInactiveBackgroundColor,
  sideBarInactiveTintColor,
  sideBarItemStyle,
  sideBarWidth,
}) => {
  const isFocused = (currIndex: number, routeIndex: number) => {
    return currIndex === routeIndex;
  };

  const onPress = (route: Route<string>) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (event.type === 'tabPress') {
      navigation.dispatch({
        ...TabActions.jumpTo(route.name),
        target: state.key,
      });
    }
  };

  return (
    <View
      style={[
        styles.container,
        { maxWidth: sideBarWidth ? sideBarWidth : widthPercentageToDP(17.3) },
        sideBarStyle,
      ]}
    >
      {state.routes.map((route, i) => (
        <SidebarItem
          route={route}
          focused={isFocused(state.index, i)}
          descriptors={descriptors}
          onPress={onPress}
          sideBarActiveBackgroundColor={sideBarActiveBackgroundColor}
          sideBarActiveTintColor={sideBarActiveTintColor}
          sideBarInactiveBackgroundColor={sideBarInactiveBackgroundColor}
          sideBarInactiveTintColor={sideBarInactiveTintColor}
          sideBarItemStyle={sideBarItemStyle}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});
