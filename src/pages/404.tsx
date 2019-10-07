import * as React from "react";
import Link from "gatsby-link";
import Layout from "../components/Layout";
import { Head } from "../components/Header/head";
import styled from "styled-components";
import { Image } from "../components/Image";
const ComingSoon = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <Head title="404" />
      <ComingSoon>
        <h1>Coming Soon!!!</h1>
        <Image filename="404.png"/>
        <a href="https://absurd.design/">https://absurd.design/</a>
      </ComingSoon>
    </Layout>
  );
};

export default NotFoundPage;
