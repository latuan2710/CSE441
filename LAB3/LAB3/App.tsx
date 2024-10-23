/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  BottomNavigation,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Products from './src/screens/Products';
import Add from './src/screens/Add';
import ProductSearch from './src/screens/Product_Search';
import ProductDetail from './src/screens/Product_Detail';

export default function App() {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'ProductList', title: 'Products', focusedIcon: 'folder'},
    {key: 'Product_Add', title: 'Add', focusedIcon: 'folder'},
    {key: 'ProductSearch', title: 'Search', focusedIcon: 'find'},
    {key: 'Product_Detail', title: 'ProductDetail', focusedIcon: 'calender'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    ProductList: Products,
    Product_Add: Add,
    ProductSearch: ProductSearch,
    Product_Detail: ProductDetail,
  });

  return (
    <PaperProvider theme={MD3LightTheme}>
      <SafeAreaView style={{flex: 1}}>
        <BottomNavigation
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </SafeAreaView>
    </PaperProvider>
  );
}
