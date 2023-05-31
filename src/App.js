import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks,setNayoks]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setNayoks(data));
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
        nayoks.map(nayok=> <Nayok id={nayok.id} key={nayok.id} title={nayok.title} body={nayok.body}></Nayok>)
         }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      </header>
    </div>
  );
}

function Nayok(props){
  const comStyle={
    border:'5px solid blue',
    margin:'5px'
  }
  return(
    <div style={comStyle}>
      <h1>Company id:{props.id}</h1>
      <h1> Employ title:{props.title}</h1>
      <h1> some body:{ props.body}</h1>

    </div>
  )
}

export default App;
