import {NavigationContainer} from '@react-navigation/native';
import {Platform, StatusBar} from 'react-native';
import {DefaultTheme, PaperProvider, configureFonts} from 'react-native-paper';
import StackNavigator from './src/navigators/StackNavigator';
import {MenuProvider} from 'react-native-popup-menu';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#ef506b',
      background: '#fff',
      text: '#fff',
    },
  };

  return (
    <MenuProvider>
      <PaperProvider theme={AppTheme}>
        <NavigationContainer>
          <SafeAreaView
            style={{flex: 1, backgroundColor: AppTheme.colors.background}}>
            <StatusBar
              backgroundColor={AppTheme.colors.primary}
              barStyle="light-content"
            />
            <StackNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </PaperProvider>
    </MenuProvider>
  );
}
