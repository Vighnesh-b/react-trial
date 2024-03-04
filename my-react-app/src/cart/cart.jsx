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
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    const handleAdd1ToCart = async (productId) => {
        try {
            await axios.post("/add1tocart", {
                userid: user.id,
                product: productId,
            }, { withCredentials: true });
            getCartData();
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const handleDelete1FromCart = async (productId) => {
        try {
            await axios.post("/delete1fromcart", {
                userid: user.id,
                product: productId,
            }, { withCredentials: true });
            getCartData();
        } catch (error) {
            console.error('Error deleting from cart:', error);
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
                            <button onClick={() => handleAdd1ToCart(item.product)}>Add 1</button>
                            <button onClick={() => handleDelete1FromCart(item.product)}>Delete 1</button>
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Cart;