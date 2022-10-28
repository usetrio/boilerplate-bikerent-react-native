import React, { FC } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { FavoriteIcon } from '../../assets';
import { Bike } from '../../models';

import styles from './styles';

interface BikeCardProps {
  data: Bike;
  onPress: () => void;
}

const BikeCard: FC<BikeCardProps> = ({ data, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.95}
    onPress={onPress}
    style={styles.cardContainer}
  >
    <Image style={styles.favoriteIcon} source={FavoriteIcon} />
    <Image style={styles.bikeImage} source={data.img} />
    <View style={styles.bikeModelContainer}>
      <Text style={styles.bikeModelText}>{data.model}</Text>
    </View>
    <View style={styles.separator} />
    <View style={styles.bikeInfoContainer}>
      <View style={styles.bikeTypeContainer}>
        <Text style={styles.bikeTypeText}>{data.type}</Text>
      </View>
      <View style={styles.bikePriceContainer}>
        <Text style={styles.bikePriceText}>€ {data.price}/</Text>
        <Text style={styles.bikeDayText}>{data.rentType}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default BikeCard;
