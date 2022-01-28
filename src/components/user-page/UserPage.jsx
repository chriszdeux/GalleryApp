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
import { Link, useHistory } from 'react-router-dom';
import { LoadingComponent } from '../loading/LoadingComponent';
export const UserPage = ({history}) => {
  // debugger
  const { goBack } = history
  const { showComponent, handleShowComponent } = useShowComponent(true);
  // debugger
  
  const { dataUser, userLoading, userProfileData } = useContext(DataContext)
  const back = useHistory()
  // const data = useFetchUser(userProfile);
  // const {listPhotos} = data
  // debugger
  const handleGoBack = (e) => {
    // e.preventDefault();
    // debugger
    // debugger
    back.push('/', null)
  }
  // debugger
  return (
    <section className="user__page animate__animated animate__fadeIn">
      {/* <CloseIcon className="close--icon" /> */}
      {/* <Link to={ handleGoBack }> */}
        <BackIcon className="back--icon" onClick={ handleGoBack }/>
      {/* <Link to={ handleGoBack }>
      </Link> */}
        
        {
          userLoading 
          ? <LoadingComponent />
          :
            <div className="container-9">
            
              <UserInfo />
              <UserPortafolio  values={ {handleShowComponent, showComponent} } />

            
            </div>
        }
    
        {
          showComponent 
          ? <PhotosGrid  />
          : <Collections />               
        }
      </section>
  )
}
