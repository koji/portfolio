import React from 'react';
import '../style.css';
import Appbar from '../components/appbar';
import Info from '../components/info';
import { Helmet } from 'react-helmet';
import ScrollBar from '../components/scrollbar';

const index = () => (
  <div>
    <ScrollBar />
    <Appbar />
    <Info />
    <Helmet>
      <meta charSet='utf-8' />
      <title>Home</title>
    </Helmet>
  </div>
);

export default index;
