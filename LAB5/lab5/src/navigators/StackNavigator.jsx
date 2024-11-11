import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import AddService from '../screens/AddService';
import ServiceDetailScreen from '../screens/Detail';
import LoginScreen from '../screens/Login';
import TabNavigator from './TabNavigator';
import EditService from '../screens/EditService';

const Stack = createStackNavigator();
export default function StackNavigator() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Service_Detail" component={ServiceDetailScreen} />
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
