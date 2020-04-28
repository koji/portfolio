import * as React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
// import "../../styles/style.css";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  // max-width: 750px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const StyledContent = styled.div`
  flex-grow: 1;
`;

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <StyledContainer>
      <StyledContent>
        <Header />
        {props.children}
      </StyledContent>
      <Footer />
    </StyledContainer>
  );
};

export default Layout;
