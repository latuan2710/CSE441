/* eslint-disable react-native/no-inline-styles */
import 'react-native-get-random-values';
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Contacts from './src/screens/Contact';
import ProfileContact from './src/screens/ProfileContact';
import Farorites from './src/screens/Favorites';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {PaperProvider} from 'react-native-paper';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();

const ContactsScreen = () => (
  <Stack.Navigator
    initialRouteName="Contacts"
    screenOptions={{headerShown: true}}>
    <Stack.Screen
      name="Contacts"
      component={Contacts}
      options={{title: 'Contacts'}}
    />
    <Stack.Screen
      name="ProfileContact"
      component={ProfileContact}
      options={{title: 'Profile Contact'}}
    />
  </Stack.Navigator>
);

const FavoriteScreen = () => (
  <Stack.Navigator
    initialRouteName="Favorites"
    screenOptions={{headerShown: true}}>
    <Stack.Screen
      name="Favorites"
      component={Farorites}
      options={{title: 'Contacts'}}
    />
    <Stack.Screen
      name="ProfileContact"
      component={ProfileContact}
      options={{title: 'Profile Contact'}}
    />
  </Stack.Navigator>
);

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="ContactsScreen"
    barStyle={{backgroundColor: 'blue'}}
    labeled={false}
    activeColor="#D3D3D3"
    inactiveColor="#A9A9A9">
    <Tab.Screen
      name="Contacts"
      component={ContactsScreen}
      options={{tabBarIcon: 'format-list-bulleted'}}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoriteScreen}
      options={{tabBarIcon: 'star-check'}}
    />
  </Tab.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ContactsScreen" component={ContactsScreen} />
      <Drawer.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          {/* <TabNavigator /> */}
          <DrawerNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
