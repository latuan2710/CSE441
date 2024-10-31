import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Text} from 'react-native-paper';

export default function DetailListItem({icon, title, subTitle}) {
  return (
    <View style={styles.container}>
      <Icon style={styles.iconSection} source={icon} color="black" size={20} />
      <View style={styles.detailSection}>
        <Text variant="titleLarge" style={styles.title}>
          {title}
        </Text>
        <Text variant="titleMedium" style={styles.subTitle}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 50,
    paddingVertical: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  detailSection: {
    flex: 1,
  },
  title: {fontWeight: 'bold'},
  subTitle: {color: 'blue'},
});
