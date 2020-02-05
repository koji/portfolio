import * as React from "react";
import Layout from "../components/Layout";
import { Head } from "../components/Header/head";
import styled from "styled-components";
import { ossData } from "../data/OSSData";
import { oss } from "../components/Types";
import { ToolTag } from "../components/Util/styles";

const Separator = styled.hr`
  border-top: 1px solid #ffffff;
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 15px;
  margin-left: 40px;
  margin-top: 15px;
`;

const Description = styled.p`
  margin-left: 20px;
  margin-right: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

const GridItemContainer = styled.div`
  background-color: #efefef;
`;

const LinkTag = styled.a`
  color: #2f3e9f;
`;

const Oss = () => {
  return (
    <Layout>
      <Head title="OSS" />
      <h1>Open Source Activities</h1>
      <GridContainer>
        {ossData.map((item: oss) => (
          <GridItemContainer key={`oss-${item.id}`}>
            <Title>
              <LinkTag href={item.link}>{item.title}</LinkTag>
            </Title>
            <Separator />
            <Description>{item.description}</Description>
            {item.tools.map((tool: string, i: number) => (
              <ToolTag key={`${item.title}-tool-${i}`}>{tool}</ToolTag>
            ))}
          </GridItemContainer>
        ))}
      </GridContainer>
    </Layout>
  );
};

export default Oss;
