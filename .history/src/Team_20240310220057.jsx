import { useState } from "react"

export default function Team(){


    const teamStyle={
        border:'2px solid red',
        background:'skyblue',
        borderRadious:'10px',
        padding:'10px',
        margin:'10px'
    }

    const [count setPlayer]=useState(0)

const playerAdd=()=>{
    const newCount=count+1;
    setPlayer(newCount)
}
    return(
        <div style={teamStyle}>
            <h3>Players:</h3>
            <button onClick={}>Add</button>
            <button>Remove</button>
        </div>
    )
}