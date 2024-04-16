import {
  DimensionValue,
  ImageStyle,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { COLORS, SIZES } from '@/constants';

type ScreenHeaderStyles = {
  btnContainer: ViewStyle;
  btnImg: ImageStyle;
};

const styles = (dimension: DimensionValue) => {
  return StyleSheet.create<ScreenHeaderStyles>({
    btnContainer: {
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.small / 1.25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnImg: {
      width: dimension,
      height: dimension,
      borderRadius: SIZES.small / 1.25,
    },
  });
};

export default styles;
