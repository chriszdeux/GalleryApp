import React from 'react'

export const CardImageInfo = ({ data }) => {
  const { created, blur_hash, description, alt_description } = data
  return (
    <div className="image__info">
      <h4 className="sub--title--card">{ created }</h4>
      <h3 className="title--card">{ alt_description }</h3>
      <p className="info--card">{ description }</p>
    </div>
  )
}
