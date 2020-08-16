/* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import '../style.css';
import Appbar from '@components/Appbar';
import Info from '@components/Info';
import { Helmet } from 'react-helmet';
import ScrollBar from '@components/Scrollbar';

const index: React.FC = () => (
  <div>
    <ScrollBar />
    <Appbar />
    <Info />
    <Helmet htmlAttributes={{ lang: 'en', amp: undefined }} defer={false}>
      <html lang='en' />
      <meta charSet='utf-8' name='description' content='This is a portfolio site of Koji Kanao.' />
      <meta
        charSet='utf-8'
        name='keywords'
        content='koji, kanao, koji kanao, kanao koji, software engineer, creative technologist, nyu-itp, itp'
      />
      <meta charSet='utf-8' name='robots' content='index, follow' />
      <title>Home</title>
    </Helmet>
  </div>
);

export default index;
