import React from 'react';
import { DimensionValue, Image , ImageSourcePropType, TouchableOpacity} from 'react-native';

import styles from './screenheader.style';

type ScreenHeaderBtnProps = {
  iconUrl: ImageSourcePropType;
  dimension: DimensionValue;
  handlePress?: () => void;
}

const ScreenHeaderBtn = ({ dimension, handlePress, iconUrl }: ScreenHeaderBtnProps) => {
  const { btnContainer, btnImg } = styles(dimension);

  return (
    <TouchableOpacity style={btnContainer} onPress={handlePress}>
      <Image
        resizeMode="cover"
        source={iconUrl}
        style={btnImg}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
