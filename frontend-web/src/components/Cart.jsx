import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price}</p>
              <button onClick={() => handleRemove(item.id)}>Eliminar</button>
            </div>
          ))}
          <div>
            <h3>Total: ${totalPrice}</h3>
            <button onClick={handleClearCart}>Vaciar carrito</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
