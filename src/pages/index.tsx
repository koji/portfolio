import React from 'react';
import '../style.css';
import { Appbar } from '../components/appbar';
import { Info } from '../components/info';
// import { Helmet } from 'react-helmet';
import { ScrollBar } from '../components/scrollbar';
import { SEO } from '../components/SEO';

export const index: React.FC = () => (
  <div>
    <ScrollBar />
    <Appbar />
    <Info />
    <SEO
      title={`Home`}
      description={`This is a portfolio site of Koji Kanao.`}
      keywords={`koji, kanao, koji kanao, kanao koji, software engineer, creative technologist, nyu-itp, itp`}
    />
  </div>
);
