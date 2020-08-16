import React from 'react';
import '../style.css';
import Appbar from '@components/appbar';
import Info from '@components/info';
import { Helmet } from 'react-helmet';
import ScrollBar from '@components/scrollbar';

const index: React.FC = () => (
  <div>
    <ScrollBar />
    <Appbar />
    <Info />
    <Helmet>
      <meta charSet='utf-8' name='description' content='This is a portfolio site of Koji Kanao.' />
      <meta charSet='utf-8' name='keywords' content='koji, kanao, koji kanao, kanao koji, software engineer, creative technologist, nyu-itp, itp' />
      <meta charSet='utf-8' name='robots' content='index, follow' />
      <title>Home</title>
    </Helmet>
  </div>
);

export default index;
