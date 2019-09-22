import * as React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { project } from "./Types";
import { Image } from "./Image";

const Figure = styled.figure`
  flex-basis: calc(33.333% - 4rem);
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0 2rem 2rem 2rem;
  padding: 2rem;
  border: 1px solid lightgray;
  background: white;
  box-shadow: 0 0 0 5px rgba(0,0,0,0.03);
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

// width calc(100% + 4rem)
//   margin-left -2rem
//   margin-top -2rem
//   max-width none
interface Props {
  projectData: project;
};

export const Project = (props: Props) => {
  const {id, name, image, description, link, tool} = props.projectData;
  console.log(image);
  return (
    <Figure>
      <h3>{name}</h3>
      <ImageWrapper>
        <Link to={`project/${id}`}>
          <Image filename={image} />
        </Link>
      </ImageWrapper>
      <figcaption>
        <p>{description}</p>
        <hr />
        <p>tool:{tool}</p>
      </figcaption>
    </Figure>
  );
};
