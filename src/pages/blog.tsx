import React from 'react';
import Post from '../components/Post';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PrimaryLayout from '../layouts/PrimaryLayout';

const Blog = ({ data }: any) => {
  return (
    <PrimaryLayout column={`col-xs-6`}>
      <Helmet>
        <title>Blog</title>
        <meta name='description' content='This is a description of the website' />
        <meta name='keywords' content='gatsby, gatsbyjs project, gatsby bootstrap' />
        <meta name='robots' content='index, follow' />
      </Helmet>
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
};

export default Blog;

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
