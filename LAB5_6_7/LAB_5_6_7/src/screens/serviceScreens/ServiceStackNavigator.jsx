import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import AddService from './ServiceAdd';
import DetailService from './ServiceDetail';
import EditService from './ServiceEdit';
import Service from './Service';

const Stack = createStackNavigator();
export default function ServiceStackNavigator() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Service_List"
      screenOptions={{
        headerShown:false,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Service_List"
        component={Service}
        options={{headerLeft: null}}
      />
      <Stack.Screen name="Service_Detail" component={DetailService} />
      <Stack.Screen
        name="Service_Add"
        component={AddService}
        options={{headerShown: true, title: 'Service'}}
      />
      <Stack.Screen
        name="Service_Edit"
        component={EditService}
        options={{headerShown: true, title: 'Service'}}
      />
    </Stack.Navigator>
  );
}
