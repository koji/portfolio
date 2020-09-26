/* eslint-disable @typescript-eslint/quotes */
import * as React from 'react';
import '../style.css';
import { Appbar } from '../components/appbar';
import { graphql } from 'gatsby';
import { RCard } from '../components/card';
import SEO from '../components/SEO';
import ScrollBar from '../components/scrollbar';

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

const Project: React.FC = ({ data }: any) => {
  const projectList = data.allProjectsYaml.edges;

  return (
    <div className='container-fluid'>
      <ScrollBar />
      <Appbar />
      <SEO
        title={'Project'}
        description={'This is a project page'}
        keywords={'project, koji project, itp project, art project'}
      />
      <div className='row'>
        {projectList.map(({ node }: any) => (
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

export default Project;

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
