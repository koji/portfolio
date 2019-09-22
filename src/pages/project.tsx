import * as React from "react";
import Link from "gatsby-link";
import Layout from "../components/layout";
import { Head } from "../components/head";
import { projects } from "../components/data/project";
import { ProjectGrid } from "../components/projectgrid";

export default class Project extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="Project" />
        <h1>Project</h1>
        <ProjectGrid projectData={projects} />
        {/* <p>I currently work full-time software engineer for a company.</p>
        <h3>contact</h3>
        <p>linkedin</p>
        <p>
          <a href="https://github.com/koji/" target="_blank">
            Github
          </a>
        </p>
        <p>instagram</p>
        <p>email</p>
        <Link to="/">Go back to the homepage</Link> */}
      </Layout>
    );
  }
}
