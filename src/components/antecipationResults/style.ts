import styled from "styled-components";

export const StyledResultsContainer = styled.div`
  width: 38%;
  justify-content: center;
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  .elements__align {
    display: flex;
    flex-direction: column;
    height: 70%;
    width: 70%;
    justify-content: center;
    h2 {
      font-family: Arial, Helvetica, sans-serif, "Source Sans Pro";
      color: var(--blue1);
      font-weight: 700;
      border-bottom: 0.1em solid var(--blue1);
      font-size: 0.9em;
      text-align: left;
      padding-bottom: 5%;
    }
  }
  .results__container {
    font-family: Arial, Helvetica, sans-serif, "Source Sans Pro";
    color: var(--blue1);
    height: 57%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 79%;
  }
`;
