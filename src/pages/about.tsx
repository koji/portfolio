import * as React from "react";
import Layout from "../components/Layout";
import { Head } from "../components/Header/head";
import { Image } from "../components/Image";
import Grid from "styled-components-grid";
// for font icons start
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { myLinks } from "../data/link";
import styled from "styled-components";
// for font icons end

const ToolTag = styled.span`
  background: #eee;
  border-radius: 3px 0 0 3px;
  color: #999;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;

  ::before {
    background: #fff;
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: "";
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px;
  }

  ::after {
    background: #fff;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #eee;
    border-top: 13px solid transparent;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
  }

  :hover {
    background-color: #d76f47;
    color: white;
  }

  :hover::after {
    border-left-color: #d76f47;
  }
`;

const h3Style: React.CSSProperties = {
  fontSize: "50px",
  marginBottom: "50px",
  marginTop: "25px",
  textAlign: "center",
};

const fontAwesomeStyle: React.CSSProperties = {
  fontSize: "150px",
};

export default class About extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="about" />
        <h1>About me</h1>

        <Grid>
          <Grid.Unit size={1 / 4}></Grid.Unit>
          <Grid.Unit size={1 / 4}>
            <p>
              Koji is from Japan and currently he has been working for a company
              as a software enginner since 2018.
            </p>
            <p>
              He graduated from New York University(
              <a href="https://tisch.nyu.edu/itp">
                Interactive Telecommunications Program
              </a>
              ) with master degree in 2018. He was a resident researcher at ITP
              2018-2019.
              <br />
              Before came to NY, he was a system engineer and mostly worked on a
              power plant control system.
            </p>
            <p>
              <b>Area of ​​interest</b>
              <br />
              <ToolTag>machine learning</ToolTag>
              <ToolTag>IoT</ToolTag>
              <ToolTag>AR</ToolTag>
              <ToolTag>CreativeCoding</ToolTag>
            </p>
          </Grid.Unit>
          <Grid.Unit size={1 / 4}>
            <Image filename="me.jpg" />
          </Grid.Unit>
          <Grid.Unit size={1 / 4}></Grid.Unit>
        </Grid>
        {/* social media links */}
        <h3 style={h3Style}>contact</h3>
        <Grid halign="center">
          <Grid.Unit size={1 / 6}></Grid.Unit>
          <Grid.Unit size={1 / 6}>
            <a href={myLinks.github}>
              <FontAwesomeIcon
                icon={["fab", "github"]}
                style={fontAwesomeStyle}
              />
            </a>
          </Grid.Unit>
          <Grid.Unit size={1 / 6}>
            <a href={myLinks.linkedin}>
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                style={fontAwesomeStyle}
              />
            </a>
          </Grid.Unit>
          <Grid.Unit size={1 / 6}>
            <a href={myLinks.instagram}>
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                style={fontAwesomeStyle}
              />
            </a>
          </Grid.Unit>
          <Grid.Unit size={1 / 6}>
            <a href={myLinks.devto}>
              <FontAwesomeIcon icon={["fab", "dev"]} style={fontAwesomeStyle} />
            </a>
          </Grid.Unit>
          <Grid.Unit size={1 / 6}>
            <a href={myLinks.twitter}>
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                style={fontAwesomeStyle}
              />
            </a>
          </Grid.Unit>
        </Grid>
      </Layout>
    );
  }
}
