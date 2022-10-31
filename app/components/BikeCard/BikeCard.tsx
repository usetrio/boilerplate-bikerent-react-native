import React, { FC } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { BikeTypeBadge } from '../../components';
import { BikePlaceholder, FavoriteIcon } from '../../assets';
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
    <Image
      style={styles.bikeImage}
      source={{
        uri: data.imageUrls[0],
      }}
      resizeMode="contain"
      defaultSource={BikePlaceholder}
    />
    <View style={styles.bikeModelContainer}>
      <Text style={styles.bikeModelText}>{data.name}</Text>
    </View>
    <View style={styles.separator} />
    <View style={styles.bikeInfoContainer}>
      <BikeTypeBadge type={data.type} />
      <View style={styles.bikePriceContainer}>
        <Text style={styles.bikePriceText}>€ {data.rate}/</Text>
        <Text style={styles.bikeDayText}>Day</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default BikeCard;
