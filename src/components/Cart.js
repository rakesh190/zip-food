import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-lg">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 h-auto bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is Empty, Add items to the Cart</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
