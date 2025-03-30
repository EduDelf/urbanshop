import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItem(product));
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    // Guardar en localStorage después de la actualización
    const updatedCart = {
      ...cart,
      items: [...cart.items, { ...product, quantity: 1 }],
      totalQuantity: cart.totalQuantity + 1,
      totalPrice: cart.totalPrice + product.price,
    };
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {product.isSale && (
          <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
            Oferta
          </div>
        )}
        <img className="card-img-top" src={product.image} alt={product.name} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.name}</h5>
            {product.rating && (
              <div className="d-flex justify-content-center small text-warning mb-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="bi-star-fill"></div>
                ))}
              </div>
            )}
            <p>${product.price}</p>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button 
              className={`btn btn-outline-dark mt-auto ${isAnimating ? 'shake' : ''}`} 
              onClick={handleAddToCart}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
