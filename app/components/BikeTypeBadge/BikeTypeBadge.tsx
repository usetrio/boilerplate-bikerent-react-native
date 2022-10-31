import React, { FC } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface BikeTypeBadgeProps {
  type?: string;
}

const BikeTypeBadge: FC<BikeTypeBadgeProps> = ({ type }) => {
  return (
    <View style={styles.bikeTypeContainer}>
      <Text style={styles.bikeTypeText}>{type}</Text>
    </View>
  );
};

export default BikeTypeBadge;
