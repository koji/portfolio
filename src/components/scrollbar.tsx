import React from 'react';
import styled, { keyframes } from 'styled-components';

const Scrollbar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
`;

const Animation = keyframes`
  0%,
  100% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(360deg);
  }
`;

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  background: linear-gradient(to top, #008aff, #00ffe7);
  animation: ${Animation} 5s linear infinite;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #008aff, #00ffe7);
    filter: blur(10px);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #008aff, #00ffe7);
    filter: blur(30px);
  }
`;

const ScrollBar = () => (
  <>
    <ProgressBar />
    <Scrollbar />
  </>
);

export default ScrollBar;
