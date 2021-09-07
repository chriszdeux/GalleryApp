import { useEffect, useState } from "react"
import { FetchUserCollection } from "../../fetching-data/FetchUserCollection"

export const useFetchCollectionImages = ( id ) => {
  const [collectionData, setCollectionData] = useState({
    dataImagesCollection: [],
    loading: true,
    error: false
  })

  useEffect(() => {
    FetchUserCollection( id )
      .then(item => {
        setCollectionData({
          dataImagesCollection: item,
          loading: false,
          error: false
        })
      })
  }, [ id ])
  // debugger
  return collectionData
}