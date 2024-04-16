import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SIZES } from '@/constants';
import { TabName } from '@/app/job-details/[id]';
import { baseStyles, conditionalStyles } from './tabs.style';

type TJobTabs = {
  tabs: any;
  activeTab: TabName;
  setActiveTab: (tab: TabName) => void;
}

type TTabButton = {
  name: string;
  activeTab: TabName;
  onHandleSearchType: () => void;
}

const TabButton = ({activeTab,name,onHandleSearchType}: TTabButton) => {
  const styles = conditionalStyles(activeTab === name);
  
  return (
    <TouchableOpacity style={styles.btn} onPress={onHandleSearchType}>
      <Text style={styles.btnText}>{name}</Text>
    </TouchableOpacity>
  );
}

const Tabs = ({activeTab,setActiveTab,tabs}: TJobTabs) => {
  
  return (
    <View style={baseStyles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton 
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default Tabs;
