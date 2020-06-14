import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Intent: React.FC<any> = ({ children, to }) => (
  <AniLink
    cover
    bg='#218dff'
    className='nav-link'
    to={to}
    activeStyle={{
      color: `white`,
    }}
    style={{
      color: `grey`,
    }}
  >
    {children}
  </AniLink>
);

export default Intent;
