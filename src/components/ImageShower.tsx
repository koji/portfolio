import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

type Props = {
  filename: string;
  alt: string;
};

export const ImageShower = (props: Props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    /*
              sizes(maxWidth: 300) {
                ...GatsbyImageSharpSizes
              }
    */
    render={(data) => {
      const image = data.images.edges.find((n: any) => n.node.relativePath.includes(props.filename));
      if (!image) {
        return null;
      }
      //const imageSizes = image.node.childImageSharp.sizes; ←for fixing size
      return (
        /*<Img alt={props.alt} sizes={imageSizes} /> ←for fixing size */
        <Img fluid={image.node.childImageSharp.fluid} alt={props.alt} />
      );
    }}
  />
);
// export default Image;ss
