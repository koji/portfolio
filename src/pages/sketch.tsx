import * as React from "react";
import Link from "gatsby-link";
import Layout from "../components/Layout";
import { Head } from "../components/Header/head";
export default class Sketch extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="Sketch" />
        <h1>Sketch</h1>
        <h3>ToDo grid component</h3>
        <p>I currently work full-time software engineer for a company.</p>
        <h3>contact</h3>
        <p>linkedin</p>
        <p>
          <a
            href="https://github.com/koji/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
        <p>instagram</p>
        <p>email</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    );
  }
}
