import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {login} from '../services/apiServices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, useTheme} from 'react-native-paper';

export default function LoginScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const [phone, setPhone] = useState('0373007856');
  const [password, setPassword] = useState('123');

  const handleSubmit = async () => {
    try {
      const data = await login(phone, password);

      await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('name', data.name);

      navigation.navigate('TabNavigator');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={{flex:1,backgroundColor:'#fff'}} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={[styles.title, {color: theme.colors.primary}]}>Login</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={[styles.input, {borderColor: theme.colors.primary}]}
          placeholder="Phone"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={[styles.input, {borderColor: theme.colors.primary}]}
          placeholder="Password"
          secureTextEntry
        />
        <Button mode="contained" labelStyle={styles.buttonLabel} style={styles.button} onPress={handleSubmit}>Login</Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 24,
    marginTop: 72,
  },
  input: {
    borderWidth: 1,
    width: '100%',
    marginTop: 12,
    borderRadius: 10,
    paddingLeft: 12,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    marginTop: 15,
  },
  buttonLabel: {
    // fontSize: 16,
    fontWeight: 'bold',
    paddingVertical:5
  },
});
