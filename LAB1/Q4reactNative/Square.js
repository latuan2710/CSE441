import { Alert, Button, Text, View } from 'react-native';
import { styles } from './style';

const ClickOnTheSquare = value => Alert.alert(value);

export default function Square({text}) {
  return (
    <View style={[styles.box, {backgroundColor: '#7ce0f9'}]}>
      <Text>{text}</Text>
      <Button title="Click" onPress={() => ClickOnTheSquare(text)} />
    </View>
  );
}
