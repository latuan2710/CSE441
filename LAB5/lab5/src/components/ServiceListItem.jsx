import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

export const formatNumber = q => {
  return q.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};

export default function ServiceListItem({name, price, onPress}) {
  return (
    <TouchableOpacity style={styles.service} onPress={onPress}>
      <Text numberOfLines={1} style={styles.serviceName}>
        {name}
      </Text>
      <Text numberOfLines={1} style={styles.servicePrice}>
        {formatNumber(price)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
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
});
