import { useSelector } from "react-redux";

const Cart = () => {
  const cartState = useSelector((state) => state.AppState.cart);
  console.info("data in cart component", cartState);
  return <div>CART Count: {cartState.length}</div>;
};

export default Cart;
