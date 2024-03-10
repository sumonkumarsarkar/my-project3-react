import { useState } from "react"

export default function Counter(){
    const [count, setCount]=useState(0)
return (
    <div style={{border:2px sloid yellow}}>
        <h3>Counter:{count}</h3>
        <button>Add</button>
    </div>
)
}