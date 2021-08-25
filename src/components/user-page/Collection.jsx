import React from 'react'
import  photo  from "../../utils/temp/photo.jpeg";


export const Collection = () => {
  return (
    <div className="collection__container">
      <figure className="collections">
        <img className="photo--1" src={ photo } alt="" />
        <img className="photo--2" src={ photo } alt="" />
        {/* <img className="photo--3" src={ photo } alt="" /> */}
        {/* <figcaption className="collection--name">Lorem ipsum dolor sit amet consectetur.</figcaption> */}
      </figure>
      <h4 className="collection--name">Lorem ipsum dolor sit.</h4>
    </div>
  )
}
