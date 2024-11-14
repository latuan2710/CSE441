import {createStackNavigator} from '@react-navigation/stack';
import Customer from './Customer';
import AddCustomer from './CustomerAdd';
import {useTheme} from 'react-native-paper';

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
    </Stack.Navigator>
  );
}
