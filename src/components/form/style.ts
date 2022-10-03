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
    font-size: 1.5em;
    font-weight: bold;
  }
  form {
    display: flex;
    flex-direction: column;
    height: 75%;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 80%;
    button {
      padding: 0.5rem 1rem;
      color: var(--black);
      background-color: var(--gray1);
      border-color: var(--black);
      border: 0.1em solid;
      align-self: center;
      border-radius: 0.4em;
    }
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
      font-size: 0.5em;
      height: 100%;
    }
    .error--span {
      color: red;
      font-size: 0.3em;
    }
    input {
      border: var(--gray0) solid 0.1rem;
      font-size: 0.8em;
      padding: 0.2rem 0.5rem;
      flex: 1;
      width: 100%;
    }
    .input--container {
      width: fit-content;
      display: flex;
      align-items: center;
      border: 0.1em solid var(--gray3);
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--black);
        background-color: var(--gray1);
        padding: 0.5rem 1rem;
      }
    }
  }
`;
