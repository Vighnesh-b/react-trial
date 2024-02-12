import React from 'react';
import Home from './Home_page/Home';
import Error from './Error';
import Chairs from './Chairs/Chairs';
import Sofas from './Sofas/Sofas';
import Beds from './Beds/Beds';
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
import Sofa2 from './Sofas/sofa2';
import Sofa3 from './Sofas/sofa3';
import Sofa4 from './Sofas/sofa4';
import Sofa5 from './Sofas/sofa5';
import Sofa6 from './Sofas/sofa6';
import Bed1 from './Beds/bed1';
import Bed2 from './Beds/bed2';
import Bed3 from './Beds/bed3';
import Bed4 from './Beds/bed4';
import Bed5 from './Beds/bed5';
import Bed6 from './Beds/bed6';
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
          <Route path='/Beds' element={<Beds/>}/>
          <Route path='/Chairs/Chair1' element={<Chair1/>}/>
          <Route path='/Chairs/chair2' element={<Chair2/>}/>
          <Route path='/Chairs/chair3' element={<Chair3/>}/>
          <Route path='/Chairs/chair4' element={<Chair4/>}/>
          <Route path='/Chairs/chair5' element={<Chair5/>}/>
          <Route path='/Chairs/chair6' element={<Chair6/>}/>
          <Route path='/Sofas/sofa1' element={<Sofa1/>}/>
          <Route path='/Sofas/sofa2' element={<Sofa2/>}/>
          <Route path='/Sofas/sofa3' element={<Sofa3/>}/>
          <Route path='/Sofas/sofa4' element={<Sofa4/>}/>
          <Route path='/Sofas/sofa5' element={<Sofa5/>}/>
          <Route path='/Sofas/sofa6' element={<Sofa6/>}/>
          <Route path='/Beds/bed1' element={<Bed1/>}/>
          <Route path='/Beds/bed2' element={<Bed2/>}/>
          <Route path='/Beds/bed3' element={<Bed3/>}/>
          <Route path='/Beds/bed4' element={<Bed4/>}/>
          <Route path='/Beds/bed5' element={<Bed5/>}/>
          <Route path='/Beds/bed6' element={<Bed6/>}/>
          <Route path="*" element={<Error/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
