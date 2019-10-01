import * as React from "react";
import Layout from "../components/Layout";
import { Head } from "../components/Header/head";
import styled from "styled-components";
import Grid from "styled-components-grid";

const Separator = styled.hr`
  border-top: 1px solid #ffffff;
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 15px;
  margin-left: 40px;
  margin-top: 15px;
`;

const Description = styled.p`
  margin-left: 20px;
  margin-right: 20px;
`;

const gridStyle: React.CSSProperties = {
  background: "#efefef",
  marginLeft: "5px",
  marginRight: "5px",
};
// ToDo switch from hardcoding to json
export default class Oss extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="OSS" />
        <h1>Open Source Activities</h1>
        <Grid
          halign="center"
          style={{
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          <Grid.Unit size={0.23} style={gridStyle}>
            <Title>
              <a href="">easyGAN</a>
            </Title>
            <Separator />
            <Description>
              easyGAN is a CLI tool which can train images and generates images
              with DCGAN.
            </Description>
          </Grid.Unit>
          <Grid.Unit size={0.23} style={gridStyle}>
            <Title>
              <a href="">ictrainer</a>
            </Title>
            <Separator />
            <Description>
              ictrainer is a CLI tool which offers a couple of functions to
              train own image classifier. It offers image collecting, resize,
              and face detector.
            </Description>
          </Grid.Unit>
          <Grid.Unit size={0.23} style={gridStyle}>
            <Title>
              <a href="">gengitignore</a>
            </Title>
            <Separator />
            <Description>
              gengitignore is a CLI tool to generate .gitignore file
            </Description>
          </Grid.Unit>
          <Grid.Unit size={0.23} style={gridStyle}>
            <Title>
              <a href="">wcartist</a>
            </Title>
            <Separator />
            <Description>
              wcartist is a CLI tool which allows users to create word art with
              one line command.
            </Description>
          </Grid.Unit>
        </Grid>
        <Grid
          halign="center"
          style={{
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          <Grid.Unit size={0.23} style={gridStyle}>
            <Title>Material UI Doc</Title>
            <Separator />
            <Description>
              Have contributed to translate the documents from English into
              Japanaese.
            </Description>
          </Grid.Unit>
          <Grid.Unit size={0.23} style={gridStyle}>
            <Title>
              <a href="">Realsense Doc for Pi</a>
            </Title>
            <Separator />
            <Description>Created a setup guide for Raspberry Pi.</Description>
          </Grid.Unit>
          <Grid.Unit size={0.23} style={gridStyle}></Grid.Unit>
          <Grid.Unit size={0.23} style={gridStyle}></Grid.Unit>
          {/* <Grid.Unit
            size={0.23}
            style={{
              background: "#efefef",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            <h2
              style={{
                marginBottom: "15px",
                marginLeft: "40px",
                marginTop: "15px",
              }}
            ></h2>
            <Separator />
            <p style={{ marginLeft: "20px", marginRight: "20px" }}></p>
          </Grid.Unit>
          <Grid.Unit
            size={0.23}
            style={{
              background: "#efefef",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            <h2
              style={{
                marginBottom: "15px",
                marginLeft: "40px",
                marginTop: "15px",
              }}
            ></h2>
            <Separator />
            <p style={{ marginLeft: "20px", marginRight: "20px" }}></p>
          </Grid.Unit> */}
        </Grid>
      </Layout>
    );
  }
}
