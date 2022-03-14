import React from "react";
import styled, { createGlobalStyle } from "styled-components";

/* Global Styled */
const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%
  }
	body {
		padding: 0;
    margin: 0;
  }
  #root {
    height: 100%;
  }
`;

const Header = styled.header`
    width: 100%;
    height: 70px;
`;

const Main = styled.main`
    width: 100%;
    height: calc(100vh - 70px);
`;

const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header>header</Header>
            <Main>{children}</Main>
        </>
    );
};

export default MainLayout;
