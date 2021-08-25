import React from 'react'
import { StatsUser } from './StatsUser'

import  photo  from '../../utils/temp/photo.jpeg'
import { UserBio } from './UserBio'
export const UserInfo = () => {
  return (
    <>
    <div className="user__info">
      <figure className="user__picture">
        <img className="user--picture--img" src={ photo } alt="" />
      </figure>
      <StatsUser />
    </div>
    <UserBio />
    </>
  )
}
