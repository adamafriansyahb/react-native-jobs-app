import { StyleSheet } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '@/constants';

const baseStyles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
});

const conditionalStyles = (isActive: boolean) => {
  return StyleSheet.create({
    btn: {
      paddingVertical: SIZES.medium,
      paddingHorizontal: SIZES.xLarge,
      backgroundColor: isActive ? COLORS.primary : '#F3F4F8',
      borderRadius: SIZES.medium,
      marginLeft: 2,
      ...SHADOWS.medium,
      shadowColor: COLORS.white,
    },
    btnText: {
      fontFamily: 'DMMedium',
      fontSize: SIZES.small,
      color: isActive ? '#C3BFCC' : '#AAA9B8',
    },
  });
};

export { baseStyles, conditionalStyles };
