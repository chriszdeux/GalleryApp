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
export const UserPage = () => {

  const { showComponent, handleShowComponent } = useShowComponent(true);
  // debugger
  const { dataUser, userLoading } = useContext(DataContext)
  // const { data, loading } = useFetchUser(userProfile);
  // const {listPhotos} = data
  // debugger
  return (
    <section className="modal">
      <CloseIcon className="close--icon" />
        
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
