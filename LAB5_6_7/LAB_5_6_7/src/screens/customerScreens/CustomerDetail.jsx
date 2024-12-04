import {useEffect, useState} from 'react';
import {deleteCustomer, getCustomerById} from '../../services/apiServices';
import {Alert, FlatList, ScrollView, StyleSheet, View} from 'react-native';
import WaitLoading from '../../components/WaitLoading';
import {Appbar, Icon, Text, useTheme} from 'react-native-paper';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {formatDate, formatMoney} from '../../services/extraService';
import TransactionListItem from '../../components/TransactionListItem';

export default function DetailCustomer({navigation, route}) {
  const {id} = route.params;
  const theme = useTheme();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCustomerById(id).then(d => {
      setData(d);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <WaitLoading />;
  }

  return (
    <ScrollView>
      <Appbar.Header style={{backgroundColor: theme.colors.primary}}>
        <Appbar.BackAction color="#fff" onPress={() => navigation.goBack()} />
        <Appbar.Content
          color="#fff"
          title="Customer Detail"
          titleStyle={{fontWeight: 'bold'}}
        />
        <Menu>
          <MenuTrigger style={{paddingHorizontal: 10}}>
            <Icon source="dots-vertical" color="#fff" size={30} />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption
              onSelect={() => {
                navigation.navigate('Customer_Edit', {id: data._id});
              }}>
              <Text>
                <Icon size={20} source={'lead-pencil'} />
                Edit
              </Text>
            </MenuOption>
            <MenuOption
              onSelect={() =>
                Alert.alert(
                  'Alert',
                  'Are you sure you want to remove this client? This will not be possible to return',
                  [
                    {
                      text: 'Delete',
                      onPress: async () => {
                        await deleteCustomer(data._id);
                        navigation.navigate('Customer_List');
                      },
                    },
                    {
                      text: 'Cancel',
                      style: 'cancel',
                    },
                  ],
                )
              }>
              <Text style={{color: 'red'}}>
                <Icon size={20} color="red" source={'trash-can'} />
                Delete
              </Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </Appbar.Header>
      <View style={styles.box}>
        <Text
          variant="titleMedium"
          style={[styles.title, {color: theme.colors.primary}]}>
          General information
        </Text>
        <Text variant="titleMedium" style={styles.label}>
          Name: <Text>{data.name}</Text>
        </Text>
        <Text variant="titleMedium" style={styles.label}>
          Phone: <Text>{data.phone}</Text>
        </Text>
        <Text variant="titleMedium" style={styles.label}>
          Total spent: <Text>{formatMoney(data.totalSpent)}</Text>
        </Text>
        <Text variant="titleMedium" style={styles.label}>
          Total spent:{' '}
          <Text style={[styles.label, {color: theme.colors.primary}]}>
            {data.totalSpent}
          </Text>
        </Text>
        <Text variant="titleMedium" style={styles.label}>
          Time <Text>{formatDate(data.updatedAt)}</Text>
        </Text>
        <Text variant="titleMedium" style={styles.label}>
          Last Update: <Text>{formatDate(data.updatedAt)}</Text>
        </Text>
      </View>
      <View style={styles.box}>
        <Text
          variant="titleMedium"
          style={[styles.title, {color: theme.colors.primary}]}>
          Transaction History
        </Text>
        <FlatList
          scrollEnabled={false}
          data={data.transactions}
          keyExtractor={({_id}) => _id}
          renderItem={({item}) => (
            <TransactionListItem
              id={item.id}
              services={item.services}
              price={item.price}
              updatedAt={item.updatedAt}
              status={item.status}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: 'bold',
    color: '#000',
  },
  text: {
    fontWeight: 'bold',
  },
});
