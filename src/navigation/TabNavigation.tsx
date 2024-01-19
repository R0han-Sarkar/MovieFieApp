import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/TicketScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import {FONTSIZE, SPACING} from '../configs/Config';
import {COLORS} from '../configs/Colors';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VideoIcon from 'react-native-vector-icons/Feather';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import UserIcon from 'react-native-vector-icons/AntDesign';
import TicketIcon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.Orange} : null,
                ]}>
                <VideoIcon
                  name="video"
                  color={COLORS.White}
                  size={FONTSIZE.size_24}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.Orange} : null,
                ]}>
                <SearchIcon
                  name="search1"
                  color={COLORS.White}
                  size={FONTSIZE.size_24}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.Orange} : null,
                ]}>
                <TicketIcon
                  name="ticket-alt"
                  color={COLORS.White}
                  size={FONTSIZE.size_24}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={UserAccountScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.Orange} : null,
                ]}>
                <UserIcon
                  name="user"
                  color={COLORS.White}
                  size={FONTSIZE.size_24}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 2,
  },
});

export default TabNavigation;
