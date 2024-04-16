import { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import PopularJobCard from '@/components/common/cards/popular/PopularJobCard';
import { COLORS, SIZES } from '@/constants';
import useFetch from '@/hooks/useFetch';
import styles from './popularjobs.style';
import dummy from '@/utils/dummy';

type TListOfJobs = {
  data: any;
  isLoading: boolean;
  error: any;
};

const ListOfJobs = ({ data, isLoading, error }: TListOfJobs) => {
  const router = useRouter();

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item: any) => {
    // router.push(`/job-details/${item.job_id}`);
    // setSelectedJob(item.job_id);
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color={COLORS.primary} />;
  }

  if (error) {
    return <Text>Something went wrong...</Text>;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PopularJobCard item={item} selectedJob={selectedJob} onCardPress={handleCardPress} />}
      keyExtractor={(item) => item?.job_id}
      contentContainerStyle={{ columnGap: SIZES.medium }}
      horizontal
    />
  );
};

const Popularjobs = () => {
  // const { data, error, isLoading } = useFetch('search', {
  //   query: 'React developer',
  //   num_pages: 1,
  // });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <ListOfJobs data={dummy} isLoading={false} error={null} />
        {/* <ListOfJobs data={data} isLoading={isLoading} error={error} /> */}
      </View>
    </View>
  );
};

export default Popularjobs;
