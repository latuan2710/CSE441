import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import ContactThum from '../components/ContactThum';
import DetailListItem from '../components/DetailListItem';
import {useDispatch} from 'react-redux';
import {addFavorite} from '../Store';

export default function ProfileContact({route}) {
  const {contact} = route.params;
  const dispatch = useDispatch();
  const {avatar, name, email, phone, cell, favorite} = contact;
  const [isFavor, setIsFavor] = useState(favorite);

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThum avatar={avatar} name={name} phone={phone} />
      </View>
      <View style={styles.detaillsSection}>
        <DetailListItem icon="mail" title="Email" subTitle={email} />
        <DetailListItem icon="phone" title="Work" subTitle={phone} />
        <DetailListItem icon="cellphone" title="Personal" subTitle={cell} />
        <View style={{alignItems: 'center'}}>
          <IconButton
            icon={isFavor ? 'star-check' : 'star-check-outline'}
            iconColor="#663399"
            size={20}
            onPress={() => {
              dispatch(addFavorite({phone}));
              setIsFavor(!isFavor);
            }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  detaillsSection: {
    flex: 1,
    backgroundColor: 'white',
  },
});
