// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Producto Elegante', price: 40, image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
  { id: 2, name: 'Artículo Especial', price: 18, isSale: true, rating: true, image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
  { id: 3, name: 'Oferta Especial', price: 20, isSale: true, rating: true, image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
  { id: 4, name: 'Producto Premium', price: 60, image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
];

export default function ProductList() {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}