import { apiKey } from "./ip-key";
import axios from "axios";
import { useEffect, useState } from "react";

const pages='30';
const mainUrl =`https://api.unsplash.com/photos?client_id=${apiKey}&per_page=${pages}&page=`;


export const MainData = async ( initialPage = 1 ) => {
  // const [mainData, setMainData] = useState([])
  // let counterPage = 1
  try {
    const response = await fetch(`${mainUrl}${initialPage}`);
    const response2 = await fetch(`${mainUrl}${initialPage + 1}`);
    const data = await response.json()
    const data2 = await response2.json()
    // debugger
    const mixData = [...data, ...data2]
    // debugger
    
    const fullData = mixData.map((item, index) => {
      // debugger
      return {
        // next_page: counterPage + 1,
        position: index, 
        id: item.id,
        color: item.color,
        blur_hash: item.blur_hash,
        description: item.description,
        alt_description: item.alt_description,
        likes: item.likes,
        created: item.created_at,
        urls: {
          thumb_image: item.urls.thumb,
          small_image: item.urls.small,
          regular_image: item.urls.regular,
          full_image: item.urls.full,
          raw_image: item.urls.raw,
        },
        user: {
          id: item.user.id,
          updated: item.user.updated_at,
          username: item.user.username,
          name: item.user.name,
          twitter: item.user.twitter_username,
          portafolio: item.user.portafolio_url,
          bio: item.user.bio,
          location: item.user.location,
          profile_image: {
            small: item.user.profile_image.small,
            medium: item.user.profile_image.medium,
            large: item.user.profile_image.large,
          },
          instagram: item.user.instagram_username,
          collections: item.user.total_collections,
          likes: item.user.total_likes,
          photos: item.user.total_photos,
        },
      }
    })
    // debugger
    // const realData = fullData.map((item, index) => {
    //   debugger
    //   return {...item, position: index}
    // })
    // let mainGalleryPictures = []
    // // debugger
    // for(let i = 0; i < 3; i++) {
      //   // debugger
      //   mainGalleryPictures.push(fullData[i])
      // }
      // debugger
    return fullData

  } catch (error) {
    console.error(error)
  }

  
}




// MainData(mainUrl)
