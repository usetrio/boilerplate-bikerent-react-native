import React, { FC } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BikeInfo, ImageSlider, RateContainer } from './fragments';
import { BikeTypeBadge } from '@app/components';
import { Bike } from '@app/models';
import { FavoriteBigIcon, MapImage } from '@app/assets';

import styles from './styles';

interface BikeDetailsModalProps {
  data: Bike | null;
  handleCloseModal?: () => void;
}

const BikeDetailsModal: FC<BikeDetailsModalProps> = ({
  data,
  handleCloseModal,
}) => (
  <>
    <View style={styles.headerContainer}>
      <ImageSlider images={data?.imageUrls} />
      <BikeInfo
        bodySize={data?.bodySize}
        maxLoad={data?.maxLoad}
        ratings={data?.ratings}
      />
    </View>

    <ScrollView style={styles.scrollView}>
      <View style={styles.scrollViewSubContainer}>
        <Text style={styles.bikeTitle}>{data?.name}</Text>
        <BikeTypeBadge type={data?.type} />
        <Text style={styles.bikeDescription}>{data?.description}</Text>
        <View style={styles.separator} />
        <RateContainer rate={data?.rate} />
        <View style={styles.separator} />
        <Text style={styles.addressTitle}>Full adress after booking</Text>
        <View style={styles.mapContainer}>
          <Image resizeMode="contain" source={MapImage} />
        </View>
      </View>
    </ScrollView>

    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.favoriteButton}>
        <Image source={FavoriteBigIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleCloseModal}
        style={styles.rentBikeButton}
      >
        <Text style={styles.rentBikeButtonText}>Rent Bike</Text>
      </TouchableOpacity>
    </View>
  </>
);

export default BikeDetailsModal;
