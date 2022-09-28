import { ReactNode } from "react";
import { MDRProvider } from "./MDR";
import { ParcelsProvider } from "./parcels";
import { SellProvider } from "./sell";

export interface Ichildrentype {
  children: ReactNode;
}

const Provider = ({ children }: Ichildrentype) => {
  return (
    <>
      <MDRProvider>
        <ParcelsProvider>
          <SellProvider>{children}</SellProvider>
        </ParcelsProvider>
      </MDRProvider>
    </>
  );
};

export default Provider;
