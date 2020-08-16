import React from 'react';
import '../style.css';
import Appbar from '@components/appbar';
import { graphql } from 'gatsby';
import Card from '@components/card';
import { Helmet } from 'react-helmet';
import ScrollBar from '@components/scrollbar';

const Projects: React.FC = ({ data }) => {
  const projectList = data.allProjectsYaml.edges;

  return (
    <div className='container-fluid'>
      <ScrollBar />
      <Appbar />
      <Helmet>
        <html lang='en' />
        <meta charSet='utf-8' name='description' content='This is a project page' />
        <meta charSet='utf-8' name='keywords' content='project, koji project, itp project, art project' />
        <title>Projects</title>
      </Helmet>
      <div className='row'>
        {projectList.map(({ node }) => (
          <Card cardTitle={node.title} cardSubtitle={node.subtitle} link={node.link} key={node.id} />
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
