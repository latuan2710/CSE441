import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Dropdown} from 'react-native-element-dropdown';
import {Text, useTheme} from 'react-native-paper';
import {formatMoney} from '../services/extraService';

export default function ServiceItemSelector({
  serviceId,
  serviceName,
  servicePrice,
  users,
  setTotal,
  total,
  data,
  setData,
}) {
  const theme = useTheme();
  const [localChecked, setLocalChecked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [userId, setUserId] = useState(users[0]._id);

  const handleCheck = checked => {
    setLocalChecked(checked);
    if (!checked) {
      setTotal(pre => pre - servicePrice * quantity);
      setData(data.filter(item => item._id !== serviceId));
    } else {
      setTotal(pre => pre + servicePrice * quantity);
      setData([
        ...data,
        {
          _id: serviceId,
          quantity,
          userId: userId,
        },
      ]);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
    setTotal(total + servicePrice);
    let temp = data;
    temp.map(item => {
      if (item._id === serviceId) {
        item.quantity += 1;
      }
    });
    setData(temp);
  };

  const handleMinus = () => {
    setQuantity(Math.max(1, quantity - 1));
    if (quantity !== 1) {
      setTotal(total - servicePrice);
      let temp = data;
      temp.map(item => {
        if (item._id === serviceId) {
          item.quantity -= 1;
        }
      });
      setData(temp);
    }
  };

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        style={styles.checkbox}
        isChecked={localChecked}
        text={serviceName}
        size={25}
        fillColor="#ffc484"
        textStyle={styles.checkboxText}
        iconStyle={styles.checkboxIcon}
        onPress={handleCheck}
      />
      {localChecked && (
        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={handleMinus}>
                <Text>-</Text>
              </TouchableOpacity>
              <View style={styles.quantityDisplay}>
                <Text>{quantity}</Text>
              </View>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={handlePlus}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
            <Dropdown
              style={styles.dropdown}
              placeholder="Select customer"
              data={users}
              labelField="name"
              onChange={item => setUserId(item._id)}
            />
          </View>
          <Text variant="titleMedium" style={styles.priceLabel}>
            Price:{' '}
            <Text style={[styles.priceValue, {color: theme.colors.primary}]}>
              {formatMoney(quantity * servicePrice)}
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  checkboxText: {
    textDecorationLine: 'none',
  },
  checkboxIcon: {
    borderColor: '#ffc484',
  },
  detailsContainer: {
    marginLeft: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 0.5,
    justifyContent: 'center',
  },
  quantityDisplay: {
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 0.5,
    justifyContent: 'center',
  },
  dropdown: {
    marginVertical: 10,
    height: 50,
    flex: 1,
    padding: 5,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  priceLabel: {
    marginTop: 10,
  },
  priceValue: {
    fontWeight: '900',
  },
});
