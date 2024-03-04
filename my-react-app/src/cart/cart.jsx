import axios from "axios";
import { UserContext } from "../Context/userContext";
import { useContext, useState } from "react";
import PRODUCTS from "../Product_info/product_info";

function Cart() {
    const { user } = useContext(UserContext);
    const [cartData, setCartData] = useState(null);
    const getCartData = async () => {
        try {
            const response = await axios.get(`/getcart?userid=${user.id}`, {
                withCredentials: true,
            });

            setCartData(response.data);
            console.log(cartData);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    return (
        <>
            <button onClick={getCartData}>Update</button>

            {cartData && (
                <div>
                    <h2>Cart Information</h2>
                    {cartData.items.map(item => (
                        <div key={item.product}>
                            
                            <p>Product: {item.product}</p>
                            <p>Quantity: {item.quantity}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Cart;