import {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {getCustomerById, updateCustomer} from '../../services/apiServices';
import WaitLoading from '../../components/WaitLoading';

export default function EditCustomer({navigation, route}) {
  const [id] = useState(route.params.id);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    getCustomerById(id).then(d => {
      setName(d.name);
      setPhone(d.phone);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <WaitLoading />;
  }

  const handleSubmit = async () => {
    const data = await updateCustomer(id, name, phone);
    if (data) {
      navigation.navigate('Customer_List');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Text style={styles.label}>Customer name *</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Input your customer's name"
        />
        <Text style={styles.label}>Phone *</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Input phone number"
        />
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={handleSubmit}>
          Update
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#f3f2f8',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    borderRadius: 10,
  },
  buttonText: {
    padding: 5,
    fontWeight: 'bold',
  },
});
