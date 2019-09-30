import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  text-align: center;
  /* grid-auto-rows: 100px; */
`;

const Text = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Monoton&display=swap");
  font-size: 2.5em;
  font-family: Monoton;
  margin: 20px 0 20px 0;
  color: #228dff;
  -webkit-animation: neon2 1.5s ease-in-out infinite alternate;
  -moz-animation: neon2 1.5s ease-in-out infinite alternate;
  animation: neon2 1.5s ease-in-out infinite alternate;
  /* color: #fff;
  text-align: center;
  -webkit-animation: glow 1.5s ease-in-out infinite alternate;
  -moz-animation: glow 1.5s ease-in-out infinite alternate;
  animation: glow 1.5s ease-in-out infinite alternate; */

  /* &:first-child {
    color: #ff9900;
  } */

  &:hover {
    -webkit-animation: glow 1.5s ease-in-out infinite alternate;
    -moz-animation: glow 1.5s ease-in-out infinite alternate;
    animation: glow 1.5s ease-in-out infinite alternate;
  }

  @keyframes glow {
    /* from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff9900,
        0 0 70px #ff9900, 0 0 80px #ff9900, 0 0 100px #ff9900, 0 0 150px #ff9900;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff9900,
        0 0 35px #ff9900, 0 0 40px #ff9900, 0 0 50px #ff9900, 0 0 75px #ff9900;
    }
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
        0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }

    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
        0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    } */
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff,
        0 0 70px #228dff, 0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff,
        0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff;
    }
  }
  &:hover {
    color: #ffffff;
  }
`;

const Cell = styled.div`
  /* background: #000; */
  padding: 1em;
`;

// ToDo read ts file
export const Skill = () => {
  return (
    <Wrapper>
      <Cell><Text>python</Text></Cell>
      <Cell><Text>js</Text></Cell>
      <Cell><Text>oF</Text></Cell>
      <Cell><Text>arduino</Text></Cell>
      {/* <Cell><Text>swift</Text></Cell> */}
      <Cell><Text>linux</Text></Cell>
      <Cell><Text>reactjs</Text></Cell>
      <Cell><Text>git|github</Text></Cell>
      {/* <Cell><Text>docker</Text></Cell> */}
    </Wrapper>
  );
};
