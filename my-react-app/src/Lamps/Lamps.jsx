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
                    <h3>Harmony Sofa </h3>
                    <p>Serenity Sofas</p>
                    <p>₹13000</p>
                    <button onClick={goToLamp1}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>
                <div className="product">
                    <img src={IMAGES.c2_1} alt="Product 2" />
                    <h3>LuxeLounge Sofa </h3>
                    <p>Opulent Living Co.</p>
                    <p>₹18999</p>
                    <button onClick={goToLamp2}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c3_1} alt="Product 3" />
                    <h3>UrbanScape Sofa</h3>
                    <p>Metropolis Furnishings</p>
                    <p>₹16999</p>
                    <button onClick={goToLamp3}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c4_1} alt="Product 4" />
                    <h3>TranquilTide Sofa</h3>
                    <p>Zenith Designs</p>
                    <p>₹14999</p>
                    <button onClick={goToLamp4}>VIEW PRODUCT</button>
                    <button >WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c5_1} alt="Product 5" />
                    <h3>NovaForm Sofa </h3>
                    <p>Stellar Seating Solutions</p>
                    <p>₹15999</p>
                    <button onClick={goToLamp5}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c6_1} alt="Product 6" />
                    <h3>Enigma Sofa </h3>
                    <p>Mystique Furnishings</p>
                    <p>₹17999</p>
                    <button onClick={goToLamp6}>VIEW PRODUCT</button>
                    <button >WISHLIST</button>
                </div>     
            </div>        
        </>
    );
}

export default Lamps;