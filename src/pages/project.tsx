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
      </Layout>
    );
  }
}
