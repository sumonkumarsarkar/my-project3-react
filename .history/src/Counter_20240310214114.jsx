import { useState } from "react"

export default function Counter(){
    const [count, setCount]=useState(0)
const handleEvent=()=>{

}

return (
    <div style={{border:'2px solid yellow'}}>
        <h3>Counter:{count}</h3>
        <button onClick={()=>{handleEvent}}>Add</button>
    </div>
)
}