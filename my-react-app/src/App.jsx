import React from 'react';
import Home from './Home_page/Home';
import Error from './Error';
import Chairs from './Chairs/Chairs';
import Sofas from './Sofas/Sofas';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import MainHeader from './Home_page/MainHeader';
import Chair1 from './Chairs/Chair1';
import Chair2 from './Chairs/chair2';
import Chair3 from './Chairs/chair3';
import Chair4 from './Chairs/chair4';
import Chair5 from './Chairs/chair5';
import Chair6 from './Chairs/chair6';
import Sofa1 from './Sofas/sofa1';
import Login from './LoginPage/login';
import SignUp from './LoginPage/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='/Chairs' element={<Chairs/>}/>
          <Route path='/Sofas' element={<Sofas/>}/>
          <Route path='/Chairs/Chair1' element={<Chair1/>}/>
          <Route path='/Chairs/chair2' element={<Chair2/>}/>
          <Route path='/Chairs/chair3' element={<Chair3/>}/>
          <Route path='/Chairs/chair4' element={<Chair4/>}/>
          <Route path='/Chairs/chair5' element={<Chair5/>}/>
          <Route path='/Chairs/chair6' element={<Chair6/>}/>
          <Route path='/Sofas/sofa1' element={<Sofa1/>}/>
          <Route path="*" element={<Error/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
