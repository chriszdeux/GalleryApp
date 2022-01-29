import React, { useContext, useEffect } from 'react'
import { StatsUser } from './StatsUser'

import  photo  from '../../utils/temp/photo.jpeg'
import { UserBio } from './UserBio'
import { DataContext } from '../context/DataContext'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useHistory } from 'react-router-dom'
export const UserInfo = () => {
  // debugger
  const { userData:{ data }, handle_user_data } = useContext(DataContext)
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 
  const history = useHistory()
  const { profile_image  } = !!data && data
  const { small, medium, large } = !!profile_image && profile_image
  // const { profile_image:{small, medium, large} } = data
  // debugger
  
  return (
    <>
    <div className="user__info">
      <figure className="user__picture">
        {
          medium &&
        <LazyLoadImage className="user--picture--img" src={ medium } alt="" />
        }
      </figure>
      <StatsUser />
    </div>
    <UserBio />
    </>
  )
}
