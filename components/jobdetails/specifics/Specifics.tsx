import { View, Text } from 'react-native';
import styles from './specifics.style';

type TSpecifics = {
  title: string;
  points: [];
}

const Specifics = ({ points, title }: TSpecifics) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
