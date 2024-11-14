import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ActivityIndicator,
  Appbar,
  Divider,
  Icon,
  Text,
  useTheme,
} from 'react-native-paper';
import {getTransactionById} from '../../services/apiServices';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {formatDate, formatMoney} from '../../services/extraService';

export default function TransactionDetail({navigation, route}) {
  const theme = useTheme();
  const {id} = route.params;
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTransactionById(id);
      setTransaction(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View>
      <Appbar.Header style={{backgroundColor: theme.colors.primary}}>
        <Appbar.BackAction color="#fff" onPress={() => navigation.goBack()} />
        <Appbar.Content
          color="#fff"
          title="Transaction Detail"
          titleStyle={{fontWeight: 'bold'}}
        />
        <Menu>
          <MenuTrigger style={{paddingHorizontal: 10}}>
            <Icon source="dots-vertical" color="#fff" size={30} />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => {}}>
              <Text>
                <Icon size={20} source={'lead-pencil'} />
                Edit
              </Text>
            </MenuOption>
            <MenuOption onSelect={async () => {}}>
              <Text style={{color: 'red'}}>
                <Icon size={20} color="red" source={'trash-can'} />
                Delete
              </Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </Appbar.Header>
      <View style={styles.box}>
        <View>
          <Text
            variant="titleMedium"
            style={[styles.title, {color: theme.colors.primary}]}>
            General information
          </Text>
          <View style={styles.detailContainer}>
            <Text variant="titleMedium" style={styles.label}>
              Transaction code
            </Text>
            <Text variant="titleMedium" style={styles.text}>
              {transaction.id}
            </Text>
          </View>
          <View style={styles.detailContainer}>
            <Text variant="titleMedium" style={styles.label}>
              Customer
            </Text>
            <Text variant="titleMedium" style={styles.text}>
              {transaction.customer.name} - {transaction.customer.phone}
            </Text>
          </View>
          <View style={styles.detailContainer}>
            <Text variant="titleMedium" style={styles.label}>
              Creation Time
            </Text>
            <Text variant="titleMedium" style={styles.text}>
              {formatDate(transaction.createdAt)}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <View>
          <Text
            variant="titleMedium"
            style={[styles.title, {color: theme.colors.primary}]}>
            Services list
          </Text>
          {transaction.services.map(service => (
            <View key={service._id} style={styles.detailContainer}>
              <Text variant="titleMedium" style={styles.label}>
                {service.name}
              </Text>
              <Text variant="titleMedium" style={styles.label}>
                x{service.quantity}
              </Text>
              <Text variant="titleMedium" style={styles.text}>
                {formatMoney(service.price)}
              </Text>
            </View>
          ))}
          <Divider style={{marginVertical: 10}} />
          <View style={styles.detailContainer}>
            <Text variant="titleMedium" style={styles.label}>
              Total
            </Text>
            <Text variant="titleMedium" style={styles.text}>
              {formatMoney(transaction.priceBeforePromotion)}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <View>
          <Text
            variant="titleMedium"
            style={[styles.title, {color: theme.colors.primary}]}>
            Cost
          </Text>
          <View style={styles.detailContainer}>
            <Text variant="titleMedium" style={styles.label}>
              Amount of money
            </Text>
            <Text variant="titleMedium" style={styles.text}>
              {formatMoney(transaction.priceBeforePromotion)}
            </Text>
          </View>
          <View style={styles.detailContainer}>
            <Text variant="titleMedium" style={styles.label}>
              Discount
            </Text>
            <Text variant="titleMedium" style={styles.text}>
              -
              {formatMoney(
                transaction.priceBeforePromotion - transaction.price,
              )}
            </Text>
          </View>
          <Divider style={{marginVertical: 10}} />
          <View style={styles.detailContainer}>
            <Text variant="titleMedium" style={styles.text}>
              Total payment
            </Text>
            <Text
              variant="titleMedium"
              style={[styles.text, {color: theme.colors.primary}]}>
              {formatMoney(transaction.price)}
            </Text>
          </View>
        </View>
      </View>
    </View>
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
    color: 'gray',
  },
  text: {
    fontWeight: 'bold',
  },
});
