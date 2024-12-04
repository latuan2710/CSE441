import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

export default function WaitLoading() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <ActivityIndicator />
    </View>
  );
}
