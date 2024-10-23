import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import ProductCard from '../component/ProductCard';

export default function ProductSearch() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  let filePath = 'https://dummyjson.com/products';

  const searchProduct = () => {
    if (value.length) {
      filePath = 'https://dummyjson.com/products/search?q=' + value;
    }

    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not 0k');
        }
        return response.json();
      })
      .then(d => setData(d.products))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">Search Products</Text>
      <TextInput placeholder="Key word" value={value} onChangeText={setValue} />
      <Button title="SEARCH" onPress={searchProduct} />
      <FlatList
        data={data}
        renderItem={({item}) => <ProductCard data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
