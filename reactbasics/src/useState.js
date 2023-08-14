import './App.css';
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
 
function App() {
  // syntax -- const [xyz,setXyz]= useState(abc) -- here value of xyz is abc (initial value) and to change its value, we pass in the setXyz in useState which can be a return value at the end of a function etc.


  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <header>
        <h1>Counter App Using State / hooks</h1>
      </header>
      <h2>Current Value of Count is {count}</h2>
      <button className='btn btn-info' onClick={()=>{setCount(0)}}>Reset Counter</button>
      <button className='mx-2 btn-success btn' onClick={()=>{setCount(count >=10 ? 10 : count+1)}}>Increase Counter</button>
      <button className='btn btn-danger' onClick={()=>{setCount(count <= -10 ? -10 : count - 1)}}>Decrease Counter</button>
    </div>
  );
}

export default App;
