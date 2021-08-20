import React from 'react';
import photo from '../utils/temp/photo.jpg';
import photo2 from '../styles/photo2.jpeg';
//ICONS

import { BiDislike as DislikeIcon, BiLike as LikeIcon  } from 'react-icons/bi';
// import '../utils/icons';
import { AiFillCloseSquare as CloseIcon } from 'react-icons/ai';
import { MdCollections as CollectionIcon } from 'react-icons/md';
import { GoFileSymlinkFile as LinksIcon } from 'react-icons/go';
import { RiArrowLeftSLine as Left, RiArrowRightSLine as Right } from 'react-icons/ri'
import { Header } from './header/Header';
import { Main } from './main/Main';
import { UserPage } from './user-page/UserPage';




export const GalleryApp = () => {
  return (
    <>
      
      {/* <Header />
      <Main /> */}
      <UserPage />


      


      


      {/* <nav className="mobile__navbar">
        <ul className="mobile__menu">
          <li className="menu--list">my library</li>
        </ul>
      </nav> */}
    </>
  )
}


