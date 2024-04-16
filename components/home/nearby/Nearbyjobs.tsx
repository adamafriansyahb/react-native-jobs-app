import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Href, useRouter } from 'expo-router';
import { COLORS } from '@/constants';
import NearbyJobCard from '@/components/common/cards/nearby/NearbyJobCard';
import styles from './nearbyjobs.style';
import useFetch from '@/hooks/useFetch';
import dummy from '@/utils/dummy';

const ListOfJobs = () => {
  const router = useRouter();

  // const { data, error, isLoading } = useFetch('search', {
  //   query: 'Golang developer',
  //   num_pages: 1,
  // });

  const isLoading = false;
  const error = false;

  if (isLoading) {
    return <ActivityIndicator size="large" color={COLORS.primary} />;
  }

  if (error) {
    return <Text>Something went wrong...</Text>;
  }

  return dummy.map((job) => (
    <NearbyJobCard
      job={job}
      key={`nearby-job-${job.job_id}`}
      onNavigate={() => router.navigate(`/job-details/${job.job_id}`)}
    />
  ));
};

const Nearbyjobs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <ListOfJobs />
      </View>
    </View>
  );
};

export default Nearbyjobs;
