import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {formatDate, formatMoney} from '../services/extraService';

export default function TransactionListItem({
  id,
  services,
  customer,
  price,
  updatedAt,
  status,
  onPress,
}) {
  const theme = useTheme();

  return (
    <TouchableOpacity style={styles.transactionContainer} onPress={onPress}>
      <View style={styles.detailContainer}>
        <Text numberOfLines={1} style={styles.detailId}>
          {id} - {formatDate(updatedAt)}{' '}
          {status === 'cancelled' ? (
            <Text style={styles.cancel}>- {status}</Text>
          ) : (
            ''
          )}
        </Text>
        {services.map(service => (
          <Text key={service._id} numberOfLines={1}>
            - {service.name}
          </Text>
        ))}
        <Text numberOfLines={1} style={styles.customerName}>
          Customer: {customer.name}
        </Text>
      </View>
      <View style={styles.moneyContainer}>
        <Text
          numberOfLines={1}
          style={[
            styles.money,
            {
              color: theme.colors.primary,
            },
          ]}>
          {formatMoney(price)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  transactionContainer: {
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    flexDirection: 'row',
  },
  detailContainer: {flex: 1},
  detailId: {
    fontWeight: 'bold',
  },
  customerName: {
    color: 'gray',
  },
  cancel: {
    fontWeight: 'bold',
    color: 'red',
  },
  moneyContainer: {
    flexBasis: 80,
    justifyContent: 'center',
  },
  money: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
