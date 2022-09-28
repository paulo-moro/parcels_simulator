import styled from "styled-components";

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 62%;
  background-color: var(--white);
  gap: 1.5em;
  height: 100%;
  align-items: center;
  h2 {
    font-family: Arial, Helvetica, sans-serif, "Source Sans Pro";
    color: var(--gray2);
    font-size: 2em;
    font-weight: bold;
  }
  form {
    display: flex;
    flex-direction: column;
    height: 66%;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 80%;
  }
  label {
    display: flex;
    flex-direction: column;
    color: var(--gray2);
    font-size: 1.2em;
    font-family: Arial, Helvetica, sans-serif, "Source Sans Pro";
    width: 66%;
    height: 15%;
    justify-content: space-between;
    span {
      font-family: Arial, Helvetica, sans-serif, "Source Sans Pro";
      color: var(--gray3);
      font-size: 1em;
    }
    input {
      border: var(--gray0) solid 0.1rem;
      font-size: 14px;
      line-height: 2em;
      padding: 0.5rem;
      border-radius: 4px;
    }
  }
`;
