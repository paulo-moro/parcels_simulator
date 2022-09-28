import { StyledForm } from "./style";

const AntecipationForm = () => {
  return (
    <StyledForm>
      <label>
        Informe o valor da venda*
        <input />
      </label>
      <label>
        Em quantas parcelas*
        <input />
        <span>Máximo de 12 parcelas</span>
      </label>
      <label>
        Informe o percentual de MDR*
        <input />
      </label>
    </StyledForm>
  );
};

export default AntecipationForm;
