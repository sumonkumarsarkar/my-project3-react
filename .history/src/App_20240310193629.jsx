
import './App.css'

function App() {
  
function handleClick(){
  alert('button click')
}
const handleClick2=()=>{
  alert('button2 click')
}
const addToFive=()=>{
  alert('button2 click')
}
  return (
    <>
      
      <h3>React core concepts</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={()=>{
        alert('button3 clicked')
      }}>Click Me3</button>
      
     
    </>
  )
}

export default App
