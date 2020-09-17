import React from 'react';
import { Post } from '../components/Post';
import { graphql } from 'gatsby';
import { PrimaryLayout } from '../layouts/PrimaryLayout';
import { SEO } from '../components/SEO';
import { ScrollBar } from '../components/scrollbar';

export const Blog: React.FC<any> = ({ data }: any) => (
  <PrimaryLayout column={`col-6`}>
    <ScrollBar />
    <SEO
      title={`Blog`}
      description={`Tech blog from what I learned`}
      keywords={`koji, kanao, koji kanao, blog, coding, tech`}
    />

    {data.allMarkdownRemark.nodes.map((node: any) => (
      <Post
        image={node.frontmatter.image}
        title={node.frontmatter.title}
        summary={node.frontmatter.summary}
        readMore={node.fields.slug}
      />
    ))}
  </PrimaryLayout>
);

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
          summary
        }
        excerpt
        html
        fields {
          slug
        }
      }
    }
  }
`;
