import React from 'react';
import '../style.css';
import Appbar from '../components/appbar';
import { graphql } from 'gatsby';
import Card from '../components/card';
import SEO from '../components/SEO';
import ScrollBar from '../components/scrollbar';

type TalkNode = {
  title: string;
  description: string;
  event: string;
  link: string;
  id: string;
};

const Talk: React.FC = ({ data }: any) => {
  const talkList = data.allTalkYaml.edges;
  return (
    <div className='container-fluid'>
      <ScrollBar />
      <Appbar />
      <SEO title={`Talk`} description={`talk page`} keywords={`talk, koji, talk, creative tech, creative coding`} />
      <div className='row'>
        {talkList.map((node: TalkNode) => (
          <Card
            cardTitle={node.title}
            cardSubtitle={node.description}
            cardStack={node.event}
            link={node.link}
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
          link
          id
        }
      }
    }
  }
`;
