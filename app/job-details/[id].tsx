import { useState, useCallback } from 'react';
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from '@/components';
import { COLORS, icons, SIZES } from '@/constants';
import useFetch from '@/hooks/useFetch';
import dummy from '@/utils/dummy';

export type TabName = 'About' | 'Qualifications' | 'Responsibilities';

const TABS: TabName[] = ['About', 'Qualifications', 'Responsibilities'];

type TJobDetails = {
  data: any;
  isLoading: boolean;
  error: any;
};

const Details = ({ data, error, isLoading }: TJobDetails) => {
  if (isLoading) {
    return <ActivityIndicator size="large" color={COLORS.primary} />;
  }

  if (error) {
    return <Text>Something went wrong</Text>;
  }

  if (!data.length) {
    return <Text>No data available</Text>;
  }

  const [activeTab, setActiveTab] = useState<TabName>(TABS[0]);

  const tabComponents = {
    Qualifications: (
      <Specifics
        title="Qualifications"
        points={data[0].job_highlights?.Qualifications ?? ['N/A']}
      />
    ),
    About: <JobAbout info={data[0].job_description ?? 'No data provided'} />,
    Responsibilities: (
      <Specifics
        title="Responsibilities"
        points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
      />
    ),
  };

  return (
    <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
      <Company
        companyLogo={data[0].employer_logo}
        jobTitle={data[0].job_title}
        companyName={data[0].employer_name}
        location={data[0].job_country}
      />

      <JobTabs tabs={TABS} activeTab={activeTab} setActiveTab={setActiveTab} />

      {tabComponents[activeTab]}
    </View>
  );
};

const JobDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  const data=dummy;
  const error=null;
  const isLoading=false;

  // const { data, error, isLoading, refetch } = useFetch('job-details', {
  //   job_id: params.id,
  // });

  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    // setRefreshing(true);
    // refetch();
    // setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: '',
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        >
          <Details
            data={data}
            error={error}
            isLoading={isLoading}
          />
        </ScrollView>
        <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
