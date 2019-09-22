import { useStaticQuery, graphql } from "gatsby";

export const useBlogData = () => {
  const data = useStaticQuery(
    graphql`
      query BlogData {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `);
  return data.allMarkdownRemark;
};
