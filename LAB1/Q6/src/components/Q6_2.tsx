import {useContext, useState} from 'react';
import {View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {ResultDialogContext} from '../context/ResultDialogProvider';

export default function Q6_2() {
  const [number, setNumber] = useState('');
  const context = useContext(ResultDialogContext);

  if (!context) return null;

  const {setShowResult, setResult} = context;

  const handleClick = () => {
    const result =
      parseInt(number.charAt(0)) + parseInt(number.charAt(number.length - 1));

    setNumber('');
    setResult(result + '');
    setShowResult(true);
  };

  return (
    <View style={{marginTop: 50}}>
      <Text variant="titleMedium">
        2. Write a program to sum the first digit and the last digit of a
        number. (Component, State)
      </Text>
      <TextInput
        keyboardType="numeric"
        label="Input Number"
        value={number}
        onChangeText={setNumber}
      />
      <Button mode="outlined" onPress={handleClick}>
        Calculate
      </Button>
    </View>
  );
}
