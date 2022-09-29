import type {
  TabRouterOptions,
  DefaultNavigatorOptions,
  ParamListBase,
  TabNavigationState,
  Descriptor,
  RouteProp,
  NavigationProp,
  TabActionHelpers,
} from '@react-navigation/native';
import type { ViewStyle, StyleProp, TextStyle } from 'react-native';

export interface SidebarNavigationConfig {
  sideBarStyle?: StyleProp<ViewStyle>;
  sideBarActiveTintColor?: string;
  sideBarInactiveTintColor?: string;
  sideBarActiveBackgroundColor?: string;
  sideBarInactiveBackgroundColor?: string;
  sideBarItemStyle?: StyleProp<ViewStyle>;
  sideBarWidth?: number;
}

export interface SidebarNavigationOptions {
  title: string;
  sideBarIcon?: (props: { focused: boolean; size: number }) => React.ReactNode;
  sideBarIconStyle?: StyleProp<TextStyle>;
  sideBarLabel?:
    | string
    | ((props: { focused: boolean; color: string }) => React.ReactNode);
  sideBarLabelStyle?: StyleProp<TextStyle>;
  sideBarBadge?: number | string;
  sideBarBadgeStyle?: StyleProp<TextStyle>;
  sideBarBadgeSize?: number;
}

export type SidebarNavigationEventMap = {
  tabPress: {
    data: { isAlreadyFocused: boolean };
    canPreventDefault: true;
  };
};

export type SideBarNavigatorProps = DefaultNavigatorOptions<
  ParamListBase,
  TabNavigationState<ParamListBase>,
  SidebarNavigationOptions,
  SidebarNavigationEventMap
> & {
  children?: React.ReactNode;
  backBehavior?: 'initialRoute' | 'firstRoute' | 'history' | 'order' | 'none';
  initialRouteName?: string;
} & TabRouterOptions &
  SidebarNavigationConfig;

export type SidebarNavigationProp<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = keyof ParamList,
  NavigatorID extends string | undefined = undefined
> = NavigationProp<
  ParamList,
  RouteName,
  NavigatorID,
  TabNavigationState<ParamList>,
  SidebarNavigationOptions,
  SidebarNavigationEventMap
> &
  TabActionHelpers<ParamList>;

export type SidebarDescriptor = Descriptor<
  SidebarNavigationOptions,
  SidebarNavigationProp<ParamListBase>,
  RouteProp<ParamListBase>
>;

export type SidebarDescriptorMap = Record<string, SidebarDescriptor>;
