import * as React from 'react';
import '../style.css';
import { Appbar } from '../components/appbar';
import { graphql } from 'gatsby';
import { RCard } from '../components/card';
import { SEO } from '../components/SEO';
import { ScrollBar } from '../components/scrollbar';

type TalkNode = {
  node: {
    title: string;
    description: string;
    event: string;
    link: string;
    id: string;
  };
};

const Talk: React.FC = ({ data }: any) => {
  const talkList = data.allTalkYaml.edges;
  const { node } = data;
  return (
    <div className='container-fluid'>
      <ScrollBar />
      <Appbar />
      <SEO title={`Talk`} description={`talk page`} keywords={`talk, koji, talk, creative tech, creative coding`} />
      <div className='row'>
        {talkList.map(({ node }: TalkNode) => (
          <RCard
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
