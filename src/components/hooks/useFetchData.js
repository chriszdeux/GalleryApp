import { useEffect, useState } from "react"
import { MainData } from "../../fetching-data/FetchData"

export const useMainFetch = (randomPage) => {
  const [myData, setMyData] = useState({
    data: [],
    loading: true,
    error: false
  })

  useEffect(() => {
    MainData(randomPage)
      .then(item => {
        setMyData({
          data: item,
          loading: false,
          error: false
        })
      })
  }, [ randomPage ])

  return myData
}