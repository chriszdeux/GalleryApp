import React from 'react'
import { BiDislike as DislikeIcon, BiLike as LikeIcon  } from 'react-icons/bi';
import { AiFillCloseSquare as CloseIcon } from 'react-icons/ai';
import { MdCollections as CollectionIcon } from 'react-icons/md';
import { GoFileSymlinkFile as LinksIcon } from 'react-icons/go';

import photo from '../../utils/temp/photo.jpg'
export const UserPage = () => {
  return (
    <section className="modal">
      <CloseIcon className="close--icon" />
        
        <div className="container-9">
        <div className="user__info">
          <figure className="user__picture">
            <img className="user--picture--img" src={ photo } alt="" />
          </figure>
          <ul className="user__stats">
            <li className="user--item">265 <span className="user--item--name">photos</span></li>
            <li className="user--item">12 <span className="user--item--name">collections</span></li>
            <li className="user--item">65223 <span className="user--item--name">likes</span></li>
          </ul>
        </div>
          <ul className="user__personal__info">
            <li className="list--item">Joseph Joostar</li>
            <li className="list--item">tokyio japan</li>
            <li className="list--item">love animals and stands</li>
            <li className="list--item">reach my work at www.joostar.com.jp</li>
          </ul>
          <div className="user__portafolio">
            <CollectionIcon className="collection--icon" />
            <LinksIcon className="links--icon" />
            {/* <LinksIcon className="links--icon" /> */}
          </div>


        <div className="photos__grid ">
            <figure className="image__container">
              <img className="grid--image" src={ photo } alt="" />

              <LikeIcon className="like--icon"/>
              {/* <div className="card--ribbon">New Photo</div> */}
              {/* <div className="icons__buttons">
                <LikeIcon className="like--icon" />
                <DislikeIcon className="dislike--icon" />
              </div> */}
            </figure>
          
        </div>
        </div>

      </section>
  )
}
