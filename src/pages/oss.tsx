import React from 'react';
import '../style.css';
import Appbar from '@components/appbar';
import { graphql } from 'gatsby';
import Card from '@components/card';
import { Helmet } from 'react-helmet';
import ScrollBar from '@components/scrollbar';

const OSS: React.FC = ({ data }) => {
  const ossList = data.allOssYaml.edges;
  return (
    <div className='container-fluid'>
      <ScrollBar />
      <Appbar />
      <Helmet>
        <meta charSet='utf-8' name='description' content='OSS projects that I contributed' />
        <meta charSet='utf-8' name='keywords' content='open source, oss, github'/>
        <title>OSS</title>
      </Helmet>
      <div className='row'>
        {ossList.map(({ node }) => (
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
