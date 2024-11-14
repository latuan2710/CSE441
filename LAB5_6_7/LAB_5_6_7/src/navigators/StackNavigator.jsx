import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import LoginScreen from '../screens/Login';
import AddCustomer from '../screens/customerScreens/CustomerAdd';
import AddService from '../screens/serviceScreens/ServiceAdd';
import DetailService from '../screens/serviceScreens/ServiceDetail';
import EditService from '../screens/serviceScreens/ServiceEdit';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();
export default function StackNavigator() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />      
    </Stack.Navigator>
  );
}
