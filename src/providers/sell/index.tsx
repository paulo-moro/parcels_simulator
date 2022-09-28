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

interface SellProviderData {
  sell: string;
  setSell: Dispatch<SetStateAction<string>>;
}

export const sellContext = createContext<SellProviderData>(
  {} as SellProviderData
);

export const SellProvider = ({ children }: Ichildrentype) => {
  const [sell, setSell] = useState<string>("");

  return (
    <sellContext.Provider value={{ sell, setSell }}>
      {children}
    </sellContext.Provider>
  );
};

export const useSell = () => {
  const context = useContext(sellContext);
  return context;
};
