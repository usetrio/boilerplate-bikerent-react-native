import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { Bike } from '../../../../models';

interface BikeDetailsModalProps {
  data: Bike | null;
}

const BikeDetailsModal: FC<BikeDetailsModalProps> = ({ data }) => (
  <View>
    <Text>{data?.model}</Text>
    <Text>{data?.price}</Text>
    <Text>{data?.rentType}</Text>
    <Text>{data?.type}</Text>
  </View>
);

export default BikeDetailsModal;
