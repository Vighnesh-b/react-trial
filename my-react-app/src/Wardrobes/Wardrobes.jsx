import './wardrobes.css'
import '../styles/fonts.css'

import IMAGES from './cah4image';

import { useNavigate } from 'react-router-dom';
function Wardrobes(){
    const navigate = useNavigate();
    const goToWardrobe1=()=>{
        navigate("/Wardrobes/wardrobe1");
    };
    const goToWardrobe2=()=>{
        navigate("/Wardrobes/wardrobe2");
    };
    const goToWardrobe3=()=>{
        navigate("/Wardrobes/wardrobe3");
    };
    const goToWardrobe4=()=>{
        navigate("/Wardrobes/wardrobe4");
    };
    const goToWardrobe5=()=>{
        navigate("/Wardrobes/wardrobe5");
    };
    const goToWardrobe6=()=>{
        navigate("/Wardrobes/wardrobe6");
    };
    return(
        <>
            <div className="product-grid">
                <div className="product">
                    <img src={IMAGES.c1_1} alt="Product 1" />
                    <h3>Harmony Sofa </h3>
                    <p>Serenity Sofas</p>
                    <p>₹13000</p>
                    <button onClick={goToWardrobe1}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>
                <div className="product">
                    <img src={IMAGES.c2_1} alt="Product 2" />
                    <h3>LuxeLounge Sofa </h3>
                    <p>Opulent Living Co.</p>
                    <p>₹18999</p>
                    <button onClick={goToWardrobe2}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c3_1} alt="Product 3" />
                    <h3>UrbanScape Sofa</h3>
                    <p>Metropolis Furnishings</p>
                    <p>₹16999</p>
                    <button onClick={goToWardrobe3}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c4_1} alt="Product 4" />
                    <h3>TranquilTide Sofa</h3>
                    <p>Zenith Designs</p>
                    <p>₹14999</p>
                    <button onClick={goToWardrobe4}>VIEW PRODUCT</button>
                    <button >WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c5_1} alt="Product 5" />
                    <h3>NovaForm Sofa </h3>
                    <p>Stellar Seating Solutions</p>
                    <p>₹15999</p>
                    <button onClick={goToWardrobe5}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c6_1} alt="Product 6" />
                    <h3>Enigma Sofa </h3>
                    <p>Mystique Furnishings</p>
                    <p>₹17999</p>
                    <button onClick={goToWardrobe6}>VIEW PRODUCT</button>
                    <button >WISHLIST</button>
                </div>     
            </div>        
        </>
    );
}

export default Wardrobes;