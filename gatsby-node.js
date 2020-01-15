const path = require("path");

// onCreateNode API for markdown
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  // console.log(node);
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/blog.tsx");
  // for markdown
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  // const res = await graphql(`
  //   query {
  //     allContentfulBlogPost {
  //       edges {
  //         node {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `);
  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // markdown
    //  res.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.fields.slug}`,
      //  path: `/blog/${node.slug}`,
      context: {
        slug: node.fields.slug,
        //  slug: node.slug,
      },
    });
  });
};
