import './bed.css'
import '../styles/fonts.css'

import IMAGES from './cah3image';

import { useNavigate } from 'react-router-dom';
function Beds(){
    const navigate = useNavigate();
    const goToBed1=()=>{
        navigate("/Beds/bed1");
    };
    const goToBed2=()=>{
        navigate("/Beds/bed2");
    };
    const goToBed3=()=>{
        navigate("/Beds/bed3");
    };
    const goToBed4=()=>{
        navigate("/Beds/bed4");
    };
    const goToBed5=()=>{
        navigate("/Beds/bed5");
    };
    const goToBed6=()=>{
        navigate("/Beds/bed6");
    };
    return(
        <>
            <div className="product-grid">
                <div className="product">
                    <img src={IMAGES.c1_1} alt="Product 1" />
                    <h3>BlissfulHaven</h3>
                    <p>ComfortCraft</p>
                    <p>₹13000</p>
                    <button onClick={goToBed1}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>
                <div className="product">
                    <img src={IMAGES.c2_1} alt="Product 2" />
                    <h3>SereneDreamscape </h3>
                    <p>LuxeHaven</p>
                    <p>₹18999</p>
                    <button onClick={goToBed2}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c3_1} alt="Product 3" />
                    <h3>CozyNook</h3>
                    <p>SerenitySleep</p>
                    <p>₹16999</p>
                    <button onClick={goToBed3}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c4_1} alt="Product 4" />
                    <h3>TranquilTide Sofa</h3>
                    <p>EliteRest</p>
                    <p>₹14999</p>
                    <button onClick={goToBed4}>VIEW PRODUCT</button>
                    <button >WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c5_1} alt="Product 5" />
                    <h3>HarmonyHaven</h3>
                    <p>ZenNest</p>
                    <p>₹15999</p>
                    <button onClick={goToBed5}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c6_1} alt="Product 6" />
                    <h3>RestfulAura</h3>
                    <p>MNovaDream</p>
                    <p>₹17999</p>
                    <button onClick={goToBed6}>VIEW PRODUCT</button>
                    <button >WISHLIST</button>
                </div>     
            </div>        
        </>
    );
}

export default Beds;