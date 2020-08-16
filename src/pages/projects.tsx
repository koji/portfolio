/* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import '../style.css';
import Appbar from '@components/Appbar';
import { graphql } from 'gatsby';
import RCard from '@components/RCard';
import { Helmet } from 'react-helmet';
import ScrollBar from '@components/Scrollbar';

const Projects: React.FC = ({ data }) => {
  const projectList = data.allProjectsYaml.edges;

  return (
    <div className='container-fluid'>
      <ScrollBar />
      <Appbar />
      <Helmet htmlAttributes={{ lang: 'en', amp: undefined }} defer={false}>
        <meta charSet='utf-8' name='description' content='This is a project page' />
        <meta charSet='utf-8' name='keywords' content='project, koji project, itp project, art project' />
        <title>Projects</title>
      </Helmet>
      <div className='row'>
        {projectList.map(({ node }) => (
          <RCard cardTitle={node.title} cardSubtitle={node.subtitle} link={node.link} key={node.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

export const query = graphql`
  {
    allProjectsYaml {
      edges {
        node {
          title
          subtitle
          link
          id
        }
      }
    }
  }
`;
