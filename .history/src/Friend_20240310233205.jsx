
import .
import { useEffect, useState } from "react"

export default function Friend(){


  const [friends, setFriends]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriends(data))
  }, [])

    return(
        <div className="box">
            <h2>Friends:{friends.length}</h2>
        </div>
    )
}