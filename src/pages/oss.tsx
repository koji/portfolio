import * as React from "react";
import Layout from "../components/Layout";
import { Head } from "../components/Header/head";
import styled from "styled-components";
import { ossData } from "../components/data/OSSData";
import { oss } from "../components/Types";

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
    background: #efefef;
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

export default class Oss extends React.Component {
  render() {
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
  }
}
