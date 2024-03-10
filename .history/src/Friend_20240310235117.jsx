

import { useEffect, useState } from "react"
import Friends from "./Friends"

export default function Friend(){


  const [friends, setFriends]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriends(data))
  }, [])

    return(
        <div className="box2">
            <h2>Friends:{friends.length}</h2>

            {
              friends.map(friend=> <Friends friend={friend}></Friends>)
            }
        </div>
    )
}