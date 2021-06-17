import Link from "next/link";
import styled from "styled-components";

const FlexHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  background: transparent;
  & a {
    margin: 20px 30px;
  }
`;

export default function Header() {
  return (
    <FlexHeader>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </FlexHeader>
  );
}
