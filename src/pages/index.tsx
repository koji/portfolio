import * as React from "react";
import Layout from "../components/Layout";
import { Head } from "../components/Header/head";
import { Skill } from "../components/Skillblock";
import styled from "styled-components";
import Grid from "styled-components-grid";
import { Image } from "../components/Image";

const BigText = styled.span`
  /* color: #ffa500; */
  font-size: 50px;
`;

const h2Style: React.CSSProperties = {
  marginLeft: "10px",
  marginTop: "10px",
};

const pStyle: React.CSSProperties = {
  marginLeft: "20px",
  marginRight: "20px",
};

const gridStyle: React.CSSProperties = {
  // marginBottom: "50px",
  marginTop: "30px",
};

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="Home" />
        <Grid halign="center">
          <Grid.Unit size={1 / 4}></Grid.Unit>
          <Grid.Unit size={1 / 4} style={{ background: "#efefef" }}>
            <h2 style={h2Style}>
              <BigText> 👋 </BigText>
              <BigText>Hi,</BigText> I'm Koji
            </h2>
            <p style={pStyle}>
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
              AR could be UI for ml application.
            </p>
          </Grid.Unit>
          <Grid.Unit size={1 / 4}>
            <Image filename="logo.png" />
          </Grid.Unit>
          <Grid.Unit size={1 / 4}></Grid.Unit>
        </Grid>
        <Grid halign="center" style={gridStyle}>
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
