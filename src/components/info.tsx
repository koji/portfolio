import React from 'react';
import {
  FaTwitter as Twitter,
  FaGithub as Github,
  //FaInstagram as Insta,
  FaEnvelope as Mail,
  FaDev as Dev,
  FaLinkedinIn as LinkedIn,
  FaMedium as Medium,
} from 'react-icons/fa';
import styled from 'styled-components';

const FetchItemText = styled.span`
  color: #e1f4f3 !important;
`;
const FetchText = styled.span`
  color: #070a0e !important;
`;

export const Info: React.FC = () => (
  <div className='container'>
    <div className='my-5'></div>
    <div className='display-3' style={{ color: `#218dff` }}>
      <span style={{ color: `white` }}>Hello, I'm</span> <br />
      Koji Kanao.
    </div>
    <div className='h1 code mt-4 mb-3'>fetch('koji', {`{`}</div>
    <div className='text-muted mx-5 my-4 h3 text-justify info'>
      <FetchItemText>title: </FetchItemText>
      <FetchText>software engineer | creative technologist</FetchText>
      <br />
      <FetchItemText>tech stack: </FetchItemText>
      <FetchText>
        {` `}
        js/ts | python | oF | arduino | linux | react | git | raspberry pi | webpack | rollupjs | Circle CI
      </FetchText>
      {` `}
      <br />
      <FetchItemText>passion: </FetchItemText>
      <FetchText>creative coding | build things | learn things</FetchText>
      <br />
      <FetchItemText>interest: </FetchItemText>
      <FetchText>AR | ML</FetchText>
      <br />
      <FetchItemText>education: </FetchItemText>
      <FetchText>Graduated from New York University & Kobe University</FetchText>
    </div>
    <div className='h1 code mt-2 mb-3'>{`}`}</div>
    <div className='h1 mt-5'>
      <a className='mr-5 icon' aria-label='Devto' href='https://dev.to/kojikanao/' target='_blank' rel='noopener'>
        <Dev />
      </a>
      <a className='mr-5 icon' aria-label='GitHub' href='https://github.com/koji/' target='_blank' rel='noopener'>
        <Github />
      </a>
      <a
        className='mr-5 icon'
        aria-label='LinkedIn'
        href='https://www.linkedin.com/in/kojikanao/'
        target='_blank'
        rel='noopener'
      >
        <LinkedIn />
      </a>
      <a
        className='mr-5 icon'
        aria-label='Twitter'
        href='https://twitter.com/kojikanao_nyc'
        target='_blank'
        rel='noopener'
      >
        <Twitter />
      </a>
      <a className='mr-5 icon' aria-label='Medium' href='https://koji-kanao.medium.com/' target='_blank' rel='noopener'>
        <Medium />
      </a>
      <a className='mr-5 icon' aria-label='Gmail' href='mailto://koji.kanao@nyu.edu'>
        <Mail />
      </a>
    </div>
  </div>
);
