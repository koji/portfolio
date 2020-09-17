/* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import '../style.css';
import { Appbar } from '../components/appbar';
import { graphql } from 'gatsby';
import { RCard } from '../components/card';
import { SEO } from '../components/SEO';
import { ScrollBar } from '../components/scrollbar';

type ProjectNode = {
  node: {
    title: string;
    subtitle: string;
    link: string;
    id: string;
  };
};

export const Projects: React.FC = ({ data }: any) => {
  const projectList = data.allProjectsYaml.edges;

  return (
    <div className='container-fluid'>
      <ScrollBar />
      <Appbar />
      <SEO
        title={'Projects'}
        description={'This is a project page'}
        keywords={'project, koji project, itp project, art project'}
      />
      <div className='row'>
        {projectList.map(({ node }: ProjectNode) => (
          <RCard cardTitle={node.title} cardSubtitle={node.subtitle} link={node.link} key={node.id} />
        ))}
      </div>
    </div>
  );
};

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
