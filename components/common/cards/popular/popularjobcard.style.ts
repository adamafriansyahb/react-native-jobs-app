import { StyleSheet } from 'react-native';

import { COLORS, FONT, SHADOWS, SIZES } from '../../../../constants';

const baseStyles = StyleSheet.create({
  logoImage: {
    width: '70%',
    height: '70%',
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
  },
});

const conditionalStyles = (isActive: boolean) => {
  return StyleSheet.create({
    container: {
      width: 250,
      padding: SIZES.xLarge,
      backgroundColor: isActive ? COLORS.primary : '#FFF',
      borderRadius: SIZES.medium,
      justifyContent: 'space-between',
      ...SHADOWS.medium,
      shadowColor: COLORS.white,
    },
    logoContainer: {
      width: 50,
      height: 50,
      backgroundColor: isActive ? '#FFF' : COLORS.white,
      borderRadius: SIZES.medium,
      justifyContent: 'center',
      alignItems: 'center',
    },
    jobName: {
      fontSize: SIZES.large,
      fontFamily: FONT.medium,
      color: isActive ? COLORS.white : COLORS.primary,
    },
    publisher: {
      fontSize: SIZES.medium - 2,
      fontFamily: FONT.bold,
      color: isActive ? COLORS.white : COLORS.primary,
    },
  });
};

const styles = (isActive: boolean) => ({
  ...baseStyles,
  ...conditionalStyles(isActive)
});

export default styles;
