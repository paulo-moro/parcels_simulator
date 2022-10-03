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
interface Request {
  mdr: string;
  amount: string;
  installments: string;
}

interface RequestProviderData {
  request: Request;
  setRequest: Dispatch<SetStateAction<Request>>;
}

export const requestContext = createContext<RequestProviderData>(
  {} as RequestProviderData
);

export const RequestProvider = ({ children }: Ichildrentype) => {
  const [request, setRequest] = useState<Request>({} as Request);

  return (
    <requestContext.Provider value={{ request, setRequest }}>
      {children}
    </requestContext.Provider>
  );
};

export const useRequest = () => {
  const context = useContext(requestContext);
  return context;
};
