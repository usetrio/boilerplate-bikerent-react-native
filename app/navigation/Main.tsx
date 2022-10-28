import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Bikes, BikeBooking } from '../screens';
import { NavBarRightItem, NavBarLeftItem } from '../components';

const MainStack = createStackNavigator();

const Main: FC = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Bike Rental"
      component={Bikes}
      options={{
        headerShadowVisible: false,
        headerTitle: '',
        headerRight: () => <NavBarRightItem location="Manhattan" />,
        headerLeft: () => <NavBarLeftItem />,
        headerStyle: {
          backgroundColor: '#1F49D1',
        },
      }}
    />
    <MainStack.Screen name="Booking" component={BikeBooking} />
  </MainStack.Navigator>
);

export default Main;
