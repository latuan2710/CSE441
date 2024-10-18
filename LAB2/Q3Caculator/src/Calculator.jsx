/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Style';

const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', '/'];
export default function CalculatorScreen() {
  const [displayValue, setDisplayValue] = useState(0);
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberInput = num => {
    if (displayValue === 0) {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = operator => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue(0);
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    if (operator === '+') {
      setDisplayValue(num1 + num2);
    } else if (operator === '-') {
      setDisplayValue(num1 - num2);
    } else if (operator === '*') {
      setDisplayValue(num1 * num2);
    } else if (operator === '/') {
      setDisplayValue(num1 / num2);
    }
    setOperator(null);
    setFirstValue('');
  };

  const handleClear = () => {
    setDisplayValue(0);
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{displayValue}</Text>
      {nums.map((num, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleNumberInput(num)}
          style={styles.numberButton}>
          <Text style={styles.buttonText}>{num}</Text>
        </TouchableOpacity>
      ))}
      {operators.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleOperatorInput(item)}
          style={styles.operatorButton}>
          <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        onPress={handleEqual}
        style={[styles.operatorButton, styles.equalButton]}>
        <Text style={[styles.buttonText, {color: '#fff'}]}>=</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
        <Text style={styles.buttonText}>C</Text>
      </TouchableOpacity>
    </View>
  );
}
