import React, { FC, useRef, useCallback, useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';
import { useBikes } from '../../hooks';
import { BikeCard, BottomSheetModal, NavBarHeader } from '../../components';
import { BikeDetailsModal } from './components';
import { Bike } from '../../models';

import styles from './styles';

const snapPoints = ['88%'];

const Bikes: FC = () => {
  const { data, isLoading, refetch } = useBikes();

  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);

  const bottomSheetRef = useRef<GorhomBottomSheetModal>(null);

  const route = useRoute();

  const handleBikeCardOnPress = useCallback((item: Bike) => {
    setSelectedBike(item);
    bottomSheetRef.current?.present();
  }, []);

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <NavBarHeader title={route.name} />
      <View style={styles.listContainer}>
        {data && (
          <FlashList
            renderItem={({ item }: { item: Bike }) => (
              <BikeCard
                onPress={() => handleBikeCardOnPress(item)}
                data={item}
              />
            )}
            estimatedItemSize={200}
            data={data}
            ItemSeparatorComponent={() => (
              <View style={styles.listItemSeparator} />
            )}
            refreshing={isLoading}
            onRefresh={refetch}
          />
        )}
        {isLoading && <ActivityIndicator size="large" />}
      </View>
      <BottomSheetModal ref={bottomSheetRef} snapPoints={snapPoints}>
        <BikeDetailsModal data={selectedBike} />
      </BottomSheetModal>
    </SafeAreaView>
  );
};

export default Bikes;
