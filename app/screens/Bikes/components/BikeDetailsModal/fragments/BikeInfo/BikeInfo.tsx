import React, { FC } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface BikeInfoProps {
  bodySize?: number;
  maxLoad?: number;
  ratings?: number;
}

const BikeInfo: FC<BikeInfoProps> = ({ bodySize, maxLoad, ratings }) => (
  <View style={styles.mainContainer}>
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Body size</Text>
      <Text style={styles.infoData}>{bodySize} cm</Text>
    </View>
    <View style={styles.separator} />
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Max Load</Text>
      <Text style={styles.infoData}>{maxLoad} kg</Text>
    </View>
    <View style={styles.separator} />
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Rating</Text>
      <Text style={styles.infoData}>{ratings}</Text>
    </View>
  </View>
);

export default BikeInfo;
