import {ScrollView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import ResultDialogProvider from './src/context/ResultDialogProvider';
import ResultDialog from './src/components/ResultDialog';
import Q6_1 from './src/components/Q6_1';
import Q6_2 from './src/components/Q6_2';
import Q6_3 from './src/components/Q6_3';
import Q6_4 from './src/components/Q6_4';

export default function App() {
  return (
    <ResultDialogProvider>
      <PaperProvider>
        <ScrollView style={{padding: 10, backgroundColor: '#fff'}}>
          <Q6_1 />
          <Q6_2 />
          <Q6_3 />
          <Q6_4 />
        </ScrollView>
        <ResultDialog />
      </PaperProvider>
    </ResultDialogProvider>
  );
}
