import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  ActivityIndicator,
  Appbar,
  Icon,
  Text,
  useTheme
} from 'react-native-paper';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import { deleteService, getServiceById } from '../../services/apiServices';
import {formatDate, formatMoney} from '../../services/extraService';

export default function DetailService({navigation}) {
  const theme = useTheme();
  const {id} = useRoute().params;
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getServiceById(id);
      setService(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <Appbar.Header
        style={{backgroundColor: theme.colors.primary}}
        theme={theme}>
        <Appbar.BackAction color="#fff" onPress={() => navigation.goBack()} />
        <Appbar.Content color="#fff" title="Service Detail" />
        <Menu>
          <MenuTrigger style={{paddingHorizontal: 10}}>
            <Icon source="dots-vertical" color="#fff" size={30} />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption
              onSelect={() => {
                navigation.navigate('Service_Edit', {
                  id,
                  name: service.name,
                  price: service.price,
                });
              }}>
              <Text>
                <Icon size={20} source={'lead-pencil'} />
                Edit
              </Text>
            </MenuOption>
            <MenuOption
              onSelect={async () => {
                await deleteService(id);
                navigation.navigate('Service_List');
              }}>
              <Text style={{color: 'red'}}>
                <Icon size={20} color="red" source={'trash-can'} />
                Delete
              </Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </Appbar.Header>
      <View style={styles.container}>
        <View style={styles.lineContainer}>
          <Text variant="titleSmall">
            Service name: <Text>{service.name}</Text>
          </Text>
        </View>
        <View style={styles.lineContainer}>
          <Text variant="titleSmall">
            Price: <Text>{formatMoney(service.price)}</Text>
          </Text>
        </View>
        <View style={styles.lineContainer}>
          <Text variant="titleSmall">
            Creator: <Text>{service.user.name}</Text>
          </Text>
        </View>
        <View style={styles.lineContainer}>
          <Text variant="titleSmall">
            Time: <Text>{formatDate(service.createdAt)}</Text>
          </Text>
        </View>
        <View style={styles.lineContainer}>
          <Text variant="titleSmall">
            Final update: <Text>{formatDate(service.updatedAt)}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  lineContainer: {
    marginVertical: 5,
  },
});
