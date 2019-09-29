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
            >
              <a href="">easyGAN</a>
            </h2>
            <Separator />
            <p style={{ marginLeft: "20px", marginRight: "20px" }}>
              easyGAN is a CLI tool which can train images and generates images
              with DCGAN.
            </p>
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
            >
              <a href="">ictrainer</a>
            </h2>
            <Separator />
            <p style={{ marginLeft: "20px", marginRight: "20px" }}>
              ictrainer is a CLI tool which offers a couple of functions to
              train own image classifier. It offers image collecting, resize,
              and face detector.
            </p>
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
            >
              <a href="">gengitignore</a>
            </h2>
            <Separator />
            <p style={{ marginLeft: "20px", marginRight: "20px" }}>
              gengitignore is a CLI tool to generate .gitignore file
            </p>
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
            >
              <a href="">wcartist</a>
            </h2>
            <Separator />
            <p style={{ marginLeft: "20px", marginRight: "20px" }}>
              wcartist is a CLI tool which allows users to create word art with
              one line command.
            </p>
          </Grid.Unit>
        </Grid>
        <Grid
          halign="center"
          style={{
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
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
            >
              Material UI Doc
            </h2>
            <Separator />
            <p style={{ marginLeft: "20px", marginRight: "20px" }}>
              Have contributed to translate the documents from English into
              Japanaese.
            </p>
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
            >
              <a href="">Realsense Doc for Pi</a>
            </h2>
            <Separator />
            <p style={{ marginLeft: "20px", marginRight: "20px" }}>
              Created a setup guide for Raspberry Pi.
            </p>
          </Grid.Unit>
          <Grid.Unit
            size={0.23}
            style={{
              // background: "#efefef",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          ></Grid.Unit>
          <Grid.Unit
            size={0.23}
            style={{
              // background: "#efefef",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          ></Grid.Unit>
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
