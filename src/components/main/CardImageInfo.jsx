import React, { useEffect, useState } from 'react'

export const CardImageInfo = ({ data }) => {
  const { created, blur_hash, description, alt_description } = data
  const [sliceDescription, setSliceDescription] = useState()
  // debugger
  useEffect(() => {
    setSliceDescription(!!description && description.slice(0,30))
  }, [ description ])
  // debugger
  return (
    <div className="image__info">
      <h4 className="sub--title--card">{ created }</h4>
      <h3 className="title--card">{ sliceDescription }...</h3>
      {/* <p className="info--card">{ sliceDescription }</p> */}
    </div>
  )
}
