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
    const totalAmount = () => {
        if (!cartData) {
            return 0;
        }

        return cartData.items.reduce((total, item) => {
            const product = PRODUCTS.find((p) => p.id === parseInt(item.product, 10));
            const price = product ? product.unitPrice : 0;
            return total + price * item.quantity;
        }, 0);
    };
    const totalItems = () => {
        if (!cartData) {
            return 0;
        }

        return cartData.items.reduce((total, item) => total + item.quantity, 0);
    };
    return (
        <>
            <button onClick={getCartData}>Update</button>

            {cartData && (
                <div>
                    <h2>Cart Information</h2>
                    {cartData.items.map(item => (
                        <div key={item.product}>
                            <img src={PRODUCTS.find((p) => p.id === parseInt(item.product, 10)).images[0]} alt="img" />
                            <p>{PRODUCTS.find((p) => p.id === parseInt(item.product, 10)).name}</p>
                            <p>{PRODUCTS.find((p) => p.id === parseInt(item.product, 10)).brand}</p>                            
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => handleAdd1ToCart(item.product)}>Add 1</button>
                            <button onClick={() => handleDelete1FromCart(item.product)}>Delete 1</button>
                            <hr />
                        </div>
                    ))}
                    <p>Cart Summary</p>
                    <p>Total Items in Cart: {totalItems()}</p>
                    <p>Total Amount: ₹{totalAmount()}</p>
                </div>
            )}
        </>
    );
}

export default Cart;