import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

interface Props {
  filename: string;
  alt?: string;
  size?: number;
}

export const Image = (props: Props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find((n: any) => {
        // console.log(`image :${n.node.relativePath}`);
        // console.log(props.filename);
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }
      // console.log(props.filename);
      const imageSizes = image.node.childImageSharp.sizes;
      // console.log(imageSizes);
      return (
        <Img alt={props.alt} sizes={props.size ? props.size : imageSizes} />
      );
    }}
  />
);
