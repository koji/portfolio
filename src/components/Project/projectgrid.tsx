import * as React from "react";
import styled from "styled-components";
import { Project } from ".";
import { project } from "../Types";

const GridPart = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;
interface Props {
  projectData: project[];
}

export const ProjectGrid = (props: Props) => {
  return (
    <GridPart>
      {props.projectData.map((data, i) => (
        <Project projectData={data} key={`project-${data.id}`} />
      ))}
    </GridPart>
  );
};
