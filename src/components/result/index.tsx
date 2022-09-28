import { ReactNode } from "react";
import { StyledSection } from "./style";

interface ResultProps {
  children: ReactNode;
}

const Result = ({ children }: ResultProps) => {
  return <StyledSection>{children}</StyledSection>;
};
export default Result;
