import * as React from "react";
import { useSiteMetadata } from "../hooks/siteMetadata";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #111111;
  color: #ffffff;
  text-align: center;
  width: 100%;
  margin-top: 3rem;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-gap: 1em; */
  grid-auto-rows: minmax(200px, auto);
`;

const FooterGrid = styled.div`
  grid-column: 1/2;
  /* min-height: 12em; */
`;

export const Footer: React.FC = () => {
  // const { author } = useSiteMetadata();
  return (
    <FooterWrapper>
      <GridWrapper>
        <FooterGrid>
          <p style={{ textAlign: "left", marginLeft: "20px" }}>
            🤘 Hi, I'm Koji, a software engineer
            <br />I like to do creative coding and
            <br />
            explore new technology.
            <br />
            I'm in NYC!
          </p>
        </FooterGrid>
      </GridWrapper>
    </FooterWrapper>
  );
};
export default Footer;
