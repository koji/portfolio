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
    stack: string;
    image?: string;
  };
};

const Projects: React.FC = ({ data }: any) => {
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
          <>
            {node.image ? (
              <RCard
                cardTitle={node.title}
                cardSubtitle={node.subtitle}
                cardStack={node.stack}
                link={node.link}
                key={node.id}
                imgSrc={node.image}
              />
            ) : (
              <RCard
                cardTitle={node.title}
                cardSubtitle={node.subtitle}
                cardStack={node.stack}
                link={node.link}
                key={node.id}
              />
            )}
          </>
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
          stack
          link
          id
          image
        }
      }
    }
  }
`;
