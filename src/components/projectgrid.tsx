import * as React from "react";
import styled from "styled-components";
import { Project } from "./Project";
import { project } from "./Types";


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  grid-auto-rows: minmax(300px, auto);
`;

const Cell = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  background: #eee;
  text-align:center;
  /* grid-auto-rows: minmax(100px, auto); */
`;

const GridPart = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;
interface Props {
  projectData: project[];
};

export const ProjectGrid = (props: Props) => {
  return (
    <GridPart>
      {props.projectData.map((data, i) => (
        <Project projectData={data} key={`project-${data.id}`} />
      ))}
    </GridPart>
  );
};
