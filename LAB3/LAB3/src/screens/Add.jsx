/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Alert, Button, ScrollView, StyleSheet} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

export default function Add() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = () => {
    const newProduct = {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      image,
    };

    fetch('https://dummyjson.com/products', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newProduct),
    })
      .then(res => res.json())
      .then(console.log);

    Alert.alert('Add sucessfull');
  };

  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineLarge" style={{color: 'blue'}}>
        Add a Product
      </Text>
      <Text variant="labelLarge">Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Title"
        value={title}
        onChangeText={setTitle}
      />
      <Text variant="labelLarge">Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Description"
        value={description}
        onChangeText={setDescription}
      />
      <Text variant="labelLarge">Price</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter Price"
        value={price}
        onChangeText={setPrice}
      />
      <Text variant="labelLarge">Discount Percentage</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter Discount Percentage"
        value={discountPercentage}
        onChangeText={setDiscountPercentage}
      />
      <Text variant="labelLarge">Rating</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter Rating"
        value={rating}
        onChangeText={setRating}
      />
      <Text variant="labelLarge">Stock</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter Stock"
        value={stock}
        onChangeText={setStock}
      />
      <Text variant="labelLarge">Brand</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Brand"
        value={brand}
        onChangeText={setBrand}
      />
      <Text variant="labelLarge">Category</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Category"
        value={category}
        onChangeText={setCategory}
      />
      <Text variant="labelLarge">Image</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Image URL"
        value={image}
        onChangeText={setImage}
      />
      <Button onPress={handleSubmit} title="SUBMIT" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 10,
  },
});
