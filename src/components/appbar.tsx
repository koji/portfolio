import * as React from 'react';
import { Intent } from './link';

export const Appbar: React.FC = () => (
  <div className='container my-3'>
    <ul className='nav justify-content-center'>
      <li className='nav-item mx-3'>
        <Intent to='/'>
          <b>Home</b>
        </Intent>
      </li>
      <li className='nav-item mx-3'>
        <Intent to='/blog'>
          <b>Blog</b>
        </Intent>
      </li>
      <li className='nav-item mx-3'>
        <Intent to='/project'>
          <b>Project</b>
        </Intent>
      </li>
      <li className='nav-item mx-3'>
        <Intent to='/oss'>
          <b>OSS</b>
        </Intent>
      </li>
      <li className='nav-item mx-3'>
        <Intent to='/talk'>
          <b>Talk</b>
        </Intent>
      </li>
      <li className='nav-item mx-3'>
        <a className='nav-link' href='' target='_blank' rel='noopener'>
          <b>CV</b>
        </a>
      </li>
    </ul>
  </div>
);
