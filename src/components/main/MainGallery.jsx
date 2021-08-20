import React from 'react'

import { BiDislike as DislikeIcon, BiLike as LikeIcon  } from 'react-icons/bi';
import photo from '../../utils/temp/photo.jpg';

export const MainGallery = () => {
  return (
    <section className="images__container">
         
          <article className="card">
            <figure className="small__card">
              <img className="small--image--card" src={ photo } alt="" />
              <div className="card--ribbon">New Photo</div>
              <div className="icons__buttons">
                <LikeIcon className="like--icon" />
                <DislikeIcon className="dislike--icon" />
              </div>
            </figure>
            <div className="image__info">
              <h4 className="sub--title--card">Some text</h4>
              <h3 className="title--card">Picture Title</h3>
              <p className="info--card">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ducimus eveniet</p>
            </div>
          </article>
          <article className="card">
            <figure className="small__card">
              <img className="small--image--card" src={ photo } alt="" />
              <div className="card--ribbon">New Photo</div>
              <div className="icons__buttons">
                <LikeIcon className="like--icon" />
                <DislikeIcon className="dislike--icon" />
              </div>
            </figure>
            <div className="image__info">
              <h4 className="sub--title--card">Some text</h4>
              <h3 className="title--card">Picture Title</h3>
              <p className="info--card">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ducimus eveniet</p>
            </div>
          </article>
          <article className="card">
            <figure className="small__card">
              <img className="small--image--card" src={ photo } alt="" />
              <div className="card--ribbon">New Photo</div>
              <div className="icons__buttons">
                <LikeIcon className="like--icon" />
                <DislikeIcon className="dislike--icon" />
              </div>
            </figure>
            <div className="image__info">
              <h4 className="sub--title--card">Some text</h4>
              <h3 className="title--card">Picture Title</h3>
              <p className="info--card">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ducimus eveniet</p>
            </div>
          </article>
      </section>
  )
}
