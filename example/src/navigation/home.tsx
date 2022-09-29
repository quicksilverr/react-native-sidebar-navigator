import React from 'react';
import { PrimaryScreen, SecondaryScreen, TertiaryScreen } from '../screens';
import { createSideBarNavigator } from 'react-native-sidebar-navigator';
import Icon from 'react-native-easy-icon';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Stack = createSideBarNavigator();
type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
  return (
    <Stack.Navigator
      sideBarItemStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 5,
        paddingVertical: 10,
        paddingHorizontal: 4,
        borderRadius: 10,
      }}
      sideBarStyle={{
        backgroundColor: '#2271B3',
        paddingTop: heightPercentageToDP(2.5),
      }}
      sideBarActiveTintColor="#F3A505"
      sideBarInactiveBackgroundColor="#8E402A"
      sideBarActiveBackgroundColor="#287233"
      sideBarInactiveTintColor="#FFFFFF"
    >
      <Stack.Screen
        name={'Primary'}
        component={PrimaryScreen}
        options={{
          title: 'Primary',
          sideBarLabelStyle: {
            textAlign: 'center',
            fontSize: 12,
          },
          sideBarIcon: ({ focused }) => (
            <Icon
              name="info"
              type="antdesign"
              size={25}
              color={focused ? '#000000' : '#FFFFFF'}
            />
          ),
        }}
      />
      <Stack.Screen
        name={'Secondary'}
        component={SecondaryScreen}
        options={{
          title: 'Secondary',
          sideBarLabelStyle: {
            textAlign: 'center',
            fontSize: 12,
          },
          sideBarIcon: ({ focused }) => (
            <Icon
              name="infocirlceo"
              type="antdesign"
              size={25}
              color={focused ? '#000000' : '#FFFFFF'}
            />
          ),
        }}
      />
      <Stack.Screen
        name={'Tertiary'}
        component={TertiaryScreen}
        options={{
          title: 'Tertiary',
          sideBarIcon: ({ focused }) => (
            <Icon
              name="infocirlce"
              type="antdesign"
              size={25}
              color={focused ? '#000000' : '#FFFFFF'}
            />
          ),
          sideBarLabelStyle: {
            textAlign: 'center',
            fontSize: 12,
          },
        }}
      />
    </Stack.Navigator>
  );
};
