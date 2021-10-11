import React, { useEffect, useReducer, useState } from 'react';
import photo from '../src/utils/temp/photo.jpeg';
import photo2 from '../src/utils/temp/photo.jpg';
//ICONS

import { BiDislike as DislikeIcon, BiLike as LikeIcon  } from 'react-icons/bi';
// import '../utils/icons';
import { AiFillCloseSquare as CloseIcon } from 'react-icons/ai';
import { MdCollections as CollectionIcon } from 'react-icons/md';
import { GoFileSymlinkFile as LinksIcon } from 'react-icons/go';
import { RiArrowLeftSLine as Left, RiArrowRightSLine as Right } from 'react-icons/ri'

import { Header } from './components/header/Header';
import { Main } from "./components/main/Main";
import { MainGallery } from "./components/main/MainGallery";
import { UserPage } from "./components/user-page/UserPage";
import { ImageInfo } from "./components/modal/ImageInfo";
import { AppRouter } from './router/AppRouter';
import { MainData } from './fetching-data/FetchData';
import { useMainFetch } from './components/hooks/useFetchData';
import { DataContext } from './components/context/DataContext';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'animate.css'
import { useFetchUser } from './components/hooks/useFetchUser';
import { ImagesReducer } from './components/images-reducer/ImagesReducer'

const mediaQueries = {
  tablet: '(min-width: 768px)',
  tablet_hd: '(min-width: 1024px)',
  desk: '(min-width: 1680px)',
  desk_hd: '(min-width: 1920px)',
  full_hd: '(min-width: 2048px)',
}

const randomMainPage = Math.floor(Math.random() * 100);


export const GalleryApp = () => {
  const { data, loading } = useMainFetch(randomMainPage);

  const [userProfile, setUserProfile] = useState('')
  // debugger
  const  {data: dataUser, loading: userLoading} = useFetchUser(userProfile);
  const [dataCollection, setDataCollection] = useState({
    data: [],
    load: true
  })

  const init = () => {
    return JSON.parse(localStorage.getItem('favImages')) || []
  }
  
  const [favImages, dispatch] = useReducer(ImagesReducer, [], init)

  useEffect(() => {
    localStorage.setItem('favImages', JSON.stringify(favImages))
  }, [ favImages ])
  // debugger

  console.log(favImages)
  return (
    <>
    <DataContext.Provider 
      value={{ 
        data,
        loading,
        userLoading,
        mediaQueries,
        userProfile,
        setUserProfile,
        dataUser,
        dataCollection,
        setDataCollection,
        favImages,
        dispatch, 
      }}
  >
      <AppRouter />
    </DataContext.Provider>
    </>
  )
}


