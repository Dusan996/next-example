import styled from "styled-components";

export const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.form`
  width: 70%;
  margin: auto;
  & input {
    border: 1px solid #d3d3d3;
    width: 80%;
    margin: 0 auto 15px auto;
    display: block;
    padding: 5px;
    border-radius: 5px;
    color: black;
  }
  ,
  & label {
    width: 80%;
    margin: 2px auto;
    display: block;
  }
`;
