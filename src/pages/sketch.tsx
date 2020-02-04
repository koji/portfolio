import * as React from "react";
// import Link from "gatsby-link";
import Layout from "../components/Layout";
import { Head } from "../components/Header/head";
import styled from "styled-components";

const VFXWrap = styled.div`
  height: 200px;
`;

export default class Sketch extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="Sketch" />
        <h1>Sketch</h1>
      </Layout>
    );
  }
}
