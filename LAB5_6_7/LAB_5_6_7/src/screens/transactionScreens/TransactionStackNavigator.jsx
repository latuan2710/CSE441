import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import Transaction from './Transaction';
import TransactionDetail from './TransactionDetail';
import TransactionAdd from './TransactionAdd';

const Stack = createStackNavigator();
export default function TransactionStackNavigator() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Transaction_List"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Transaction_List"
        component={Transaction}
        options={{headerLeft: null, title: 'Transaction'}}
      />
      <Stack.Screen
        name="Transaction_Add"
        component={TransactionAdd}
        options={{ title: 'Add Transaction'}}
      />
      <Stack.Screen
        name="Transaction_Detail"
        component={TransactionDetail}
        options={{title: 'Transaction Detail', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
