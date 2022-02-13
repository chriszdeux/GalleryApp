import { apiKey2, apiKey3 } from "./ip-key";

const random = Math.floor(Math.random() * 100) + 1
let key = ''
if(random%2 === 0) {
  key = apiKey2
} else {
  key = apiKey3
}



export const FetchUser = async ( user ) => {
  const url = `https://api.unsplash.com/users/${user}?client_id=${key}&per_page=30`;
  const urlPhotos = `https://api.unsplash.com/users/${user}/photos?client_id=${key}&per_page=30`;
  // const urlPhotos = 
  const urlCollections = `https://api.unsplash.com/users/${user}/collections?client_id=${ key }&per_page=30`;

  // const urlPhotos = 
  
  if(user.length > 0) {
    try {
      const response = await fetch(url);
      const response2 =  await fetch(urlPhotos);
      const response3 = await fetch(urlCollections)
      
      const { id, updated_at:updated, username, name, twitter_username:twitter, portafolio_url:portafolio, bio, location, instagram_username:instagram, total_collections, total_photos, total_likes, photos, profile_image } = await response.json();

      const data = await response2.json();
      const dataCollections = await response3.json();

      
      // debugger

      // const urlCollectionPhoto = `https://api.unsplash.com/collections/${}/photos?client_id=_epala6bzfchMcieAG_MshzIQo_8kapeQE5QRsfiw-g&per_page=30`;
      const listPhotos = data.map((item, index) => {
        // debugger
        return {
          id: item.id,
          user: item.user,
          created: item.created_at,
          blur_hash: item.blur_hash,
          description: item.alt_description,
          urls: {
            thumb: item.urls.thumb,
            small: item.urls.small,
            regular: item.urls.regular,
            full: item.urls.full,
            raw: item.urls.raw,
          },
          position: index,
          checked: false,
        }
      })

      const listCollection = dataCollections.map((item, index) => {
        return {
          position: index,
          id: item.id,
          title: item.title,
          description: item.description,
          total_photos:  item.total_photos,
          preview_photos: item.preview_photos.map(item => {
            return {
              id: item.id,
              created: item.created_at,
              blur_hash: item.blur_hash,
              urls: {
                thumb: item.urls.thumb,
                small: item.urls.small,
                regular: item.urls.regular,
                full: item.urls.full,
                raw: item.urls.raw,
              }
            }
          })
        }
      })
      // debugger
      return { id, updated, username, name, twitter, portafolio, bio, location, instagram, total_collections, total_photos, total_likes, listPhotos, profile_image, listCollection }
  
      
      
    } catch (error) {
      return new Error(console.error(error))
    }
  }

}