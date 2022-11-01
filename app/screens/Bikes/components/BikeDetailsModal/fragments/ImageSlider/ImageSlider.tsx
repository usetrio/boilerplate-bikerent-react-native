import React, { FC, useCallback } from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Image } from 'react-native';

import styles from './styles';

interface ImageSliderProps {
  images?: string[];
}

const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
  const renderItem = useCallback(
    ({ item }: any) => (
      <Image
        resizeMode="contain"
        style={styles.imgItem}
        source={{ uri: item }}
      />
    ),
    []
  );

  return (
    <SwiperFlatList
      autoplay
      autoplayLoop
      keyExtractor={(item) => `${item} ${Math.random() * 100}`}
      showPagination
      paginationStyleItem={styles.paginationContainer}
      paginationStyleItemActive={styles.paginationActiveItem}
      paginationStyleItemInactive={styles.paginationInactiveItem}
      data={images}
      renderItem={renderItem}
    />
  );
};

export default ImageSlider;
