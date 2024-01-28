import React from 'react';
import Home from './Home_page/Home'
import Error from './Error'
import {
  BrowserRouter, Route,Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
        
  );
}

export default App
