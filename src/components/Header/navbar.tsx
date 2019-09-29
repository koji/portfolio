import * as React from "react";
import Link from "gatsby-link";
import headerStyles from "./header.module.scss";

export const NavBar = () => {
  return (
    <nav style={{marginRight: "30px"}}>
      <ul className={headerStyles.navList}>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/project"
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/oss"
          >
            OSS
          </Link>
        </li>
        {/* temporary comment-out */}
        {/* <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/blog"
          >
            Blog
          </Link>
        </li> */}
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1_kEA--64uxtnpgAVuVvfTo_Gw2MCF0Mf/view?usp=sharing">
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
};
