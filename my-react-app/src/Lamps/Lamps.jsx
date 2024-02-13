import './lamps.css'
import '../styles/fonts.css'

import IMAGES from './cah5image';

import { useNavigate } from 'react-router-dom';
function Lamps(){
    const navigate = useNavigate();
    const goToLamp1=()=>{
        navigate("/Lamps/lamp1");
    };
    const goToLamp2=()=>{
        navigate("/Lamps/lamp2");
    };
    const goToLamp3=()=>{
        navigate("/Lamps/lamp3");
    };
    const goToLamp4=()=>{
        navigate("/Lamps/lamp4");
    };
    const goToLamp5=()=>{
        navigate("/Lamps/lamp5");
    };
    const goToLamp6=()=>{
        navigate("/Lamps/lamp6");
    };
    return(
        <>
            <div className="product-grid">
                <div className="product">
                    <img src={IMAGES.c1_1} alt="Product 1" />
                    <h3>Armchair Reading Lamp </h3>
                    <p>Symplify</p>
                    <p>₹1490</p>
                    <button onClick={goToLamp1}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>
                <div className="product">
                    <img src={IMAGES.c2_1} alt="Product 2" />
                    <h3>Bedside Night Lamp </h3>
                    <p>Foziq</p>
                    <p>₹1790</p>
                    <button onClick={goToLamp2}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c3_1} alt="Product 3" />
                    <h3>Table lamp</h3>
                    <p>Skylofts</p>
                    <p>₹899</p>
                    <button onClick={goToLamp3}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c4_1} alt="Product 4" />
                    <h3>Rustic Table Lamp</h3>
                    <p>Zenith Designs</p>
                    <p>₹1490</p>
                    <button onClick={goToLamp4}>VIEW PRODUCT</button>
                    <button >WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c5_1} alt="Product 5" />
                    <h3>Adjustable Study Lamp </h3>
                    <p>BillieJean</p>
                    <p>₹1590</p>
                    <button onClick={goToLamp5}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c6_1} alt="Product 6" />
                    <h3>Pendant Lamp </h3>
                    <p>Radhika Dahlan</p>
                    <p>₹4490</p>
                    <button onClick={goToLamp6}>VIEW PRODUCT</button>
                    <button >WISHLIST</button>
                </div>     
            </div>        
        </>
    );
}

export default Lamps;