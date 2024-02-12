import './sofas.css'
import '../styles/fonts.css'

import IMAGES from './cah2image';

import { useNavigate } from 'react-router-dom';
function Sofas(){
    const navigate = useNavigate();
    const goToSofa1=()=>{
        navigate("/Sofas/sofa1");
    };
    const goToSofa2=()=>{
        navigate("/Sofas/sofa2");
    };
    const goToSofa3=()=>{
        navigate("/Sofas/sofa3");
    };
    const goToSofa4=()=>{
        navigate("/Sofas/sofa4");
    };
    const goToSofa5=()=>{
        navigate("/Sofas/sofa5");
    };
    const goToSofa6=()=>{
        navigate("/Sofas/sofa6");
    };
    return(
        <>
            <div className="product-grid">
                <div className="product">
                    <img src={IMAGES.c1_1} alt="Product 1" />
                    <h3>Harmony Sofa </h3>
                    <p>Serenity Sofas</p>
                    <p>₹13000</p>
                    <button onClick={goToSofa1}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>
                <div className="product">
                    <img src={IMAGES.c2_1} alt="Product 2" />
                    <h3>LuxeLounge Sofa </h3>
                    <p>Opulent Living Co.</p>
                    <p>₹18999</p>
                    <button onClick={goToSofa2}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c3_1} alt="Product 3" />
                    <h3>UrbanScape Sofa</h3>
                    <p>Metropolis Furnishings</p>
                    <p>₹16999</p>
                    <button onClick={goToSofa3}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c4_1} alt="Product 4" />
                    <h3>TranquilTide Sofa</h3>
                    <p>Zenith Designs</p>
                    <p>₹14999</p>
                    <button onClick={goToSofa4}>VIEW PRODUCT</button>
                    <button >WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c5_1} alt="Product 5" />
                    <h3>NovaForm Sofa </h3>
                    <p>Stellar Seating Solutions</p>
                    <p>₹15999</p>
                    <button onClick={goToSofa5}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c6_1} alt="Product 6" />
                    <h3>Enigma Sofa </h3>
                    <p>Mystique Furnishings</p>
                    <p>₹17999</p>
                    <button onClick={goToSofa6}>VIEW PRODUCT</button>
                    <button >WISHLIST</button>
                </div>     
            </div>        
        </>
    );
}

export default Sofas;