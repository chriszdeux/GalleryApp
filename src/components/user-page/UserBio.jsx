import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export const UserBio = () => {
  const { dataUser } = useContext(DataContext)
  const { username, name, twitter, portafolio, bio, location, instagram } = !!dataUser && dataUser

  return (
    <ul className="user__personal__info">
      <li className="list--item">{ username }</li>
      <li className="list--item">{ name }</li>
      <li className="list--item">{ location }</li>
      <li className="list--item">{ bio }</li>
      <li className="list--item">{ portafolio }</li>
      <li className="list--item">{ instagram }</li>
      <li className="list--item">{ twitter }</li>
    </ul>
  )
}
