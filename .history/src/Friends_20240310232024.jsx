import { useEffect, useState } from "react"

export default function Friends(){


  const [friends, setFriends]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json)
    .then(data=>setFriends(data))
  }, [])

    return(
        <div>
            <h2>Friends:{friends}</h2>
        </div>
    )
}