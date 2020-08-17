import React from 'react';
import Appbar from '../components/appbar';

const PrimaryLayout = (props: any) => (
  <div>
    <Appbar />
    <div className='container'>
      <div className='row justify-content-md-center'>
        <div className={props.column}>{props.children}</div>
      </div>
    </div>
  </div>
);

export default PrimaryLayout;
