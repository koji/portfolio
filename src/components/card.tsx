import React from 'react';
import { Card as CardType } from '../types/Types';

export const RCard: React.FC<CardType> = (props: CardType) => {
  const { cardTitle, cardSubtitle, cardStack, link, imgSrc } = props;
  return (
    <div className='col-lg-4'>
      <div className='card mx-3 my-5'>
        <div className='card-body'>
          <h2 className='card-title'>{cardTitle}</h2>
          <img className='card-img' src={imgSrc} />
          <p className='card-text'>{cardSubtitle}</p>
          <p className='card-text'>{cardStack}</p>
          <a href={link} target='_blank' className='card-link'>
            Link
          </a>
        </div>
      </div>
    </div>
  );
};
