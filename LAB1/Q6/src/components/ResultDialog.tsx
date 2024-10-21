import { useContext } from 'react';
import { Dialog, Portal, Text } from 'react-native-paper';
import { ResultDialogContext } from '../context/ResultDialogProvider';

export default function ResultDialog() {
  const context = useContext(ResultDialogContext);

  if (!context) return null;

  const {setShowResult, showResult, result} = context;

  const hideDialog = () => setShowResult(false);

  return (
    <Portal>
      <Dialog visible={showResult} onDismiss={hideDialog}>
        <Dialog.Content>
          <Text variant="bodyMedium">{`Result: ${result}`}</Text>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}
