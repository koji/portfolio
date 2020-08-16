import React from 'react';
import ScrollBar from '../components/scrollbar';
import Appbar from '../components/appbar';
import SEO from '../components/SEO';

const ErrorPage: React.FC = () => {
  return (
    <div>
      <ScrollBar />
      <Appbar />
      <h1>404 Page Not Found</h1>
      <SEO
        title={'404'}
        description={'This is a portfolio site of Koji Kanao.'}
        keywords={'koji, kanao, koji kanao, kanao koji, software engineer, creative technologist, nyu-itp, itp'}
      />
    </div>
  );
}

export default ErrorPage;
