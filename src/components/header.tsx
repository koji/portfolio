import * as React from "react";
import Link from "gatsby-link";
import headerStyles from "./header.module.scss";
import { useSiteMetadata } from "./hooks/siteMetadata";
import styled from "styled-components";
import { NavBar } from "./navbar";
import Grid from "styled-components-grid";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Header: React.FC = () => {
  const { title } = useSiteMetadata();
  return (
    <header className={headerStyles.header}>
      <Grid halign="justify">
        <Grid.Unit size={0.25}>
          <h1>
            {/* ToDo use image */}
            <Link className={headerStyles.title} to="/">
              {title}
              {/* <Image filename={"top_image.png"} /> */}
            </Link>
          </h1>
        </Grid.Unit>
        <Grid.Unit size={0.25}>
          <NavBar />
        </Grid.Unit>
      </Grid>
    </header>
  );
};
