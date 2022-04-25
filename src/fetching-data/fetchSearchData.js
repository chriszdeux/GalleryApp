import { apiKey, apiKey2 } from "./ip-key";



const random = Math.floor(Math.random() * 100) + 1
let key = ''
if(random%2 === 0) {
  key = apiKey2
} else {
  key = apiKey
}


const mainUrl =`https://api.unsplash.com/search/photos?client_id=${key}&per_page=30&query=`;

export const fetchSearchData = async( search ) => {
  // debugger
  try {

      // const cleanSearch  = search.trim().replace(/\s/g, '-')

      const response = await fetch(`${ mainUrl }${ search }`)
      const { results } = await response.json()
    // debugger
    const data = results.map(item => {
      return {
        // next_page: counterPage + 1,
        // position: temp++, ,6
        id: item.id,
        color: item.color,
        blur_hash: item.blur_hash,
        description: item.description,
        alt_description: item.alt_description,
        likes: item.likes,
        created: item.created_at,
        urls: {
          thumb: item.urls.thumb,
          small: item.urls.small,
          regular: item.urls.regular,
          full: item.urls.full,
          raw: item.urls.raw,
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
        checked: false,
      }
    })
      // debugger
    return data
  // return undefined
  // return undefined
} catch (error) {
  
  // debugger
    return error
  }
}