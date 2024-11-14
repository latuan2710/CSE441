import {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {ActivityIndicator, Text, useTheme} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ServiceListItem from '../../components/ServiceListItem';
import {getAllService} from '../../services/apiServices';
import HomeHeaderBar from '../../components/HomeHeaderBar';

export default function Service({navigation}) {
  const theme = useTheme();
  const [service, setService] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getAllService();
      setService(data);
      setLoading(false);
    };

    fetchServices();
  }, [refreshing]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <HomeHeaderBar />
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/logo.png')}
          resizeMode="contain"
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Danh sách dịch vụ</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Service_Add')}>
            <AntDesign
              name="pluscircle"
              size={25}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <FlatList
            scrollEnabled={false}
            data={service}
            keyExtractor={({_id}) => _id}
            renderItem={({item}) => (
              <ServiceListItem
                name={item.name}
                price={item.price}
                onPress={() => {
                  navigation.navigate('Service_Detail', {id: item._id});
                }}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor:'#fff'},
  image: {
    width: '100%',
    height: 100,
  },
  titleContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 20,
    gap: 10,
    paddingHorizontal: 10,
  },
});
