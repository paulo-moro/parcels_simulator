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

interface ParcelsProviderData {
  parcels: number;
  setParcels: Dispatch<SetStateAction<number>>;
}

export const parcelsContext = createContext<ParcelsProviderData>(
  {} as ParcelsProviderData
);

export const ParcelsProvider = ({ children }: Ichildrentype) => {
  const [parcels, setParcels] = useState<number>(0);

  return (
    <parcelsContext.Provider value={{ parcels, setParcels }}>
      {children}
    </parcelsContext.Provider>
  );
};

export const useParcels = () => {
  const context = useContext(parcelsContext);
  return context;
};
