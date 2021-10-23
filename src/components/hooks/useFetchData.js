import { useEffect, useState } from "react"
import { MainData } from "../../fetching-data/FetchData"

export const useMainFetch = (initialPage) => {
  const [myData, setMyData] = useState({
    data: [],
    loading: true,
    error: false
  })

  useEffect(() => {
    MainData(initialPage)
      .then(item => {
        setMyData({
          data: item,
          loading: false,
          error: false
        })
      })
  }, [ initialPage ])

  return myData
}