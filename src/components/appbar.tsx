import React from 'react';
import Intent from './Intent';

const Appbar = () => (
  <div className='container my-3'>
    <ul className='nav justify-content-center'>
      <li className='nav-item mx-3'>
        <Intent to='/'>
          <b>Home</b>
        </Intent>
      </li>
      <li className='nav-item mx-3'>
        <Intent to='/projects'>
          <b>Projects</b>
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
        <a
          className='nav-link'
          href='https://drive.google.com/file/d/1dAHY3C69_FFo0AJ7_jiBBYuTWUZGQ4BA/view?usp=sharing'
        >
          <b>CV</b>
        </a>
      </li>
    </ul>
  </div>
);

export default Appbar;
