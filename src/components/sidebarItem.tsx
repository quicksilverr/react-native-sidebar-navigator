import React from 'react';
import { Pressable, Text, View } from 'react-native';
import type { SidebarDescriptorMap, SidebarNavigationConfig } from 'src/types';
import type { Route } from '@react-navigation/native';
import { Badge } from './badge';

interface SidebarItemProps extends SidebarNavigationConfig {
  route: Route<string>;
  focused?: boolean;
  descriptors?: SidebarDescriptorMap;
  onPress?: (route: Route<string>) => void;
}
export const SidebarItem: React.FC<SidebarItemProps> = ({
  route,
  focused,
  sideBarActiveBackgroundColor,
  sideBarActiveTintColor,
  sideBarInactiveBackgroundColor,
  sideBarInactiveTintColor,
  sideBarItemStyle,
  descriptors,
  onPress,
}) => {
  const descriptorOptions = descriptors[route.key]?.options;
  return (
    <Pressable
      key={route.key}
      style={[
        {
          backgroundColor: focused
            ? sideBarActiveBackgroundColor
            : sideBarInactiveBackgroundColor,
        },
        sideBarItemStyle,
      ]}
      onPress={() => {
        onPress(route);
      }}
    >
      {descriptorOptions?.sideBarIcon && (
        <View style={descriptorOptions?.sideBarIconStyle}>
          {descriptorOptions?.sideBarIcon({
            focused: focused,
            size: 22,
          })}

          {descriptorOptions?.sideBarBadge && (
            <Badge
              children={descriptorOptions?.sideBarBadge}
              style={descriptorOptions?.sideBarBadgeStyle}
              size={descriptorOptions?.sideBarBadgeSize}
            />
          )}
        </View>
      )}
      <Text
        key={route.key}
        style={[
          {
            color: focused ? sideBarActiveTintColor : sideBarInactiveTintColor,
          },
          descriptorOptions?.sideBarLabelStyle,
        ]}
      >
        {descriptorOptions?.title || route.name}
      </Text>
    </Pressable>
  );
};
