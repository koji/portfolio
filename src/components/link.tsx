import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const Intent: React.FC<any> = ({ children, to }) => (
  <AniLink
    cover
    bg='#afeeee'
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
