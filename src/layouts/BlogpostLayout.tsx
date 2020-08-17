import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Appbar from '../components/appbar';

const BlogpostLayout = ({ data }: any) => {
  const post = data.markdownRemark;
  return (
    <div>
      <SEO title={post.title} description={post.description} keywords={post.keywords} />
      <Appbar />
      <div className='container'>
        <div className='row justify-content-md-center'>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </div>
  );
};

export default BlogpostLayout;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
        summary
      }
    }
  }
`;
