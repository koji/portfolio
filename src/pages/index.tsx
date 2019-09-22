import Link from "gatsby-link";
import * as React from "react";
import Layout from "../components/layout";
import { Head } from "../components/head";
import { Skill } from "../components/SkillBlock";
import styled from "styled-components";
import Grid from "styled-components-grid";
import { Image } from "../components/Image";


// const TopWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-gap: 1em;
//   grid-auto-rows: minmax(300px, auto);
// `;

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 1em;
//   grid-auto-rows: minmax(300px, auto);
// `;

// const Cell = styled.div`
//   display: grid;
//   /* grid-template-columns: repeat(3, 1fr); */
//   grid-gap: 1em;
//   background: #eee;
//   /* text-align: center; */
//   /* grid-auto-rows: minmax(100px, auto); */
// `;

const BigText = styled.span`
  /* color: #ffa500; */
  font-size: 50px;
`;

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="Home" />
        <Grid halign="center">
          <Grid.Unit size={1 / 4}></Grid.Unit>
          <Grid.Unit size={1 / 4} style={{ background: "#efefef" }}>
            <h2 style={{ marginTop: "10px", marginLeft: "10px" }}>
              <BigText>🤘</BigText>
              <BigText>Hi,</BigText> I'm Koji
            </h2>
            <p style={{ marginLeft: "20px", marginRight: "20px" }}>
              Currently, I'm working for a company as a software engineer.
              <br />
              Mostly work on frontend(reactjs with typescript) and
              backend(nodejs). Using python to create a tool for myself.
              <br />
              I'm passionate about creative coding(openFrameworks and fragment
              shaders) and making something useful and sometimes useless things.
              <br />
              Right now I'm interested in <strong>
                machine learning
              </strong>, <strong>IoT</strong>, and <strong>AR</strong>. I think
              ARvcould be UI for ml application.
            </p>
          </Grid.Unit>
          <Grid.Unit size={1 / 4}>
            <Image filename="logo.png" />
            {/* <figcaption style={{ textAlign: "center" }}>
            </figcaption> */}
          </Grid.Unit>
          <Grid.Unit size={1 / 4}></Grid.Unit>
        </Grid>
        <Grid
          halign="center"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <Grid.Unit size={1 / 4}></Grid.Unit>
          <Grid.Unit size={1 / 2}>
            {/* <h2 style={{ textAlign: "center" }}>Skills</h2> */}
            <Skill />
          </Grid.Unit>
          <Grid.Unit size={1 / 4}></Grid.Unit>
        </Grid>
      </Layout>
    );
  }
}
