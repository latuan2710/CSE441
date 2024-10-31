import React from 'react';
import {useSelector} from 'react-redux';
import ContactThum from '../components/ContactThum';
import {FlatList, StyleSheet, View} from 'react-native';

export default function Farorites({navigation}) {
  const {contacts} = useSelector(state => state);

  const renderFavorThumbnail = ({item}) => (
    <ContactThum
      avatar={item.avatar}
      onPress={() => navigation.navigate('ProfileContact', {contact: item})}
    />
  );

  const favorites = contacts.filter(contact => contact.favorite);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={({phone}) => phone}
        numColumns={3}
        contentContainerStyle={styles.list}
        renderItem={renderFavorThumbnail}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    alignItems: 'center',
  },
});
