import { View, Text, TouchableOpacity, Image } from 'react-native';
import jobCardStyles from './popularjobcard.style';
import { checkImageURL } from '@/utils';

type TPopularJobCard = {
  item: any;
  selectedJob: any;
  onCardPress: (item: any) => void;
};

const PopularJobCard = ({
  onCardPress,
  item,
  selectedJob,
}: TPopularJobCard) => {
  const styles = jobCardStyles(selectedJob === item.job_id);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View>
          <Text>{item?.job_publisher} -</Text>
          <Text style={styles.location}>{item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
