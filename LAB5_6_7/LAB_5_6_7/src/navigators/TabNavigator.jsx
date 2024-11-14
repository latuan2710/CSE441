import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Setting from '../screens/Setting';
import CustomerStackNavigator from '../screens/customerScreens/CustomerStackNavigator';
import ServiceStackNavigator from '../screens/serviceScreens/ServiceStackNavigator';
import TransactionStackNavigator from '../screens/transactionScreens/TransactionStackNavigator';

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown:false,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Transaction') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'Customer') {
            iconName = focused ? 'people-sharp' : 'people-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={ServiceStackNavigator}/>
      <Tab.Screen name="Transaction" component={TransactionStackNavigator} />
      <Tab.Screen name="Customer" component={CustomerStackNavigator} />
      <Tab.Screen name="Setting" component={Setting} options={{headerShown:true}}/>
    </Tab.Navigator>
  );
}
