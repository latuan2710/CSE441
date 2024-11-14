import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {updateService} from '../../services/apiServices';

export default function EditService({navigation, route}) {
  const [price, setPrice] = useState(`${route.params.price}`);
  const [name, setName] = useState(route.params.name);
  const [id] = useState(route.params.id);

  const handleSubmit = async () => {
    const data = await updateService(id, name, price);

    if (data) {
      navigation.navigate('Service_List');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Text style={styles.label}>Service name *</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Input a service name"
        />
        <Text style={styles.label}>Price *</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="Input a service name"
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
    backgroundColor: '#f1f1f1',
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
