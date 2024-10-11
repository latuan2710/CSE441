import {ScrollView} from 'react-native';
import data from './Data';
import Square from './Square';
import { Key } from 'react';

export default function App() {
  return (
    <ScrollView>
      {data.map((item: Key | null | undefined, index: number) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
  );
}
