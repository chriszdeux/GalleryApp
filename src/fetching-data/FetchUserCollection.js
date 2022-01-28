
export const FetchUserCollection = async ( id ) => {
  const urlCollections = `https://api.unsplash.com/collections/${id}/photos?client_id=_epala6bzfchMcieAG_MshzIQo_8kapeQE5QRsfiw-g&per_page=30`;

  const response = await fetch(urlCollections);
  const data = await response.json()
  // debugger
  // debugger
  const collectionData = data.map((item, index) => {
    return {
      position: index,
      id: item.id,
      created: item.created_at,
      color: item.color,
      blur_hash: item.blur_hash,
      description: item?.description,
      alt_description: item.alt_description,
      // total_photos: item.total_photos,
      urls: {
        thumb: item.urls.thumb,
        small: item.urls.small,
        regular: item.urls.regular,
        full: item.urls.full,
        raw: item.urls.raw,
      },
      checked: false,

    }
  })

  return collectionData

}