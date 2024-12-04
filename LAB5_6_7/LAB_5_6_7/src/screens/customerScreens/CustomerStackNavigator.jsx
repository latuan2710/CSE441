import {createStackNavigator} from '@react-navigation/stack';
import Customer from './Customer';
import AddCustomer from './CustomerAdd';
import {useTheme} from 'react-native-paper';
import DetailCustomer from './CustomerDetail';
import EditCustomer from './CustomerEdit';

const Stack = createStackNavigator();
export default function CustomerStackNavigator() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Customer_List"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Customer_List"
        component={Customer}
        options={{headerLeft: null, title: 'Customer'}}
      />
      <Stack.Screen
        name="Customer_Add"
        component={AddCustomer}
        options={{title: 'Add Customer'}}
      />
      <Stack.Screen
        name="Customer_Detail"
        component={DetailCustomer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Customer_Edit"
        component={EditCustomer}
        options={{headerShown: true, title: 'Edit Customer'}}
      />
    </Stack.Navigator>
  );
}
