import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import {Appbar, useTheme} from 'react-native-paper';

export default function HomeHeaderBar() {
  const theme = useTheme();
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchName = async () => {
      const storedName = await AsyncStorage.getItem('name');
      if (storedName) {
        setName(storedName);
      }
    };
    fetchName();
  }, []);

  return (
    <Appbar.Header style={{backgroundColor: theme.colors.primary}}>
      <Appbar.Content
        title={name}
        color="#fff"
        titleStyle={{fontWeight: 'bold'}}
      />
      <Appbar.Action
        icon="account-circle"
        color="#fff"
        size={30}
        onPress={() => console.log('ok')}
      />
    </Appbar.Header>
  );
}
