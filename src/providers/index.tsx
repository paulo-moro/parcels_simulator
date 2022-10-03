import { ReactNode } from "react";
import { RequestProvider } from "./requestData";
import { ResultProvider } from "./results";

export interface Ichildrentype {
  children: ReactNode;
}

const Provider = ({ children }: Ichildrentype) => {
  return (
    <>
      <RequestProvider>
        <ResultProvider>{children}</ResultProvider>
      </RequestProvider>
    </>
  );
};

export default Provider;
