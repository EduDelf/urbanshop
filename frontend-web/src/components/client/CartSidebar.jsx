// src/components/CartSidebar.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, toggleCart, clearCart } from '../../redux/slices/cartSlice';

export default function CartSidebar() {
  const dispatch = useDispatch();
  const { items, isOpen, totalQuantity, totalPrice } = useSelector(state => state.cart);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-header d-flex justify-content-between align-items-center p-3">
        <h3 className="m-0">Carrito ({totalQuantity})</h3>
        <button className="close-btn" onClick={handleToggleCart}>
          &times;
        </button>
      </div>

      <div className="cart-items p-3">
        {items.length === 0 ? (
          <p className="text-center my-4">Tu carrito está vacío</p>
        ) : (
          <>
            {items.map((item) => (
              <div key={`${item.id}-${item.name}`} className="cart-item d-flex align-items-center justify-content-between p-2 mb-3 border-bottom">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="item-details flex-grow-1 px-2">
                  <h6 className="mb-1">{item.name}</h6>
                  <small className="d-block">${item.price} x {item.quantity}</small>
                  <small className="d-block fw-bold">Subtotal: ${(item.price * item.quantity).toFixed(2)}</small>
                </div>
                <button 
                  onClick={() => handleRemoveItem(item.id)}
                  className="btn btn-sm btn-outline-danger"
                >
                  &times;
                </button>
              </div>
            ))}

            <div className="cart-summary p-3 border-top">
              <h4 className="text-end mb-3">Total: ${totalPrice.toFixed(2)}</h4>
              <div className="d-flex flex-column gap-2">
                <button 
                  onClick={handleClearCart}
                  className="btn btn-outline-danger"
                >
                  Vaciar Carrito
                </button>
                <button className="btn btn-primary">
                  Finalizar Compra
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}