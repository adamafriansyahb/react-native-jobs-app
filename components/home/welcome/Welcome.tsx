import { useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, SIZES, icons } from '@/constants';
import { styles, tabStyles } from './welcome.style';

const JOB_TYPES = ['Full-time', 'Part-time', 'Contract'];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hallo Adams</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
            placeholderTextColor={COLORS.gray}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={JOB_TYPES}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tabStyles(activeJobType === item).tab}
            onPress={() => {
              setActiveJobType(item);
              router.push(`/`);
            }}
          >
            <Text style={tabStyles(activeJobType === item).tabText}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small }}
        horizontal
      />
    </View>
  );
};

export default Welcome;
