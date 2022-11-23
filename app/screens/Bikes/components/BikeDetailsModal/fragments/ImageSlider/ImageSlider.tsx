import React, { FC, useCallback } from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Image, ListRenderItemInfo } from 'react-native';
import { BikePlaceholder } from '@app/assets';

import styles from './styles';

interface ImageSliderProps {
  images?: string[];
}

const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<string>) => (
      <Image
        resizeMode="contain"
        style={styles.imgItem}
        source={{ uri: item }}
        defaultSource={BikePlaceholder}
      />
    ),
    []
  );

  return (
    <SwiperFlatList
      autoplay
      autoplayLoop
      keyExtractor={(item: string, index: number) => `${item}-${index}`}
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
