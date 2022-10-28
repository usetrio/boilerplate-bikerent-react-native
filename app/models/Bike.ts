import { ImageSourcePropType } from 'react-native';

export interface Bike {
  model: string;
  type: string;
  price: string;
  rentType: string;
  img: ImageSourcePropType | undefined;
}
