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

interface MDRProviderData {
  mdr: number;
  setMDR: Dispatch<SetStateAction<number>>;
}

export const mdrContext = createContext<MDRProviderData>({} as MDRProviderData);

export const MDRProvider = ({ children }: Ichildrentype) => {
  const [mdr, setMDR] = useState<number>(0);

  return (
    <mdrContext.Provider value={{ mdr, setMDR }}>
      {children}
    </mdrContext.Provider>
  );
};

export const useMDR = () => {
  const context = useContext(mdrContext);
  return context;
};
