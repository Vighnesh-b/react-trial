import React from 'react';
import Home from './Home_page/Home';
import Error from './Error';
import Chairs from './Chairs/Chairs';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import MainHeader from './Home_page/MainHeader';
import Chair1 from './Chairs/Chair1';
import Login from './LoginPage/login';
import SignUp from './LoginPage/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='/Chairs' element={<Chairs/>}/>
          <Route path='/Chairs/Chair1' element={<Chair1/>}/>
          <Route path="*" element={<Error/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
