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
                    <h3>Cosmo Comfort Armchair</h3>
                    <p>By CosmoHome</p>
                    <p>₹13000</p>
                    <button onClick={goToSofa1}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>
                <div className="product">
                    <img src={IMAGES.c2_1} alt="Product 2" />
                    <h3>Zenith Lounge Furnish Chair</h3>
                    <p>By  Zenith Furnishings</p>
                    <p>₹18999</p>
                    <button onClick={goToSofa2}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c3_1} alt="Product 3" />
                    <h3>Tranquil Retreat Armchair</h3>
                    <p>By Tranquil Living</p>
                    <p>₹16999</p>
                    <button onClick={goToSofa3}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c4_1} alt="Product 4" />
                    <h3>Nexus Cozy Corner Chair</h3>
                    <p>By Nexus Home</p>
                    <p>₹14999</p>
                    <button onClick={goToSofa4}>VIEW PRODUCT</button>
                    <button >WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c5_1} alt="Product 5" />
                    <h3>Blissful Oasis Armchair</h3>
                    <p>By Bliss Furnishings</p>
                    <p>₹15999</p>
                    <button onClick={goToSofa5}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c6_1} alt="Product 6" />
                    <h3>Harmony Lounge Chair</h3>
                    <p>By Harmony Home</p>
                    <p>₹17999</p>
                    <button onClick={goToSofa6}>VIEW PRODUCT</button>
                    <button >WISHLIST</button>
                </div>     
            </div>        
        </>
    );
}

export default Sofas;