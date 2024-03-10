
import './App.css'
import Counter from './Counter'

function App() {
  
function handleClick(){
  alert('button click')
}
const handleClick2=()=>{
  alert('button2 click')
}
const addToFive=(num)=>{
  alert(num+5)
}
  return (
    <>
      
      <h3>React core concepts</h3>
      <Team></Team>
      <Counter ></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={()=>{
        alert('button3 clicked')
      }}>Click Me3</button>
      <button onClick={()=>{addToFive(5)}}>Click Me4</button>
     
    </>
  )
}

export default App
