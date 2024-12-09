import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Button, Text } from 'react-native-paper';
import ServiceItemSelector from '../../components/ServiceItemSelector';
import WaitLoading from '../../components/WaitLoading';
import {
  addTransaction,
  getAllCustomer,
  getAllService,
  getAllUser,
} from '../../services/apiServices';
import { formatMoney } from '../../services/extraService';

export default function TransactionAdd({navigation}) {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);

  const [customerId, setCustomerId] = useState('');
  const [servicesResult, setServicesResult] = useState([]);

  const handleSubmit = async () => {
    try {
      await addTransaction(customerId, servicesResult);
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customersData = await getAllCustomer();
        const servicesData = await getAllService();
        const usersData = await getAllUser();
        setCustomers(customersData);
        setServices(servicesData);
        setUsers(usersData);
        setCustomerId(customersData[0]._id);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <WaitLoading />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text variant="titleMedium">Customer *</Text>
      <Dropdown
        style={styles.dropdown}
        placeholder="Select customer"
        data={customers}
        labelField="name"
        onChange={item => {
          setCustomerId(item._id);
        }}
      />

      {services.map((item, index) => (
        <ServiceItemSelector
          key={index}
          serviceId={item._id}
          serviceName={item.name}
          servicePrice={item.price}
          users={users}
          setTotal={setTotal}
          total={total}
          data={servicesResult}
          setData={setServicesResult}
        />
      ))}

      <Button
        style={styles.button}
        labelStyle={{fontSize: 18}}
        contentStyle={[
          styles.buttonContent,
          {
            paddingVertical: 10,
          },
        ]}
        onPress={handleSubmit}
        mode="contained">
        See Summary: ({formatMoney(total)})
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
  },
  dropdown: {
    marginVertical: 10,
    height: 50,
    padding: 5,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  button: {
    borderRadius: 10,
    marginBottom: 50,
  },
  buttonContent: {
    paddingVertical: 10,
  },
});
