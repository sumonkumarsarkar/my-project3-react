import { useEffect, useState } from "react"

export default function Friends(){


  const [set, setFriends]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json)
    .then(data=>setFriends(data))
  }, [])

    return(
        <div>
            <h2>Friends:{set.length}</h2>
        </div>
    )
}