import styled from "styled-components";

import Form from "../../components/Form";

const RegisterLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Register() {
  return (
    <RegisterLayout>
      <Form />
    </RegisterLayout>
  );
}
