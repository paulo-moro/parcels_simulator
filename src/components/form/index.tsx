import { StyledFormContainer } from "./style";

const AntecipationForm = () => {
  return (
    <StyledFormContainer>
      <h2>Simule sua Antecipação</h2>
      <form>
        <label className="selling__container">
          Informe o valor da venda*
          <input />
        </label>
        <label className="parcels__container">
          Em quantas parcelas*
          <input />
          <span>Máximo de 12 parcelas</span>
        </label>
        <label className="MDR_container">
          Informe o percentual de MDR*
          <input />
        </label>
      </form>
    </StyledFormContainer>
  );
};

export default AntecipationForm;
