/* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import '../style.css';
import Appbar from '@components/Appbar';
import { graphql } from 'gatsby';
import RCard from '@components/RCard';
import { Helmet } from 'react-helmet';
import ScrollBar from '@components/Scrollbar';

const Talk: React.FC = ({ data }) => {
  const talkList = data.allTalkYaml.edges;
  return (
    <div className='container-fluid'>
      <ScrollBar />
      <Appbar />
      <Helmet htmlAttributes={{ lang: 'en', amp: undefined }} defer={false}>
        <meta charSet='utf-8' name='description' content='talk page' />
        <meta charSet='utf-8' name='keywords' content='talk, koji, talk, creative tech, creative coding' />
        <title>OSS</title>
      </Helmet>
      <div className='row'>
        {talkList.map(({ node }) => (
          <RCard
            cardTitle={node.title}
            cardSubtitle={node.description}
            cardStack={node.event}
            // link={node.link}
            key={node.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Talk;

export const query = graphql`
  {
    allTalkYaml {
      edges {
        node {
          title
          description
          event
          # link
          id
        }
      }
    }
  }
`;
