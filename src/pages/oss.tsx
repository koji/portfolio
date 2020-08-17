/* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import '../style.css';
import Appbar from '../components/appbar';
import { graphql } from 'gatsby';
import Card from '../components/card';
import SEO from '../components/SEO';
import ScrollBar from '../components/scrollbar';



const OSS: React.FC = ({ data }: any) => {
  const ossList = data.allOssYaml.edges;
  return (
    <div className='container-fluid'>
      <ScrollBar />
      <Appbar />

      <SEO
        title={'OSS'}
        description={'OSS projects that I contributed'}
        keywords={'koji, kanao, koji kanao, open source, oss, github'}
      />
      <div className='row'>
        {ossList.map(({ node }: any) => (
          <Card
            cardTitle={node.title}
            cardSubtitle={node.description}
            cardStack={node.stack}
            link={node.link}
            key={node.id}
          />
        ))}
      </div>
    </div>
  );
};

export default OSS;

export const query = graphql`
  {
    allOssYaml {
      edges {
        node {
          title
          description
          stack
          link
          id
        }
      }
    }
  }
`;
