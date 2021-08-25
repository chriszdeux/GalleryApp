import React from 'react';
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

export const GalleryApp = () => {
  return (
    <>
      <AppRouter />
    </>
  )
}


