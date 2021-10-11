import React, { useContext, useState } from 'react'
import { AiFillCloseSquare as CloseIcon } from 'react-icons/ai';
import { MdCollections as CollectionIcon } from 'react-icons/md';
import { GoFileSymlinkFile as LinksIcon } from 'react-icons/go';

import photo from '../../utils/temp/photo.jpg'
import { UserInfo } from './UserInfo';
import { UserPortafolio } from './UserPortafolio';
import { PhotosGrid } from './PhotosGrid';
import { Collections } from './Collections';
import { useShowComponent } from '../hooks/useShowComponent';
import { DataContext } from '../context/DataContext';
import { useFetchUser } from '../hooks/useFetchUser';
import { IoArrowBackSharp as BackIcon } from 'react-icons/io5';
import { Link } from 'react-router-dom';
export const UserPage = () => {

  const { showComponent, handleShowComponent } = useShowComponent(true);
  // debugger
  const { dataUser, userLoading } = useContext(DataContext)
  // const { data, loading } = useFetchUser(userProfile);
  // const {listPhotos} = data
  // debugger
  return (
    <section className="modal animate__animated animate__fadeIn">
      {/* <CloseIcon className="close--icon" /> */}
      <Link to="/">
        <BackIcon className="close--icon" />
      </Link>
        
        {
          !userLoading &&
            <div className="container-9">
            
              <UserInfo />
              <UserPortafolio  values={ {handleShowComponent, showComponent} } />
              {
                showComponent 
                ? <PhotosGrid  />
                : <Collections />
                
              }

            
            </div>
        }

      </section>
  )
}
