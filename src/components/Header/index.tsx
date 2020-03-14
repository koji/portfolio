import * as React from "react";
import Link from "gatsby-link";
import { useSiteMetadata } from "../Hooks/siteMetadata";
import { NavBar } from "./navbar";
import styled from "styled-components";
import { Image } from "../Image";

const HeaderTag = styled.header`
  padding: 1rem 0 3rem;
`;

const HeaderWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const HeaderTitle = styled.div`
  grid-column: 2/4;
`;

const NavWrap = styled.div`
  grid-column: 12/13;
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
      <HeaderWrap>
        <HeaderTitle>
          <h1>
            <Link style={titleStyle} to="/">
              <Image filename={"top_image.png"} />
            </Link>
          </h1>
        </HeaderTitle>
        <NavWrap>
          <NavBar />
        </NavWrap>
      </HeaderWrap>
    </HeaderTag>
  );
};
