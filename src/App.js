import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Login from './Login';
import Register from "./Register"


function App(){
  
    return (
      <div>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="register/*" element={<Register/>} />

            </Routes>
        </BrowserRouter>
      </div>
    );
  
}

export default App;
