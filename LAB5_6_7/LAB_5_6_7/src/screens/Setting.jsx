import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

export default function Setting({navigation}) {
  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <View style={styles.container}>
        <Button
          mode="contained"
          labelStyle={styles.buttonLabel}
          style={styles.button}
          onPress={handleLogout}>
          Logout
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    borderRadius: 5,
    width: '100%',
    marginTop: 15,
  },
  buttonLabel: {
    // fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
});
