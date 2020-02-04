import * as React from "react";
import Layout from "../components/Layout";
import { Head } from "../components/Header/head";
import { Skill } from "../components/Skillblock";
import styled from "styled-components";
import { Image } from "../components/Image";
import "../styles/style.css";

const BigText = styled.span`
  /* color: #ffa500; */
  font-size: 50px;
`;

const ProfileHeaderText = styled.h2`
  margin-left: 10px;
  margin-top: 10px;
`;

const ProfileText = styled.p`
  margin-left: 20px;
  margin-right: 20px;
`;

const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const TopProfile = styled.div`
  grid-column: 2/3;
  background: #efefef;
`;

const TopImage = styled.div`
  grid-column: 3/4;
`;

const SkillWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

const SkillContainer = styled.div`
  grid-column: 3/7;
`;

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="Home" />
        <ProfileWrap>
          <TopProfile>
            <ProfileHeaderText>
              <BigText> 👋 </BigText>
              <BigText>Hi,</BigText> I'm Koji
            </ProfileHeaderText>
            <ProfileText>
              Currently, I'm working for a company as a software engineer.
              <br />
              Mostly work on frontend(reactjs with typescript) and
              backend(nodejs). Using python to create a tool for myself.
              <br />
              I'm passionate about creative coding(openFrameworks and fragment
              shaders) and making something useful and sometimes useless things.
              <br />
              Right now I'm interested in <strong>
                machine learning
              </strong>, <strong>IoT</strong>, and <strong>AR</strong>. I think
              AR could be UI for ml application.
            </ProfileText>
          </TopProfile>
          <TopImage>
            <Image filename="logo.png" />
          </TopImage>
        </ProfileWrap>
        <SkillWrap>
          <SkillContainer>
            <Skill />
          </SkillContainer>
        </SkillWrap>
      </Layout>
    );
  }
}
