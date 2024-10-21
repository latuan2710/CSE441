import {useContext, useState} from 'react';
import {View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {ResultDialogContext} from '../context/ResultDialogProvider';

export default function Q6_4() {
  const [num, setNum] = useState('');
  const context = useContext(ResultDialogContext);

  if (!context) return null;

  const {setShowResult, setResult} = context;

  const handleClick = () => {
    let n = parseInt(num);
    const arr: number[] = [];

    while (n != 1) {
      arr.push(n);
      if (n % 2 == 0) {
        n /= 2;
      } else {
        n = 3 * n + 1;
      }
    }

    arr.push(1);

    setResult(arr.toString());
    setShowResult(true);
  };

  return (
    <View style={{marginVertical: 50}}>
      <Text variant="titleMedium">
        {`4. Write a program that displays the Hailstone sequence: With some positive number(n > 0):
    a. If n is an even number, divide by 2.
    b. If n is an odd number, multiply it by 3 and add 1.
    c. Repeat two steps above until n equals 1.`}
      </Text>
      <TextInput
        keyboardType="numeric"
        label="Input Starting  Number"
        value={num}
        onChangeText={setNum}
      />

      <Button mode="outlined" onPress={handleClick}>
        Execute
      </Button>
    </View>
  );
}
