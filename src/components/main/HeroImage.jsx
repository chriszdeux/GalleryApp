import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const HeroImage = ({ values }) => {
  const { mediaQueries, handleData } = useContext(DataContext)
  const { currentPosition, animation } = values
  return (
    <figure className={ `hero__image ${animation}` }>
      <picture>
        <source media={ mediaQueries.tablet } srcSet={ handleData[currentPosition].urls.regular } />
        <source media={ mediaQueries.tablet_hd } srcSet={ handleData[currentPosition].urls.regular } />
        <source media={ mediaQueries.desk_hd } srcSet={ handleData[currentPosition].urls.full } />
          <img className="hero--image" src={ handleData[currentPosition].urls.regular } alt="" />
      </picture>
    </figure>
    )
};

