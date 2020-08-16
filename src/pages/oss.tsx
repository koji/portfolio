/* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import '../style.css';
import Appbar from '@components/Appbar';
import { graphql } from 'gatsby';
import RCard from '@components/RCard';
import { Helmet } from 'react-helmet';
import ScrollBar from '@components/Scrollbar';

const OSS: React.FC = ({ data }) => {
  const ossList = data.allOssYaml.edges;
  return (
    <div className='container-fluid'>
      <ScrollBar />
      <Appbar />
      <Helmet htmlAttributes={{ lang: 'en', amp: undefined }} defer={false}>
        <meta charSet='utf-8' name='description' content='OSS projects that I contributed' />
        <meta charSet='utf-8' name='keywords' content='open source, oss, github' />
        <title>OSS</title>
      </Helmet>
      <div className='row'>
        {ossList.map(({ node }) => (
          <RCard
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
