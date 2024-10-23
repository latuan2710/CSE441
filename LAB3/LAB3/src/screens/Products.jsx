import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import ProductCard from '../component/ProductCard';

export default function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const filePath = 'https://dummyjson.com/products';

  useEffect(() => {
    fetch(filePath)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        return res.json();
      })
      .then(d => {
        setData(d.products);
        setLoading(false);
      })
      .catch(err => console.error('Error fetching data: ', err));
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator animating={true} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">Product List</Text>
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
