import Result from "../result";
import { StyledResultsContainer } from "./style";

const AntecipationResults = () => {
  return (
    <StyledResultsContainer>
      <div className="results__container">
        <h2>Você Receberá</h2>
        <Result>Amanhã: R$ {}</Result>

        <Result>Em 15 dias: R$ {}</Result>

        <Result>Em 30 dias: R$ {}</Result>

        <Result>Em 90 dias: R$ {}</Result>
      </div>
    </StyledResultsContainer>
  );
};

export default AntecipationResults;
