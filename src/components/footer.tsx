import * as React from "react";
import { useSiteMetadata } from "./hooks/siteMetadata";
import styled from "styled-components";
import Grid from "styled-components-grid";

const FooterWrapper = styled.footer`
  background: #111111;
  color: #ffffff;
  text-align: center;
  width: 100%;
  margin-top: 3rem;
`;

const Text = styled.p`
  margin: 10px 0
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  grid-auto-rows: minmax(100px, auto);
`;

const Cell = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-gap: 1em; */
  /* background: #eee; */
  /* text-align: center; */
  /* grid-auto-rows: minmax(100px, auto); */
  grid-auto-columns: minmax(300px, auto);
`;

export const Footer: React.FC = () => {
  const {author} = useSiteMetadata();
  return (
    <FooterWrapper>
      <Grid valign="center" style={{ minHeight: "12em" }}>
        <Grid.Unit size={0.25}>
          <p style={{ textAlign: "left", marginLeft: "20px" }}>
            🤘 Hi, I'm Koji, a software engineer<br/>I like to do creative coding and<br/>
            explore new technology.<br/>
            I'm in NYC!
          </p>
        </Grid.Unit>
        <Grid.Unit size={0.75}></Grid.Unit>
      </Grid>
    </FooterWrapper>
  );
};
export default Footer;
