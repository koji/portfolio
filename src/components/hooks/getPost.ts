import { graphql } from "gatsby";

export const getPostData = () => {
  const query = graphql`
    query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
          title
          date
        }
        html
      }
    }
  `;
  return query;
};
