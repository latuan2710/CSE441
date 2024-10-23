import React from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export default function ProductCard({data}) {
  const addClick = () => {
    console.log('add');
  };
  const deleteClick = () => {
    console.log('delete');
  };
  const detailClick = () => {
    console.log('detail');
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.img}
        source={{uri: data.thumbnail}}
      />
      <View style={styles.detailContainer}>
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
        <View style={styles.buttonContainer}>
          <Button title="DETAIL" onPress={detailClick} />
          <Button title="ADD" onPress={addClick} />
          <Button title="DELETE" onPress={deleteClick} />
        </View>
      </View>
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
