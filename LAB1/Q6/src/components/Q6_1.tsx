import {useContext, useState} from 'react';
import {View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {ResultDialogContext} from '../context/ResultDialogProvider';

export default function Q6_1() {
  const [fullname, setFullname] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');

  const context = useContext(ResultDialogContext);

  if (!context) return null;

  const {setShowResult, setResult} = context;

  const handleClick = () => {
    setResult(
      `{\nFull Name: ${fullname}\n Age: ${age}\n Occupation: ${occupation}\n}`,
    );
    setShowResult(true);
  };

  return (
    <View>
      <Text variant="titleMedium">
        1. Build an employee information entry screen with: full name, age,
        occupation specialized in training and an update button (display success
        message) (Component, Props).
      </Text>
      <TextInput
        label="Input Your Full Name"
        value={fullname}
        onChangeText={setFullname}
      />
      <TextInput
        label="Input Your Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        label="Input Your Occupation"
        value={occupation}
        onChangeText={setOccupation}
      />
      <Button mode="outlined" onPress={handleClick}>
        Update
      </Button>
    </View>
  );
}
