import * as React from "react";
import Link from "gatsby-link";
import { useSiteMetadata } from "../hooks/siteMetadata";
import { NavBar } from "./navbar";
import Grid from "styled-components-grid";
import styled from "styled-components";

const HeaderTag = styled.header`
  padding: 1rem 0 3rem;
`;

const titleStyle: React.CSSProperties = {
  color: "#000000",
  fontSize: "3rem",
  textDecoration: "none",
};

export const Header: React.FC = () => {
  const { title } = useSiteMetadata();
  return (
    <HeaderTag>
      <Grid halign="justify">
        <Grid.Unit size={0.25}>
          <h1>
            {/* ToDo use image */}
            <Link style={titleStyle} to="/">
              {title}
              {/* <Image filename={"top_image.png"} /> */}
            </Link>
          </h1>
        </Grid.Unit>
        <Grid.Unit size={0.25}>
          <NavBar />
        </Grid.Unit>
      </Grid>
    </HeaderTag>
  );
};
