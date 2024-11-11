import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeHeaderBar from '../components/HomeHeaderBar';
import Customer from '../screens/Customer';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Transaction from '../screens/Transaction';

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
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
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          header: () => <HomeHeaderBar />,
        }}
      />
      <Tab.Screen name="Transaction" component={Transaction} />
      <Tab.Screen name="Customer" component={Customer} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}
