import { useEffect, useRef, useState } from "react"
import { fetchSearchData } from "../../fetching-data/fetchSearchData";

export const useFetchSearch = ( search ) => {
  const isMounted = useRef(true)
  const [searchData, setSearchData] = useState({
    loading: true,
    error: false,
    data: [],
  });

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [  ])
  // debugger
  useEffect(() => {
    fetchSearchData(search)
    .then(item => {
        // debugger
        if(item === undefined) {
          // debugger
          setSearchData({
            loading: false,
            error: true,
            data: []
          })
        } else if(isMounted.current) {
          // debugger
          setSearchData({
            loading: false,
            error: false, 
            data: item
          })
        }
      })
  }, [ search ])

  return searchData
}