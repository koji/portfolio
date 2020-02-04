import * as React from "react";
// import Link from "gatsby-link";
import Layout from "../components/Layout";
import { Head } from "../components/Header/head";
import styled from "styled-components";
import { WorkshopData } from "../data/workshops";
import { Workshop as wsType } from "../components/Types";
import { ToolTag } from "../components/Util/styles";

const WorkshopWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 20px;
`;

const WorkshopTitleText = styled.h3``;

const Separator = styled.hr`
  border-top: 1px solid #ffffff;
  /* width: 90%; */
  /* margin: auto; */
  /* margin-bottom: 20px; */
`;

const WorkshopItem = styled.div``;

export default class Workshop extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="Workshop" />
        <h1>Workshop | Talk</h1>
        <WorkshopWrap>
          {WorkshopData.map((data: wsType) => (
            <WorkshopItem key={`workshop-talk-${data.id}`}>
              <WorkshopTitleText>{data.title}</WorkshopTitleText>
              <Separator />
              {data.tags.map((tag, i) => (
                <ToolTag key={`tag-${data.title}-${i}`}>{tag}</ToolTag>
              ))}
            </WorkshopItem>
          ))}
        </WorkshopWrap>
      </Layout>
    );
  }
}
