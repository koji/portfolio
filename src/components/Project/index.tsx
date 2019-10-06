import * as React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { project } from "../Types";
import { Image } from "../Image";

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

// tag for tool
const ToolTag = styled.span`
  background: #eee;
  border-radius: 3px 0 0 3px;
  color: #999;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;

  ::before {
    background: #fff;
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: "";
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px;
  }

  ::after {
    background: #fff;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #eee;
    border-top: 13px solid transparent;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
  }

  :hover {
    background-color: #d76f47;
    color: white;
  }

  :hover::after {
    border-left-color: #d76f47;
  }
`;

// width calc(100% + 4rem)
//   margin-left -2rem
//   margin-top -2rem
//   max-width none
interface Props {
  projectData: project;
}

export const Project = (props: Props) => {
  const {id, name, image, description, link, tools} = props.projectData;
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
        <p>
          {tools.map((tool, i) => (
            <ToolTag key={`${name}-tool-${i}`}>{tool}</ToolTag>
          ))}
        </p>
      </figcaption>
    </Figure>
  );
};
