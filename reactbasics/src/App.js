import '../src/App.css'
import Button from './Button';

function App() {
  return (
    <div className="App">
      {/* Aligning the text to center -- main task is to view how the style tag is applied -- style = {{}} && inside brackets -- textAlign : '' */}
      <h1 style={{textAlign:"center"}}>helo World</h1> 
      <Button title='App-Store'/>
      <Button title='Play-Store'/>
      {/* <button className='button'>Play-Store</button> 
      <button className='button'>App-Store</button>  */}
    </div>
  );
}

export default App;
