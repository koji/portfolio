import React from 'react';
import '../style.css';
import Appbar from '@components/appbar';
import { graphql } from 'gatsby';
import Card from '@components/card';
import { Helmet } from 'react-helmet';
import ScrollBar from '@components/scrollbar';

const Talk: React.FC = ({ data }) => {
  const talkList = data.allTalkYaml.edges;
  return (
    <div className='container-fluid'>
      <ScrollBar />
      <Appbar />
      <Helmet htmlAttributes={{ lang: `en` }}>
        <meta charSet='utf-8' name='description' content='talk page' />
        <meta charSet='utf-8' name='keywords' content='talk, koji, talk, creative tech, creative coding' />
        <title>OSS</title>
      </Helmet>
      <div className='row'>
        {talkList.map(({ node }) => (
          <Card
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
