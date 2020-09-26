import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Appbar from '../components/appbar';
import styled from 'styled-components';

const Divider = styled.hr`
  margin-bottom: 30px;
  margin-top: 30px;
  border: 2px solid #ffffff;
  border-radius: 2px;
  width: 80%;
`;

const BlogpostLayout: React.FC<any> = ({ data }: any) => {
  const post = data.markdownRemark;
  return (
    <div>
      <SEO title={post.title} description={post.description} keywords={post.keywords} />
      <Appbar />
      <div className='container' style={{ marginTop: `50px` }}>
        <div className='row justify-content-md-center'>
          <h1>{post.frontmatter.title}</h1>
          <Divider />
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
