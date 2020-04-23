import * as React from "react";
import Layout from "../components/Layout";
// import { getPostData } from "../components/hooks/getPost";
import { graphql } from "gatsby";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Head } from "../components/Header/head";

// for markdown
export const query = graphql`
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

// export const query = graphql`
//   query($slug: String!) {
//     contentfulBlogPost(slug: {eq: $slug}) {
//       title
//       publishedDate(formatString: "MMMM Do, YYYY")
//       body {
//         json
//       }
//     }
//   }
// `;

// ToDo define props type
const Blog = (props: any) => {
  // console.log(props);
  // const options = {
  // renderNode: {
  // ToDo define type for node
  // "embedded-asset-block": (node: any) => {
  //   const alt = node.data.target.fields.title["en-US"];
  //   const url = node.data.target.fields.file["en-US"].url;
  //   return <img alt={alt} src={url} />;
  // },
  // },
  // };
  return (
    <Layout>
      <Head title="Post" />
      {/* <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)} */}
      {/* for markdown */}
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  );
};

export default Blog;
