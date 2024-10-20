import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

import Filters from '../Filters';


const products = [
    {
        id: 1,
        name: 'Monstera',
        description: 'Indoor Plant, Low maintenance',
        rating: 4.9,
        priceOriginal: 359,
        priceDiscounted: 299,
        image: 'https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335106/Group_111_n382nh.png',
    },
    {
        id: 2,
        name: 'Monstera',
        description: 'Indoor Plant, Low maintenance',
        rating: 4.9,
        priceOriginal: 359,
        priceDiscounted: 299,
        image: 'https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335085/Group_95_frj1qx.png',
    },
    {
        id: 2,
        name: 'Monstera',
        description: 'Indoor Plant, Low maintenance',
        rating: 4.9,
        priceOriginal: 359,
        priceDiscounted: 299,
        image: 'https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335064/Group_110_j79c8v.png',
    },
    {
        id: 4,
        name: 'Monstera',
        description: 'Indoor Plant, Low maintenance',
        rating: 4.9,
        priceOriginal: 359,
        priceDiscounted: 299,
        image: 'https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335106/Group_111_n382nh.png',
    },
    {
        id: 5,
        name: 'Monstera',
        description: 'Indoor Plant, Low maintenance',
        rating: 4.9,
        priceOriginal: 359,
        priceDiscounted: 299,
        image: 'https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335085/Group_95_frj1qx.png',
    },
    {
        id: 6,
        name: 'Monstera',
        description: 'Indoor Plant, Low maintenance',
        rating: 4.9,
        priceOriginal: 359,
        priceDiscounted: 299,
        image: 'https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335064/Group_110_j79c8v.png',
    },
    {
        id: 7,
        name: 'Monstera',
        description: 'Indoor Plant, Low maintenance',
        rating: 4.9,
        priceOriginal: 359,
        priceDiscounted: 299,
        image: 'https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335106/Group_111_n382nh.png',
    },
    {
        id: 8,
        name: 'Monstera',
        description: 'Indoor Plant, Low maintenance',
        rating: 4.9,
        priceOriginal: 359,
        priceDiscounted: 299,
        image: 'https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335085/Group_95_frj1qx.png',
    },
    {
        id: 9,
        name: 'Monstera',
        description: 'Indoor Plant, Low maintenance',
        rating: 4.9,
        priceOriginal: 359,
        priceDiscounted: 299,
        image: 'https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335064/Group_110_j79c8v.png',
    },

];

const Products = () => {
    const [modalProduct, setModalProduct] = useState(null)
    const [showModal, setShowModal] = useState(false);



    const navigate = useNavigate();


    const closeModal = () => {
        setShowModal(false); 
    };
    const handleAddToCart = (product) => {
        setModalProduct(product); 
        setShowModal(true);
    };

    const handleViewProduct = (productName) => {
        navigate(`/thank-you?product=${encodeURIComponent(productName)}`);
    };
    return (
        <div>
            <div className="page-container">
                <Filters />
                <div className="product-grid">
                    <div className="sort-filter">
                        <p>300 products</p>
                        <select className="sort-select">
                            <option value="default">SORT BY</option>
                            <option value="price">Price</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>

                    <div className="products">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.name} className="product-image" />

                                <button className="view-product-btn" onClick={() => handleViewProduct('Sample Product')}>View Product</button>

                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <div className="product-rating">⭐⭐⭐⭐ {product.rating}</div>
                                    <div className="product-price">
                                        <span className="price-original">₹{product.priceOriginal}</span>
                                        <span className="price-discounted">₹{product.priceDiscounted}</span>
                                    </div>

                                    <div className="product-actions">
                                        <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}> - Add to cart +</button>
                                        <button className='but-to-rent'>Buy Runt</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {showModal && modalProduct && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close-btn" onClick={closeModal}>&times;</span>

                            <p className="modal-cart-title">Your Cart</p>
                            <hr className="modal-divider" />

                            <h2 className="modal-title">Congratulations, Order Placed!</h2>

                            <img src={modalProduct.image} alt={modalProduct.name} className="modal-product-image" />

                            <p className="modal-thankyou">Thank you for choosing {modalProduct.name}.</p>
                            <p className="modal-description">{modalProduct.description}</p>

                            <button className="continue-btn" onClick={closeModal}>Continue Shopping</button>
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
};

export default Products;