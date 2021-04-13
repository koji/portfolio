import * as React from 'react';
import { Card as CardType } from '../types/types';
import { ImageShower } from './ImageShower';

export const RCard: React.FC<CardType> = (props: CardType) => {
  const { cardTitle, cardSubtitle, cardStack, link, imgSrc } = props;
  const imgAlt = imgSrc?.split(`.`)[0] ? imgSrc.split(`.`)[0] : `no-image`;
  // const webp = imgSrc?.replace(/.+\.jpeg|jpg|png/, `webp`);
  return (
    <div className='col-lg-4'>
      <div className='card mx-3 my-5'>
        <div className='card-body'>
          <h2 className='card-title'>{cardTitle}</h2>
          {imgSrc && imgAlt ? <ImageShower filename={imgSrc} alt={imgAlt} /> : <span></span>}
          <p className='card-text'>{cardSubtitle}</p>
          <p className='card-text'>{cardStack}</p>
          <a href={link} target='_blank' className='card-link' rel='noopener'>
            Link
          </a>
        </div>
      </div>
    </div>
  );
};
