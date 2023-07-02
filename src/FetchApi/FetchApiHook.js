import React, {useState, useEffect} from 'react'
import Profile from './Profile'

const FetchApiHook = (props) => {

  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:39635/Profile')

      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [])

  return (
      <div>
        {!data ||  <Profile user={data} />}
      </div>
  )
  
}



export default FetchApiHook;
