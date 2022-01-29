import { useEffect, useRef, useState } from "react"
import { FetchUserCollection } from "../../fetching-data/FetchUserCollection"

export const useFetchCollectionImages = ( id ) => {
  const [collectionData, setCollectionData] = useState({
    dataImagesCollection: [],
    loading: true,
    error: false
  })
  const iseMounted = useRef(true)
  useEffect(() => {
    return () => {
      iseMounted.current = false
    }
  }, [  ])
  useEffect(() => {
    FetchUserCollection( id )
      .then(item => {
        if(item === undefined){
          setCollectionData({
            dataImagesCollection: [],
            loading: false,
            error: true
          })
        } else if( iseMounted.current ) {
          setCollectionData({
            dataImagesCollection: item,
            loading: false,
            error: false
          })
        }
      })
  }, [ id ])
  // debugger
  return collectionData
}