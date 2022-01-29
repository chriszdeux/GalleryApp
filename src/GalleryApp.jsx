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
import { userSaveReducer } from './components/images-reducer/userSaveReducer';

const mediaQueries = {
  tablet: '(min-width: 768px)',
  tablet_hd: '(min-width: 1024px)',
  desk: '(min-width: 1680px)',
  desk_hd: '(min-width: 1920px)',
  full_hd: '(min-width: 2048px)',
}

const transitionAnimation = {
  fade_in: 'animate__animated animate__fadeIn',
    fade_out: 'animate__animated animate__fadeOut',
    fade_up: 'animate__animated animate__fadeInUp',
    fade_down: 'animate__animated animate__fadeIn',
    fade_left: 'animate__animated animate__fadeInLeft',
    fade_right: 'animate__animated animate__fadeInRight',
}

const randomMainPage = Math.floor(Math.random() * 100);


export const GalleryApp = () => {
  const mainData = useMainFetch();
  const [handleModal, setHandleModal] = useState()
  
  const masonryOptions = {
    fitWidth: false,
    columnWidth: 300,
    gutter: 30,
    itemSelector: ".photo-item",
    containerStyle: { 
      display: 'flex',
      justifyContent: 'center'
     },
     transitionDuration: 2,
     percentPosition: 50,
  };
  
  const [userProfile, setUserProfile] = useState('')
  // debugger
  const  userData = useFetchUser(userProfile);
  
  const [dataCollection, setDataCollection] = useState({
    data: [],
    load: true
  })

  const init = () => {
    return JSON.parse(localStorage.getItem('favImages')) || []
  }
  // const init2 = () => {
  //   return JSON.parse(localStorage.getItem('user-saved')) || {}
  // }
  
  const [favImages, dispatch] = useReducer(ImagesReducer, [], init)
  // const [handle_user_data, dispatch2] = useReducer(userSaveReducer, {}, init2)
  
  useEffect(() => {
    localStorage.setItem('favImages', JSON.stringify(favImages))
  }, [ favImages ])
  // useEffect(() => {
  //   localStorage.setItem('user-saved', JSON.stringify(handle_user_data))
  // }, [ favImages ])
  // debugger
  const [handleData, setHandleData] = useState([])
  const [switchMenu, setSwitchMenu] = useState(true)
  const handleEachData = ( data ) => {
    // debugger
    setHandleData(data)
  }
  const [inputValue, setInputValue] = useState({
    search: ''
  })

  // console.log(favImages)
  return (
    <>
    <DataContext.Provider 
      value={{ 
        mainData,
        userData,
        mediaQueries,
        userProfile,
        setUserProfile,
        dataCollection,
        setDataCollection,
        favImages,
        // handle_user_data,
        dispatch, 
        // dispatch2, 
        masonryOptions,
        transitionAnimation,
        handleData, 
        handleEachData,
        switchMenu,
        setSwitchMenu,
        inputValue, setInputValue
      }}
  >
      <AppRouter />
    </DataContext.Provider>
    </>
  )
}


