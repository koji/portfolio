import * as React from "react";
import Layout from "../components/Layout";
import { Head } from "../components/Header/head";
import { Image } from "../components/Image";
// for font icons start
import { library, IconName } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { ToolTag } from "../components/Util/styles";
import { myLinks } from "../data/link";
import { MyLink } from "../components/Types";

const ContactText = styled.h3`
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 25px;
  text-align: center;
`;

const fontAwesomeStyle: React.CSSProperties = {
  fontSize: "120px",
};

const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Profile = styled.div`
  grid-column: 2/3;
`;

const ProfileImage = styled.div`
  grid-column: 3/4;
`;

const ContactWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const About = () => {
  return (
    <Layout>
      <Head title="about" />
      <h1>About me</h1>

      <ProfileWrap>
        <Profile>
          <p>
            Koji is from Japan and currently he has been working for a company
            as a software enginner since 2018.
          </p>
          <p>
            He graduated from New York University(
            <a href="https://tisch.nyu.edu/itp">
              Interactive Telecommunications Program
            </a>
            ) with master degree in 2018. He was a resident researcher at ITP
            2018-2019.
            <br />
            Before came to NY, he was a system engineer and mostly worked on a
            power plant control system.
          </p>
          <p>
            <b>Area of ​​interest</b>
            <br />
            <ToolTag>machine learning</ToolTag>
            <ToolTag>IoT</ToolTag>
            <ToolTag>AR</ToolTag>
            <ToolTag>CreativeCoding</ToolTag>
          </p>
        </Profile>
        <ProfileImage>
          <Image filename="me.jpg" />
        </ProfileImage>
      </ProfileWrap>
      {/* social media links */}
      <ContactText>contact</ContactText>
      <ContactWrap>
        {myLinks.map((link: MyLink) => (
          <div
            key={`link-${link.id}`}
            style={{ gridColumn: `${link.id + 1}/${link.id + 2}` }}
          >
            <a href={link.link}>
              <FontAwesomeIcon
                icon={["fab", link.type as IconName]}
                style={fontAwesomeStyle}
              />
            </a>
          </div>
        ))}
      </ContactWrap>
    </Layout>
  );
};

export default About;
