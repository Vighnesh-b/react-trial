import React from 'react';
import Home from './Home_page/Home'
import Error from './Error'
import Chair from './Chairs/Chairs'
import {
  BrowserRouter, Route,Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainHeader from './Home_page/MainHeader';
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='/Chairs' element={<Chair/>}/>
          <Route path="*" element={<Error/>} />
        </Route>        
      </Routes>
    </BrowserRouter>
        
  );
}

export default App
