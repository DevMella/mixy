import React, { useState } from 'react';
import frut from '../../src/assets/frut.png';
import one from '../../src/assets/500.png';
import two from '../../src/assets/200.png';
import three from '../../src/assets/100.png';
import Accordion from "./Accordion";
import Seller from './Seller';
import News from './News';
import Footer from './Footer';

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('1Kg'); 
  const price = 120.65;
  const discountPrice = 90.76;
  const handleSizeChange = (selectedSize) => {
    setSize(selectedSize);
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const totalAmount = (quantity * discountPrice).toFixed(2);

  const getImageForSize = (selectedSize) => {
    switch (selectedSize) {
      case '100Gm':
        return `${three}?text=100Gm`;
      case '200Gm':
        return `${two}?text=100Gm`;
      case '500Gm':
        return `${one}?text=100Gm`;
      case '1Kg':
      default:
        return 'https://htmldemo.net/mixy/mixy/assets/images/products/details/lg-1.jpg?text=1Kg';
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: '#f5f9ef' }}>
        <div style={{ backgroundImage: `url(${frut})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right', width: '100%', marginTop: '76px' }}>
          <div className='cal' style={{ padding: '66px 46px' }}>
            <h1 style={{ fontSize: '45px' }}>Products</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'gray', paddingTop: '20px' }}>
              <p>Home</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
              <p>Products</p>
            </div>
          </div>
        </div>
      </div>
      <div className='cat cal' style={{ display: "grid", gridTemplateColumns: '1fr 1fr', padding: '66px 46px', gap: '20px' }}>
        <div>
          <div>
            <img src={getImageForSize(size)}  width={'100%'} style={{ border: '1px solid gainsboro',height:'550px',objectFit:'cover' }} alt="Product"/>
          </div>
        </div>
        <div>
          <h2>Single Product One</h2>
          <div style={{ display: 'flex', gap: '6px', paddingTop: '10px' }}>
            {[...Array(5)].map((_, index) => (
              <svg key={index} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffdc39" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            ))}
            <p>(1 customer review)</p>
          </div>
          <p style={{ color: 'gray', paddingTop: '16px', lineHeight: '19px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', paddingTop: '15px' }}>
            <h2 style={{ color: '#da2e1f', fontSize: '30px' }}>${discountPrice} - </h2>
            <p style={{ color: 'gray', fontSize: '23px' }}>${price}</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', paddingTop: '20px' }}>
            <h6 style={{ fontSize: '20px', fontWeight: '100' }}>Size</h6>
            <div onClick={() => handleSizeChange('1Kg')} style={{ width: '40px', height: '27px', border: '1px dotted #184D47', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} >1Kg</div>
            <div onClick={() => handleSizeChange('100Gm')}style={{ width: '60px', height: '27px', border: '1px dotted gray', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>  100Gm</div>
            <div onClick={() => handleSizeChange('200Gm')} style={{ width: '60px', height: '27px', border: '1px dotted gray', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} >  200Gm</div>
            <div onClick={() => handleSizeChange('500Gm')} style={{ width: '60px', height: '27px', border: '1px dotted gray', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}> 500Gm</div>
          </div>
          <div style={{ width: '130px', height: '25px', backgroundColor: '#e0fade', marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#184D47', borderRadius: '3px' }}> 737 IN STOCK</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
            <button onClick={decreaseQuantity} style={{ fontSize: '18px', backgroundColor: 'gainsboro', color: 'black',padding: '15px 22px',borderRadius:'50%' }}>
              {' '}-{' '} </button>
            <p style={{ fontSize: '20px',paddingTop:'19px' }}>{quantity}</p>
            <button onClick={increaseQuantity} style={{fontSize: '18px', color: 'black', backgroundColor: 'gainsboro',borderRadius:'50%',padding: '15px 20px' }}>{' '}
              +{' '}</button>
            <button style={{backgroundColor:'#179957'}}>Add To Cart</button>
          </div>
          <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
            Total: <span style={{ color: '#da2e1f' }}>${totalAmount}</span>
          </div>
          <div className="line" style={{width:'100%',height:'1px',backgroundColor:'gainsboro',marginTop:'40px'}}></div>
          <div style={{paddingTop:"40px"}}>
            <h5 style={{color:'gray',letterSpacing:'1px',fontSize:'18px',}}>SKU: N/A</h5>
            <p style={{color:'gray',letterSpacing:'1px',fontSize:'14px',lineHeight:'24px',paddingTop:"10px"}}>Categories: Applesauce Beef Beverages Frozen Desserts Frozen Foods <br /> Frozen Potatoes Hot Dogs & Sausages Meats & Seafood Pantry Scones Shop <br /> Snacks Soft Drinks</p>
          </div>
        </div>
      </div>
      <div>
        <Accordion/>
        <Seller/>
        <News/>
        <Footer/>
      </div>
    </div>
  );
};

export default Product;
