import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button } from 'react-native';

const BikeBooking: FC = ({ route, navigation }) => {
  const { bike } = route.params;

  return (
    <SafeAreaView>
      <Text>{bike}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default BikeBooking;
