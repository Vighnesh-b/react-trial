import './dinings.css'
import '../styles/fonts.css'

import IMAGES from './cah6image';

import { useNavigate } from 'react-router-dom';
function Dinings(){
    const navigate = useNavigate();
    const goToDining1=()=>{
        navigate("/Dinings/dining1");
    };
    const goToDining2=()=>{
        navigate("/Dinings/dining2");
    };
    const goToDining3=()=>{
        navigate("/Dinings/dining3");
    };
    const goToDining4=()=>{
        navigate("/Dinings/dining4");
    };
    const goToDining5=()=>{
        navigate("/Dinings/dining5");
    };
    const goToDining6=()=>{
        navigate("/Dinings/dining6");
    };
    return(
        <>
            <div className="product-grid">
                <div className="product">
                    <img src={IMAGES.c1_1} alt="Product 1" />
                    <h3>Harmony Sofa </h3>
                    <p>Serenity Sofas</p>
                    <p>₹13000</p>
                    <button onClick={goToDining1}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>
                <div className="product">
                    <img src={IMAGES.c2_1} alt="Product 2" />
                    <h3>LuxeLounge Sofa </h3>
                    <p>Opulent Living Co.</p>
                    <p>₹18999</p>
                    <button onClick={goToDining2}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c3_1} alt="Product 3" />
                    <h3>UrbanScape Sofa</h3>
                    <p>Metropolis Furnishings</p>
                    <p>₹16999</p>
                    <button onClick={goToDining3}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c4_1} alt="Product 4" />
                    <h3>TranquilTide Sofa</h3>
                    <p>Zenith Designs</p>
                    <p>₹14999</p>
                    <button onClick={goToDining4}>VIEW PRODUCT</button>
                    <button >WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c5_1} alt="Product 5" />
                    <h3>NovaForm Sofa </h3>
                    <p>Stellar Seating Solutions</p>
                    <p>₹15999</p>
                    <button onClick={goToDining5}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c6_1} alt="Product 6" />
                    <h3>Enigma Sofa </h3>
                    <p>Mystique Furnishings</p>
                    <p>₹17999</p>
                    <button onClick={goToDining6}>VIEW PRODUCT</button>
                    <button >WISHLIST</button>
                </div>     
            </div>        
        </>
    );
}

export default Dinings;