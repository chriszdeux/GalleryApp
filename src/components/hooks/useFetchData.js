import { useEffect, useRef, useState } from "react"
import { MainData } from "../../fetching-data/FetchData"

export const useMainFetch = (initialPage) => {
  const isMounted = useRef(true)
  const [myData, setMyData] = useState({
    data: [],
    loading: true,
    error: false
  })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [  ])
  useEffect(() => {
    MainData(initialPage)
      .then(item => {
        if(item === undefined){
          setMyData({
            data: [],
            loading: false,
            error: true
          })
        } else if( isMounted.current ){
          setMyData({
            data: item,
            loading: false,
            error: false
          })
        }
      })
  }, [ initialPage ])

  return myData
}