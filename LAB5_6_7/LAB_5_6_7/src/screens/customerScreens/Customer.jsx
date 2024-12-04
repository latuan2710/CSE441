import {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {ActivityIndicator, IconButton, useTheme} from 'react-native-paper';
import CustomerListItem from '../../components/CustomerListItem';
import {getAllCustomer} from '../../services/apiServices';

export default function Customer({navigation}) {
  const theme = useTheme();
  const [customers, setCustomers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      const data = await getAllCustomer();
      setCustomers(data);
      setLoading(false);
    };

    fetchCustomers();
  }, [refreshing]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View>
          <View style={styles.list}>
            <FlatList
              scrollEnabled={false}
              data={customers}
              keyExtractor={({_id}) => _id}
              renderItem={({item}) => (
                <CustomerListItem
                  name={item.name}
                  phone={item.phone}
                  totalMoney={item.totalSpent}
                  loyalty={item.loyalty}
                  onpress={() =>
                    navigation.navigate('Customer_Detail', {id: item._id})
                  }
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
      <IconButton
        icon="plus"
        iconColor={theme.colors.text}
        size={30}
        style={[styles.addButton, {backgroundColor: theme.colors.primary}]}
        onPress={() => navigation.navigate('Customer_Add')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  list: {
    marginTop: 20,
    gap: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
});
