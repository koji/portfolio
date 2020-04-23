import * as React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { project } from "../Types";
import { Image } from "../Image";
import { ToolTag } from "../Util/styles";

const Figure = styled.figure`
  flex-basis: calc(33.333% - 4rem);
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0 2rem 2rem 2rem;
  padding: 2rem;
  border: 1px solid lightgray;
  background: white;
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.03);
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Figcaption = styled.figcaption`
  margin-top: 20px;
`;

interface Props {
  projectData: project;
}

export const Project = (props: Props) => {
  const { id, name, image, description, tools } = props.projectData;
  console.log(image);
  return (
    <Figure>
      <h3>{name}</h3>
      <ImageWrapper>
        <Link to={`project/${id}`}>
          <Image filename={image} />
        </Link>
      </ImageWrapper>
      <Figcaption>
        <p>{description}</p>
        <hr />
        <p>
          {tools.map((tool, i) => (
            <ToolTag key={`${name}-tool-${i}`}>{tool}</ToolTag>
          ))}
        </p>
      </Figcaption>
    </Figure>
  );
};
