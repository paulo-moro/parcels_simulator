import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export interface Ichildrentype {
  children: ReactNode;
}

interface Iresults {
  1: number;
  15: number;
  30: number;
  90: number;
}

interface ResultsProviderData {
  results: Iresults;
  setResults: Dispatch<SetStateAction<Iresults>>;
}

export const resultContext = createContext<ResultsProviderData>(
  {} as ResultsProviderData
);

export const ResultProvider = ({ children }: Ichildrentype) => {
  const [results, setResults] = useState<Iresults>({
    "1": 0,
    "15": 0,
    "30": 0,
    "90": 0,
  });

  return (
    <resultContext.Provider value={{ results, setResults }}>
      {children}
    </resultContext.Provider>
  );
};

export const useResult = () => {
  const context = useContext(resultContext);
  return context;
};
