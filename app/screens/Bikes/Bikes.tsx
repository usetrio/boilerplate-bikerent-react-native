import React, { FC, useRef, useCallback, useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';
import { BikeCard, BottomSheetModal } from '../../components';
import { Bike } from '../../models';
import { BikeImage } from '../../assets';

import styles from './styles';

const DATA: Bike[] = [
  {
    model: 'Kent Flexer',
    type: 'All terrain bike',
    price: '75',
    rentType: 'Day',
    img: BikeImage,
  },
  {
    model: 'Kent Flexer',
    type: 'All terrain bike',
    price: '75',
    rentType: 'Day',
    img: BikeImage,
  },
];

const snapPoints = ['88%'];

const Bikes: FC = () => {
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);

  const bottomSheetRef = useRef<GorhomBottomSheetModal>(null);

  const route = useRoute();

  const handleBikeCardOnPress = useCallback((item: Bike) => {
    setSelectedBike(item);
    bottomSheetRef.current?.present();
  }, []);

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{route.name}</Text>
      </View>
      <View style={styles.listContainer}>
        <FlashList
          renderItem={({ item }) => (
            <BikeCard onPress={() => handleBikeCardOnPress(item)} data={item} />
          )}
          estimatedItemSize={200}
          data={DATA}
          ItemSeparatorComponent={() => (
            <View style={styles.listItemSeparator} />
          )}
        />
      </View>
      <BottomSheetModal ref={bottomSheetRef} snapPoints={snapPoints}>
        <View>
          <Text>{selectedBike?.model}</Text>
        </View>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

export default Bikes;
