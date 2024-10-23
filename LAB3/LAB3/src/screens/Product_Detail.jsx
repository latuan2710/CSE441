/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator, Card, Text} from 'react-native-paper';

export default function ProductDetail() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const filePath = 'https://dummyjson.com/products/1';

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(filePath);
      const d = await res.json();
      setData(d);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator animating={true} />
      </View>
    );
  }

  return (
    <View>
      <Text variant="headlineLarge">Product Detail</Text>
      <Card>
        <Card.Cover source={{uri: data.images[0]}} />
        <Card.Content>
          <Text style={styles.title}>Title: {data.title}</Text>
          <Text>Descripton: {data.description}</Text>
          <Text>Price: {data.price}</Text>
          <Text style={styles.discount}>
            Discount: {data.discountPercentage} off
          </Text>
          <Text>Rating: {data.rating}</Text>
          <Text>Stock: {data.stock}</Text>
          <Text>Brand: {data.brand}</Text>
          <Text>Category: {data.category}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  img: {
    flexBasis: '25%',
    height: 100,
  },
  detailContainer: {
    flexBasis: '75%',
    padding: 10,
  },
  title: {
    fontWeight: 900,
  },
  discount: {
    color: 'green',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
