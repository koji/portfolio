import * as React from 'react';
import { Appbar } from '../components/appbar';

type Props = {
  column: string;
  children: any;
};

export const PrimaryLayout: React.FC<Props> = (props: Props) => (
  <div>
    <Appbar />
    <div className='container'>
      <div className='row justify-content-md-center'>
        <div className={props.column}>{props.children}</div>
      </div>
    </div>
  </div>
);
