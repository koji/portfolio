import * as React from "react";
import Link from "gatsby-link";
import Layout from "../components/layout";
import { Head } from "../components/head";
import styled from "styled-components";

const ComingSoon = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <Head title="404" />
      <ComingSoon>
        <h1>NOT Existing</h1>
        <h2>Coming Soon!!!</h2>
        <Link to="/">back to top</Link>
      </ComingSoon>
    </Layout>
  );
};

export default NotFoundPage;
