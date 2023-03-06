import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ComA from './components/ComA';
import { useState,createContext } from 'react';

const Appdata = createContext();
const Namecontext =  createContext();
function App() {
  const [data ,setData] = useState("Data from App.js")
  const [name,setName] = useState({name:"Saroj Kumar Pandey",age:"35"})
  return (
    <div className="App">
      <Appdata.Provider value={{data}}> 
      <Namecontext.Provider value={{name}}>
          <Header/>
          <Home/>
          <ComA data={data}/>
        </Namecontext.Provider>
      </Appdata.Provider>
    </div>
  );
}

export default App;
export {Appdata,Namecontext}
