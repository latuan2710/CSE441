import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon, Text, useTheme} from 'react-native-paper';
import {formatMoney} from '../services/extraService';

export default function CustomerListItem({
  name,
  phone,
  totalMoney,
  loyalty,
  onpress,
}) {
  const theme = useTheme();

  return (
    <TouchableOpacity style={styles.customerContainer} onPress={onpress}>
      <View style={{flex: 1}}>
        <Text style={styles.customerLabel}>
          Customer: <Text>{name}</Text>
        </Text>
        <Text style={styles.customerLabel}>
          Phone: <Text>{phone}</Text>
        </Text>
        <Text style={styles.customerLabel}>
          Total Money:{' '}
          <Text style={{fontWeight: 'bold', color: theme.colors.primary}}>
            {formatMoney(totalMoney)}
          </Text>
        </Text>
      </View>
      <View
        style={{
          flexBasis: 50,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Icon source={'crown'} size={20} color={theme.colors.primary} />
        <Text
          style={{
            color: theme.colors.primary,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {loyalty}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customerContainer: {
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    flexDirection: 'row',
  },
  customerLabel: {
    fontWeight: 'bold',
    color: 'gray',
  },
});
