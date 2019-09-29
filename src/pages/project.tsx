import * as React from "react";
import Layout from "../components/Layout";
import { Head } from "../components/Header/head";
import { projects } from "../components/data/project";
import { ProjectGrid } from "../components/Project/projectgrid";

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
