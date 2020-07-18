import React from 'react';
import Intent from './link';

const Appbar = () => (
  <div className='container my-3'>
    <ul className='nav justify-content-center'>
      <li className='nav-item mx-3'>
        <Intent to='/'>Home</Intent>
      </li>
      <li className='nav-item mx-3'>
        <Intent to='/projects'>Projects</Intent>
      </li>
      <li className='nav-item mx-3'>
        <Intent to='/oss'>OSS</Intent>
      </li>
      <li className='nav-item mx-3'>
        <Intent to='/talk'>Talk</Intent>
      </li>
      <li className='nav-item mx-3'>
        <a
          className='nav-link'
          href='https://drive.google.com/file/d/1dAHY3C69_FFo0AJ7_jiBBYuTWUZGQ4BA/view?usp=sharing'
        >
          CV
        </a>
      </li>
    </ul>
  </div>
);

export default Appbar;
