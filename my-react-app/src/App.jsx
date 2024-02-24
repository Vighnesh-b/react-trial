import React from 'react';
import Home from './Home_page/Home';
import Error from './Error';
import Chairs from './Chairs/Chairs';
import Sofas from './Sofas/Sofas';
import Beds from './Beds/Beds';
import Wardrobes from './Wardrobes/Wardrobes';
import Lamps from './Lamps/Lamps';
import Dinings from './Dinings/Dinings';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import MainHeader from './Home_page/MainHeader';
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
import Dining1 from './Dinings/dining1';
import Dining2 from './Dinings/dining2';
import Dining3 from './Dinings/dining3';
import Dining4 from './Dinings/dining4';
import Dining5 from './Dinings/dining5';
import Dining6 from './Dinings/dining6';
import Login from './LoginPage/login';
import SignUp from './LoginPage/signup';

import Product_page from './Product_info/Product_page';

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
          <Route path='/Dinings' element={<Dinings/>}/>
          <Route path='/Chairs/chair1' element={<Product_page Id={1} />}/>
          <Route path='/Chairs/chair2' element={<Product_page Id={2} />}/>
          <Route path='/Chairs/chair3' element={<Product_page Id={3} />}/>
          <Route path='/Chairs/chair4' element={<Product_page Id={4} />}/>
          <Route path='/Chairs/chair5' element={<Product_page Id={5} />}/>
          <Route path='/Chairs/chair6' element={<Product_page Id={6} />}/>
          <Route path='/Sofas/sofa1' element={<Product_page Id={7} />}/>
          <Route path='/Sofas/sofa2' element={<Product_page Id={8} />}/>
          <Route path='/Sofas/sofa3' element={<Product_page Id={9} />}/>
          <Route path='/Sofas/sofa4' element={<Product_page Id={10} />}/>
          <Route path='/Sofas/sofa5' element={<Product_page Id={11} />}/>
          <Route path='/Sofas/sofa6' element={<Product_page Id={12} />}/>
          <Route path='/Beds/bed1' element={<Product_page Id={13} />}/>
          <Route path='/Beds/bed2' element={<Product_page Id={14} />}/>
          <Route path='/Beds/bed3' element={<Product_page Id={15} />}/>
          <Route path='/Beds/bed4' element={<Product_page Id={16} />}/>
          <Route path='/Beds/bed5' element={<Product_page Id={17} />}/>
          <Route path='/Beds/bed6' element={<Product_page Id={18} />}/>
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
          <Route path='/Dinings/dining1' element={<Dining1/>}/>
          <Route path='/Dinings/dining2' element={<Dining2/>}/>
          <Route path='/Dinings/dining3' element={<Dining3/>}/>
          <Route path='/Dinings/dining4' element={<Dining4/>}/>
          <Route path='/Dinings/dining5' element={<Dining5/>}/>
          <Route path='/Dinings/dining6' element={<Dining6/>}/>
          <Route path="*" element={<Error/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
