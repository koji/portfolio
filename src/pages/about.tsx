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
import { myLinks } from "../components/data/link";
// for font icons end

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
            <h1>about me</h1>

            <Grid>
              <Grid.Unit size={1 / 4}></Grid.Unit>
              <Grid.Unit size={1 / 4}>
                <p>
                  Koji is from Japan and currently he has been working for a
                  company as a software enginner since 2018.
                </p>
                <p>
                  He graduated from New York University(
                  <a href="https://tisch.nyu.edu/itp">
                    Interactive Telecommunications Program
                  </a>
                  ) with master degree in 2018. He was a resident researcher at
                  ITP 2018-2019.
                  <br />
                  Before came to NY, he was a system engineer and mostly worked
                  on a power plant control system.
                </p>
                <p>
                  <b>Area of ​​interest</b>
                  <br />
                  machine learning <b>|</b> deep learning <br /> IoT <b>|</b> AR
                  <b>|</b> Creative Coding
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
                  <FontAwesomeIcon
                    icon={["fab", "dev"]}
                    style={fontAwesomeStyle}
                  />
                </a>
              </Grid.Unit>
              <Grid.Unit size={1 / 6}></Grid.Unit>
            </Grid>
          </Layout>
        );
    }
}
