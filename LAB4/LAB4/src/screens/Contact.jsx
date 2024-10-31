import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ContactListItem from '../components/ContactListItem';
import {fetchContactsSuccess, mapContacts} from '../Store';

const fetchContacts = async () => {
  const res = await fetch('https://randomuser.me/api/?results=100');
  const data = await res.json();
  return data.results.map(mapContacts);
};

export default function Contacts() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {contacts} = useSelector(state => state);

  useEffect(() => {
    console.log('render');

    fetchContacts()
      .then(data => dispatch(fetchContactsSuccess(data)))
      .catch(e => console.error(e));
  }, [dispatch]);

  const renderContacts = ({item}) => (
    <ContactListItem
      name={item.name}
      avatar={item.avatar}
      phone={item.phone}
      onPress={() => {
        navigation.navigate('ProfileContact', {contact: item});
      }}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        maxToRenderPerBatch={10}
        data={contacts}
        keyExtractor={({phone}) => phone}
        renderItem={renderContacts}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
