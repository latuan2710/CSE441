import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ActivityIndicator,
  Appbar,
  IconButton,
  Menu,
  Text,
  useTheme,
} from 'react-native-paper';
import {formatNumber} from '../components/ServiceListItem';
import {deleteService, getServiceById} from '../services/apiServices';

export default function ServiceDetailScreen({navigation}) {
  const theme = useTheme();
  const {id} = useRoute().params;
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

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
    <View>
      <Appbar.Header
        style={{backgroundColor: theme.colors.primary}}
        theme={theme}>
        <Appbar.BackAction color="#fff" onPress={() => navigation.goBack()} />
        <Appbar.Content color="#fff" title="Service Detail" />
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <IconButton
              icon="dots-vertical"
              iconColor="#fff"
              size={30}
              onPress={() => setVisible(true)}
            />
          }>
          <Menu.Item
            onPress={() => {
              setVisible(false);
              navigation.navigate('Service_Edit', {
                id,
                name: service.name,
                price: service.price,
              });
            }}
            title="Edit"
            leadingIcon={'lead-pencil'}
          />
          <Menu.Item
            onPress={async () => {
              await deleteService(id);
              setVisible(false);
              navigation.navigate('TabNavigator');
            }}
            title="Delete"
            leadingIcon={'trash-can'}
          />
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
            Price: <Text>{formatNumber(service.price)}</Text>
          </Text>
        </View>
        <View style={styles.lineContainer}>
          <Text variant="titleSmall">
            Creator: <Text>{service.user.name}</Text>
          </Text>
        </View>
        <View style={styles.lineContainer}>
          <Text variant="titleSmall">
            Time: <Text>{service.createdAt}</Text>
          </Text>
        </View>
        <View style={styles.lineContainer}>
          <Text variant="titleSmall">
            Final update: <Text>{service.updatedAt}</Text>
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
