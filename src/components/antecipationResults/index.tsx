import { useEffect } from "react";
import { useResult } from "../../providers/results";

import Result from "../result";
import { currencyMask } from "./masks";
import { StyledResultsContainer } from "./style";

const AntecipationResults = () => {
  const { results } = useResult();

  return (
    <StyledResultsContainer>
      <div className="elements__align">
        <h2>VOCÊ RECEBERÁ:</h2>
        <div className="results__container">
          <Result>
            Amanhã:
            <span>R$ {currencyMask(results[1].toString())}</span>
          </Result>

          <Result>
            Em 15 dias:
            <span>R$ {currencyMask(results[15].toString())}</span>
          </Result>

          <Result>
            Em 30 dias:
            <span>R$ {currencyMask(results[30].toString())}</span>
          </Result>

          <Result>
            Em 90 dias: <span> R$ {currencyMask(results[90].toString())}</span>
          </Result>
        </div>
      </div>
    </StyledResultsContainer>
  );
};

export default AntecipationResults;
