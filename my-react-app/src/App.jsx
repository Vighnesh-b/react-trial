import React from 'react';
import Home from './Home_page/Home';
import Error from './Error';
import Chairs from './Chairs/Chairs';
import Sofas from './Sofas/Sofas';
import Beds from './Beds/Beds';
import Wardrobes from './Wardrobes/Wardrobes';
import Lamps from './Lamps/Lamps';
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
import Wardrobe1 from './Wardrobes/wardrobe1';
import Wardrobe2 from './Wardrobes/wardrobe2';
import Wardrobe3 from './Wardrobes/wardrobe3';
import Wardrobe4 from './Wardrobes/wardrobe4';
import Wardrobe5 from './Wardrobes/wardrobe5';
import Wardrobe6 from './Wardrobes/wardrobe6';
import Lamp1 from './Lamps/lamp1';
import Lamp2 from './Lamps/lamp2';
import Lamp3 from './Lamps/lamp3';
import Lamp4 from './Lamps/lamp4';
import Lamp5 from './Lamps/lamp5';
import Lamp6 from './Lamps/lamp6';
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
          <Route path='/Wardrobes' element={<Wardrobes/>}/>
          <Route path='/Lamps' element={<Lamps/>}/>
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
          <Route path='/Wardrobes/wardrobe1' element={<Wardrobe1/>}/>
          <Route path='/Wardrobes/wardrobe2' element={<Wardrobe2/>}/>
          <Route path='/Wardrobes/wardrobe3' element={<Wardrobe3/>}/>
          <Route path='/Wardrobes/wardrobe4' element={<Wardrobe4/>}/>
          <Route path='/Wardrobes/wardrobe5' element={<Wardrobe5/>}/>
          <Route path='/Wardrobes/wardrobe6' element={<Wardrobe6/>}/>
          <Route path='/Lamps/lamp1' element={<Lamp1/>}/>
          <Route path='/Lamps/lamp2' element={<Lamp2/>}/>
          <Route path='/Lamps/lamp3' element={<Lamp3/>}/>
          <Route path='/Lamps/lamp4' element={<Lamp4/>}/>
          <Route path='/Lamps/lamp5' element={<Lamp5/>}/>
          <Route path='/Lamps/lamp6' element={<Lamp6/>}/>
          
          <Route path="*" element={<Error/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
