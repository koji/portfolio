import React from 'react';
import ScrollBar from '../components/Scrollbar';
import { Helmet } from 'react-helmet';
import Appbar from '../components/Appbar';

const ErrorPage: React.FC = () => {
  return (
    <div>
      <ScrollBar />
      <Appbar />
      <h1>404 Page Not Found</h1>
      <Helmet>
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
  )
}

export default ErrorPage;
