import c1 from './chair_images/C-1.jpg'
import './Chairs.css'
import '../styles/fonts.css'
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
                    <img src={c1} alt="Product 1" />
                    <h3>Madonna Lounge Chair In Black Leatherette</h3>
                    <p>By Furncasa</p>
                    <p>₹19999</p>
                    <button onClick={goToChair1}>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>
                <div className="product">
                    <img src={c1} alt="Product 2" />
                    <h3>Madonna Lounge Chair In Black Leatherette</h3>
                    <p>By Furncasa</p>
                    <p>₹19999</p>
                    <button>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={c1} alt="Product 3" />
                    <h3>Madonna Lounge Chair In Black Leatherette</h3>
                    <p>By Furncasa</p>
                    <p>₹19999</p>
                    <button>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={c1} alt="Product 4" />
                    <h3>Madonna Lounge Chair In Black Leatherette</h3>
                    <p>By Furncasa</p>
                    <p>₹19999</p>
                    <button>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={c1} alt="Product 5" />
                    <h3>Madonna Lounge Chair In Black Leatherette</h3>
                    <p>By Furncasa</p>
                    <p>₹19999</p>
                    <button>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>  
                <div className="product">
                    <img src={c1} alt="Product 6" />
                    <h3>Madonna Lounge Chair In Black Leatherette</h3>
                    <p>By Furncasa</p>
                    <p>₹19999</p>
                    <button>VIEW PRODUCT</button>
                    <button>WISHLIST</button>
                </div>     
            </div>        
        </>
    );
}

export default Chairs