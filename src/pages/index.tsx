/* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import '../style.css';
import Appbar from '../components/Appbar';
import Info from '../components/Info';
// import { Helmet } from 'react-helmet';
import ScrollBar from '../components/Scrollbar';
import SEO from '../components/SEO';

const index: React.FC = () => (
  <div>
    <ScrollBar />
    <Appbar />
    <Info />
    <SEO
      title={'Home'}
      description={'This is a portfolio site of Koji Kanao.'}
      keywords={'koji, kanao, koji kanao, kanao koji, software engineer, creative technologist, nyu-itp, itp'}
    />
  </div>
);

export default index;
