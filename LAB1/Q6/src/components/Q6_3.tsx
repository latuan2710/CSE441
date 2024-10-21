import {useContext, useState} from 'react';
import {View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {ResultDialogContext} from '../context/ResultDialogProvider';

export default function Q6_3() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');

  const context = useContext(ResultDialogContext);

  if (!context) return null;

  const {setShowResult, setResult} = context;

  const handleClick = () => {
    const arr = [parseInt(num1), parseInt(num2), parseInt(num3)];
    arr.sort((n1, n2) => n1 - n2);
    setResult(arr[0] + '');
    setShowResult(true);
  };

  return (
    <View style={{marginTop: 50}}>
      <Text variant="titleMedium">
        3. Write a program to find the minimum between three numbers. (Component
        & state)
      </Text>
      <TextInput
        keyboardType="numeric"
        label="Input Number 1"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        keyboardType="numeric"
        label="Input Number 2"
        value={num2}
        onChangeText={setNum2}
      />
      <TextInput
        keyboardType="numeric"
        label="Input Number 3"
        value={num3}
        onChangeText={setNum3}
      />
      <Button mode="outlined" onPress={handleClick}>
        Find Minimum
      </Button>
    </View>
  );
}
