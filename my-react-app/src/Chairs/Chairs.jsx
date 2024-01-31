import './Chairs.css'
import '../styles/fonts.css'

import IMAGES from './cahimage';

import { useNavigate } from 'react-router-dom';
function Chairs(){
    const navigate = useNavigate();
    const goToChair1=()=>{
        navigate("/Chairs/Chair1");
    };
    return(
        <>
            <div className="product-grid">
                <div className="product">
                    <img src={IMAGES.c1_1} alt="Product 1" />
                    <h3>Cosmo Comfort Armchair</h3>
                    <p>By CosmoHome</p>
                    <p>₹13000</p>
                    <button onClick={goToChair1}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>
                <div className="product">
                    <img src={IMAGES.c2_1} alt="Product 2" />
                    <h3>Zenith Lounge Furnish Chair</h3>
                    <p>By  Zenith Furnishings</p>
                    <p>₹18999</p>
                    <button>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c3_1} alt="Product 3" />
                    <h3>Tranquil Retreat Armchair</h3>
                    <p>By Tranquil Living</p>
                    <p>₹16999</p>
                    <button>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c4_1} alt="Product 4" />
                    <h3>Nexus Cozy Corner Chair</h3>
                    <p>By Nexus Home</p>
                    <p>₹14999</p>
                    <button>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c5_1} alt="Product 5" />
                    <h3>Blissful Oasis Armchair</h3>
                    <p>By Bliss Furnishings</p>
                    <p>₹15999</p>
                    <button>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={IMAGES.c6_1} alt="Product 6" />
                    <h3>Harmony Lounge Chair</h3>
                    <p>By Harmony Home</p>
                    <p>₹17999</p>
                    <button>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>     
            </div>        
        </>
    );
}

export default Chairs