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
          <Route path='/Wardrobes/wardrobe1' element={<Product_page Id={19} />}/>
          <Route path='/Wardrobes/wardrobe2' element={<Product_page Id={20} />}/>
          <Route path='/Wardrobes/wardrobe3' element={<Product_page Id={21} />}/>
          <Route path='/Wardrobes/wardrobe4' element={<Product_page Id={22} />}/>
          <Route path='/Wardrobes/wardrobe5' element={<Product_page Id={23} />}/>
          <Route path='/Wardrobes/wardrobe6' element={<Product_page Id={24} />}/>
          <Route path='/Lamps/lamp1' element={<Product_page Id={25} />}/>
          <Route path='/Lamps/lamp2' element={<Product_page Id={26} />}/>
          <Route path='/Lamps/lamp3' element={<Product_page Id={27} />}/>
          <Route path='/Lamps/lamp4' element={<Product_page Id={28} />}/>
          <Route path='/Lamps/lamp5' element={<Product_page Id={29} />}/>
          <Route path='/Lamps/lamp6' element={<Product_page Id={30} />}/>
          <Route path='/Dinings/dining1' element={<Product_page Id={31} />}/>
          <Route path='/Dinings/dining2' element={<Product_page Id={32} />}/>
          <Route path='/Dinings/dining3' element={<Product_page Id={33} />}/>
          <Route path='/Dinings/dining4' element={<Product_page Id={34} />}/>
          <Route path='/Dinings/dining5' element={<Product_page Id={35} />}/>
          <Route path='/Dinings/dining6' element={<Product_page Id={36} />}/>
          <Route path="*" element={<Error/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
