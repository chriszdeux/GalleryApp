import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../context/DataContext'
import { BiDislike as DislikeIcon, BiLike as LikeIcon  } from 'react-icons/bi';
import { SliderControls } from '../utils/SliderControls';
import { useIncrementDecrement } from '../hooks/useIncrementDecrement';
import { Link } from 'react-router-dom';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';

export const ModalImageUser = ({ values }) => {
  const { slider, data, animation } = values
  // const { item:{ position, id, user:{ username } } } = values
  // debugger
  // const { position } = values
  // const { data, setUserProfile } = useContext(DataContext)
  // const { slider, increment, decrement } = useIncrementDecrement(position)
  // const { position } = item
  // debugger
  const { blur_hash, created, id, urls} = data[slider]
  // debugger
  // debugger
  // debugger
  // const selection = document.querySelector(`#${username}`)
  // debugger
  // const scrollComponent = () => {
  //   window.scrollTo({
  //     top: goToComponent.current.offsetTop,
  //     behavior: 'smooth'
  //   })
  //   // debugger
  // }
  // useEffect(() => {
  //   scrollComponent()
  // }, [ position ])
  // const goTo = useRef(item.id)

  // const scrollTo = item.id
  // const scrollToComponent = ( id ) => {
  //   window.scrollTo({
  //     top: scrollTo.current.offSetTop,
  //     behavior: 'smooth'
  //   })
  // }
  

  // useEffect(() => {
    //   scrollToComponent(scrollTo)
  // }, [])
  // const [component, setComponent] = useState(null)
  // useEffect(() => {
  //   setComponent(
      
  //   )
  // }, [ slider ])

  return (
    <>
      <figure
    // id={ username } 
    // ref={ goToComponent }
    className={`modal__image__container `}>
      

      <LazyLoadImage 
        // effect="opacity"
        className={`modal--image ${animation}`} src={ urls.regular} alt="" />
      {/* <h3 className="likes">likes: { likes } <LikeIcon className="like--icon"/></h3> */}
      {/* <LikeIcon /> */}
      {/* <figcaption 
        className="image--description"
        style={{ borderTop: `3px solid ${color}` }}
      >{ description }</figcaption> */}
      <h2 className="image--position">{ slider + 1 } / { data.length }</h2>
    </figure>
    </>
  )
}
