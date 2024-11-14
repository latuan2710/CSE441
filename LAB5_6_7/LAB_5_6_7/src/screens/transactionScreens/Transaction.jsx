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
import {getAllTransaction} from '../../services/apiServices';
import TransactionListItem from '../../components/TransactionListItem';

export default function Transaction({navigation}) {
  const theme = useTheme();
  const [transactions, setTransactions] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getAllTransaction();
      setTransactions(data);
      setLoading(false);
    };

    fetchTransactions();
  }, [refreshing]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View>
          <View style={styles.list}>
            <FlatList
              scrollEnabled={false}
              data={transactions}
              keyExtractor={({_id}) => _id}
              renderItem={({item}) => (
                <TransactionListItem
                  id={item.id}
                  services={item.services}
                  customer={item.customer}
                  price={item.price}
                  updatedAt={item.updatedAt}
                  status={item.status}
                  onPress={() =>
                    navigation.navigate('Transaction_Detail', {id: item._id})
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
  container: {flex: 1},
  list: {
    marginTop: 20,
    gap: 10,
    paddingHorizontal: 10,
  },
  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    marginTop: 10,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    flexBasis: Dimensions.get('screen').width - 140,
  },
  servicePrice: {
    fontSize: 18,
    flexBasis: 100,
    textAlign: 'right',
  },
  addButton: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
});
