import React, {Dispatch, SetStateAction, createContext, useState} from 'react';

interface Prop {
  children: React.ReactNode;
}

interface ResultDialogContextProps {
  showResult: boolean;
  setShowResult: Dispatch<SetStateAction<boolean>>;
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
}

export const ResultDialogContext =
  createContext<ResultDialogContextProps | null>(null);

export default function ResultDialogProvider({children}: Prop) {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState('');

  return (
    <ResultDialogContext.Provider
      value={{showResult, setShowResult, result, setResult}}>
      {children}
    </ResultDialogContext.Provider>
  );
}
