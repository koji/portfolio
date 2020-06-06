import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaInstagram as Insta,
  FaEnvelope as Mail,
} from "react-icons/fa"
import styled from "styled-components"

const FetchItemText = styled.span`
  color: #e1f4f3;
`;
const FetchText = styled.span`
  color: #49AC00;
`;

const info = () => {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#218dff" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Koji Kanao.
      </div>
      <div className="h1 code mt-4 mb-3">await fetch('koji', {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        <FetchItemText>title: </FetchItemText><FetchText>sofware engineer,</FetchText><br />
        <FetchItemText>tech stack: </FetchItemText><FetchText> js/ts | python | oF | arduino | linux | react | git | raspberry pi | webpack | rollupjs | Circle CI</FetchText> <br />
        <FetchItemText>passion: </FetchItemText><FetchText>creative coding | build things | learn things</FetchText><br/>
        <FetchItemText>interest: </FetchItemText><FetchText>AR | ML</FetchText><br />
        <FetchItemText>education: </FetchItemText><FetchText>Graduated from NYU-ITP</FetchText>
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/koji_kanao">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://www.instagram.com/koji_kanao/">
          <Insta />
        </a>
        <a className="mr-5 icon" href="https://github.com/koji">
          <Github />
        </a>
        <a className="mr-5 icon" href="mailto://koji.kanao@nyu.edu">
          <Mail />
        </a>
      </div>
    </div>
  )
}


export default info;