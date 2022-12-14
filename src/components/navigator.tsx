import React from 'react';
import {
  useNavigationBuilder,
  createNavigatorFactory,
  TabRouter,
  TabRouterOptions,
  ParamListBase,
  TabNavigationState,
  TabActionHelpers,
} from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import type {
  SidebarNavigationEventMap,
  SidebarNavigationOptions,
  SideBarNavigatorProps,
} from 'src/types';
import { Sidebar } from './sidebar';
import { Screen } from './screen';

export const SideBarNavigator: React.FC<SideBarNavigatorProps> = ({
  children,
  backBehavior,
  initialRouteName,
  ...rest
}) => {
  const { state, navigation, NavigationContent, descriptors } =
    useNavigationBuilder<
      TabNavigationState<ParamListBase>,
      TabRouterOptions,
      TabActionHelpers<ParamListBase>,
      SidebarNavigationOptions,
      SidebarNavigationEventMap
    >(TabRouter, {
      children,
      backBehavior,
      initialRouteName,
    });
  return (
    <NavigationContent>
      <View style={styles.container}>
        <Sidebar
          descriptors={descriptors}
          navigation={navigation}
          state={state}
          {...rest}
        />
        <Screen descriptors={descriptors} state={state} />
      </View>
    </NavigationContent>
  );
};

export const createSideBarNavigator = createNavigatorFactory<
  TabNavigationState<ParamListBase>,
  SidebarNavigationOptions,
  SidebarNavigationEventMap,
  typeof SideBarNavigator
>(SideBarNavigator);

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flex: 1 },
});
