import React, { FC } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { MenuIcon } from '@app/assets';

import styles from './styles';

const NavBarLeftItem: FC = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={MenuIcon} />
    </TouchableOpacity>
  );
};

export default NavBarLeftItem;
