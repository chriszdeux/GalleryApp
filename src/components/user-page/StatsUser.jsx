import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export const StatsUser = () => {
  const { dataUser } = useContext(DataContext)
  const { total_collections, total_photos, total_likes  } = !!dataUser && dataUser

  // debugger
  // const { total_likes, total_photos, total_collections  } = data
  return (
    <ul className="user__stats">
        <li className="user--item">{ total_photos } <span className="user--item--name">photos</span></li>
        <li className="user--item">{ total_collections } <span className="user--item--name">collections</span></li>
        <li className="user--item">{ total_likes } <span className="user--item--name">likes</span></li>
    </ul>
  )
}
