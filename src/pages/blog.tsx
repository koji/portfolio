import * as React from "react";
import Link from "gatsby-link";
import Layout from "../components/layout";
import { useBlogData } from "../components/hooks/getBlogdata";
import blogStyles from "./blog.module.scss";
import { Head } from "../components/head";

// ToDo define edge type
export const Blog: React.FC = () => {
  const data = useBlogData();
  // const data = RetrieveBlogPost();
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      {/* <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge: any) => {
          return (
            <li key={`${edge.node.slug}`} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          );
        })}
      </ol> */}
      <ol className={blogStyles.posts}>
        {data.edges.map((edge: any) => {
          return (
            <li key={`${edge.node.fields.slug}`} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};
export default Blog;
