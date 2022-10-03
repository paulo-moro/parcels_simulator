import AntecipationResults from "../../components/antecipationResults";
import AntecipationForm from "../../components/form";
import { StyledMain } from "./style";

const Antecipation = () => {
  return (
    <StyledMain>
      <div className="antecipation__container">
        <AntecipationForm />
        <AntecipationResults />
      </div>
    </StyledMain>
  );
};

export default Antecipation;
