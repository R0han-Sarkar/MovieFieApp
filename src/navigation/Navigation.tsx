import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import SeatBookingScreen from '../screens/SeatBookingScreen';

const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        <Stack.Screen name="SeatBooking" component={SeatBookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
