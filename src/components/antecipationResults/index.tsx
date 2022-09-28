import Result from "../result";
import { StyledResultsContainer } from "./style";

const AntecipationResults = () => {
  return (
    <StyledResultsContainer>
      <div className="elements__align">
        <h2>VOCÊ RECEBERÁ:</h2>
        <div className="results__container">
          <Result>
            Amanhã: <span>R$ 0,00</span>
          </Result>

          <Result>
            Em 15 dias: <span>R$ 0,00</span>
          </Result>

          <Result>
            Em 30 dias: <span>R$ 0,00</span>
          </Result>

          <Result>
            Em 90 dias: <span>R$ 0,00</span>
          </Result>
        </div>
      </div>
    </StyledResultsContainer>
  );
};

export default AntecipationResults;
