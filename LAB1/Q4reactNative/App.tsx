import { ScrollView } from 'react-native';
import data from './Data';
import Square from './Square';

export default function App({}) {
  return (
    <ScrollView>
      {data.map((item: any, index: number) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
  );
}
