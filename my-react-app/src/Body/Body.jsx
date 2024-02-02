
import './Body.css';
import chair from './body-img/ch.png';
import sofa from './body-img/sf.png';

import desk from './body-img/work desk.png';
import c2_1 from '../Chairs/chair_images/c2.1.avif';
import c3_1 from '../images/sofa_images/sofas.avif';
import c4_1 from '../images/Dining_set/dining.avif';
import c5_1 from '../images/bedroom_images/bed.avif';
import c6_1 from '../images/lamps_and_lighting/lamps.avif';
import c7_1 from '../images/wardrobe_images/ward.avif';
import c8_1 from '../Chairs/chair_images/c3.1.avif';
import c9_1 from '../Chairs/chair_images/c4.1.avif';

import about from './body-img/about.png';
import '../styles/fonts.css';
import '../styles/font2.css';
import { useNavigate } from 'react-router-dom';
function Body() {

    const navigate = useNavigate();
    const goToChairs=()=>{
        navigate("/Chairs");
    };
    const goToSofas=()=>{
        navigate("/Sofas");
    };
    return (
      <>
        <div className="top-container">
                <h2 className="text-center">
                    Explore our Furniture Range
                </h2>
                <div className="row">
                    <div className="card">
                        <img src={chair} alt="Chair" className="card-image" />
                        <div className="card-text">
                            <h2>Chairs</h2>
                            <p>99+ Options, Starting from ₹2999-</p>
                            <button onClick={goToChairs}>View More</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={sofa} alt="Sofa" className="card-image" />
                        <div className="card-text">
                            <h2>Sofas</h2>
                            <p>50+ Options, Starting from ₹9999-</p>
                            <button onClick={goToSofas}>View More</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={desk} alt="Desk" className="card-image" />
                        <div className="card-text">
                            <h2>Desks</h2>
                            <p>60+ Options, Starting from ₹6999-</p>
                            <button>View More</button>
                        </div>
                    </div>                    
                </div>
            </div>
            <h2 className='text-center'>TRENDY PRODUCTS</h2>
            <div className="bottom-container">
                <div className="row">
                <div className="card">
                    <img src={c2_1} alt="" />
                    <div className="card-body">
                        <h4>Noah Velvet Arm Chair</h4>
                        <p className='text-center'>₹9000</p>
                        <button>Shop Now</button>                                                
                    </div>                                        
                </div>
                <div className="card">
                    <img src={c3_1} alt="" />
                    <div className="card-body">
                        <h4>Noah Velvet 4 Seater Sofa</h4>
                        <p className='text-center'>₹12000</p>
                        <button>Shop Now</button>                                                
                    </div>                                        
                </div>
                <div className="card">
                    <img src={c4_1} alt="" />
                    <div className="card-body">
                        <h4>Gem solid Wood Dining Chair</h4>
                        <p className='text-center'>₹13000</p>
                        <button>Shop Now</button>                                                
                    </div>                                        
                </div>
                <div className="card">
                    <img src={c5_1} alt="" />
                    <div className="card-body">
                        <h4>Yamako Queen Size Bed</h4>
                        <p className='text-center'>₹4999</p>
                        <button>Shop Now</button>                                                
                    </div>                                        
                </div>
                </div>
                <div className="row">
                <div className="card">
                    <img src={c6_1} alt="" />
                    <div className="card-body">
                        <h4>Canvas White Cotton Lamp</h4>
                        <p className='text-center'>₹8999</p>
                        <button>Shop Now</button>                                                
                    </div>                                        
                </div>
                <div className="card">
                    <img src={c7_1} alt="" />
                    <div className="card-body">
                        <h4>Kosmo Lily 2 Door Wardrobe</h4>
                        <p className='text-center'>₹14999</p>
                        <button>Shop Now</button>                                                
                    </div>                                        
                </div>
                <div className="card">
                    <img src={c8_1} alt="" />
                    <div className="card-body">
                        <h4>Rams Velvet Arm Chair</h4>
                        <p className='text-center'>₹17999</p>
                        <button>Shop Now</button>                                                
                    </div>                                        
                </div>
                <div className="card">
                    <img src={c9_1} alt="" />
                    <div className="card-body">
                        <h4>Milton Sheesham Cotton Chair</h4>
                        <p className='text-center'>₹18999</p>
                        <button>Shop Now</button>                                                
                    </div>                                        
                </div>
                </div>
            </div>
            <div className="about">
                <h1 className='text-center'>ABOUT</h1>
                <div className="row">
                    <div className="card">
                        <img src={about} alt="" />
                    </div>
                    <div className="about-text">
                        <p>Welcome to our Furnishure, where style meets comfort and functionality. Discover an exquisite collection crafted to transform your spaces into havens of sophistication and relaxation. From timeless classics to contemporary marvels, each piece is meticulously designed to elevate your home's aesthetic while ensuring utmost comfort. Whether you seek the warmth of wooden accents, the modern allure of minimalist designs, or the cozy embrace of plush upholstery, our diverse range caters to every taste and preference. Embrace quality, craftsmanship, and elegance as you explore our curated selection, meticulously chosen to inspire and enhance your living experience. Redefine your home with our furniture - where beauty meets functionality in every carefully curated piece.
                        </p>
                    </div>
                </div>
            </div>
      </>
    );
  }
  
  export default Body;