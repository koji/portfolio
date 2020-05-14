import * as React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const navStyle = {
  marginRight: "30px",
};

const NavUl = styled.ul`
  display: flex;
  list-style-type: none;
  margin-top: 20px;
`;

const StyledLink = styled(props => <Link {...props} />)`
  color: #49ac00;
  font-size: 1rem;
  margin-left: auto;
  margin-right: 1.3rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const activeNavItem = {
  color: "#6200AC",
};

export const NavBar = () => {
  return (
    <nav style={navStyle}>
      <NavUl>
        <li>
          <StyledLink activeClassName={activeNavItem.color} to="/">
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink activeClassName={activeNavItem.color} to="/project">
            Project
          </StyledLink>
        </li>
        <li>
          <StyledLink activeClassName={activeNavItem.color} to="/oss">
            OSS
          </StyledLink>
        </li>
        {/* temporary comment-out */}
        {/* <li>
          <StyledLink
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/blog"
          >
            Blog
          </StyledLink>
        </li> */}
        {/* <li>
          <StyledLink activeClassName={activeNavItem.color} to="/sketch">
            Sketch
          </StyledLink>
        </li> */}
        <li>
          <StyledLink activeClassName={activeNavItem.color} to="/about">
            About
          </StyledLink>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1_kEA--64uxtnpgAVuVvfTo_Gw2MCF0Mf/view?usp=sharing">
            CV
          </a>
        </li>
      </NavUl>
    </nav>
  );
};
