// import logo from './logo.svg';
import './App.css';
//import User from './User';
import React, { useState } from 'react'

function App() {
  let [data,setData] = useState(0);
  // function Apple(){
  //   return React.createElement('h1',null,'This Compoent is crated')
  // }
  function updateData(){
    setData(data+1)
  }
  console.warn('--------------------------------------');
  return (
    <div className="App">
      <header className="App-header">
        <h4>My Name is {data}</h4>
      <button onClick={updateData}>Update Data</button>
        {/* <Apple/> */}  
      </header>
      
    </div>
  );
}
export default App;
