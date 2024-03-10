
import './Friend.css'

export default function Friends({friend}){
    console.log(friend)
    const {name, email}=friend
  
    return(
        <div className='box2'>
            <h3>Name:{name}</h3>
            <p>Email:{email}</p>
        </div>
    )
}