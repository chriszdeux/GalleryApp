import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const HeroGallery = ({ values }) => {
  const { animation2, currentPosition } = values
  const { handleData } = useContext(DataContext)
  return (
    <figure className="hero__gallery">
      <img className={ `img--gallery--none ${animation2}` } src={ !!handleData && handleData[currentPosition + 1].urls.regular } alt={ handleData[currentPosition + 1].alt_description } placeholder={ handleData[currentPosition + 1].blur_hash } style={{
        animationDelay: '1s'
      }} />

      <img className={ `img--gallery--active ${animation2}` } src={ !!handleData && handleData[currentPosition].urls.regular } alt={ handleData[currentPosition].alt_description } placeholder={ handleData[currentPosition].blur_hash }  />
      
      <img className={ `img--gallery--none ${animation2}` } src={ !!handleData && handleData[currentPosition + 2].urls.regular } alt={ handleData[currentPosition + 2].alt_description } placeholder={ handleData[currentPosition + 2].blur_hash } style={{
        animationDelay: '2s'
      }} />
    
  </figure>
          
  )
};
