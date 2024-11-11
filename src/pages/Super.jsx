import React, { useState } from 'react';
import 'flowbite';

const productsData = [
  {
    id: 1,
    name: 'Organic coconut',
    price: 55.30,
    image: 'https://htmldemo.net/mixy/mixy/assets/images/products/product-image-7-2.jpg',
    originalPrice: 65.30,
  },
  {
    id: 2,
    name: 'Perfect Pottidge',
    price: 23.30,
    image: 'https://htmldemo.net/mixy/mixy/assets/images/products/product-image-8-2.jpg',
    originalPrice: 30.30,
  },
];

const Super = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [wishlistProduct, setWishlistProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addToWishlist = (product) => {
    setWishlistProduct(product);
    setTimeout(() => setWishlistProduct(null), 2000); 
  };

  return (
    <div className='cal' style={{ padding: '66px 46px' }}>
      <div>
        <p style={{ fontSize: '17px', fontWeight: '600', letterSpacing: '0.05em' ,fontSize:'34px' }}>Super Deals Of The Week</p>
        <h3 style={{ fontWeight: '100', color: 'gray',paddingTop:'10px'}}>Dont miss this opportunity at a special discount just for this week</h3>
      </div>
      <div style={{ marginTop: '30px' }}>
        <div className='cat' style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
          {productsData.map((product) => (
            <div key={product.id} style={{ position: 'relative', borderRadius: '8px', padding: '10px', overflow: 'hidden', transition: 'transform 0.3s', backgroundColor: 'white',border:'2px solid #DA2E1F'}}>
                <div className='cae' style={{display:'flex'}}>
                    <div onMouseEnter={(e) => {  const buttons = e.currentTarget.querySelectorAll('.action-button');buttons.forEach((button) => button.style.display = 'block');}}
                        onMouseLeave={(e) => {const buttons = e.currentTarget.querySelectorAll('.action-button');buttons.forEach((button) => button.style.display = 'none'); }}>
                        <div style={{ display: 'flex',width:'250px' }}>
                            <img src={product.image} style={{ width: '100%', borderRadius: '8px', transition: 'opacity 0.3s' }} alt={product.name} />
                        </div>
                        <div style={{backgroundColor:'whitesmoke',width:'200px',height:'15px',borderRadius:'8px'}}>
                            <div className="line" style={{background: 'linear-gradient(#dc3a1c,#f6aa06)',width:'120px',height:'15px',borderRadius:'8px'}}></div>
                        </div>
                        <div  style={{display:'flex',gap:'40px',paddingTop:'20px'}}>
                            <p style={{fontSize:'20px'}}>Sold : 546</p>
                            <p style={{fontSize:'20px'}}>Available : 546</p>
                        </div>
                        <button onClick={() => openModal(product)}style={{  display: 'none', position: 'absolute', bottom: '20%', right: '10%', backgroundColor: '#184D47', color: 'white', borderRadius: '50%', padding: '13px 12px 8px 12px', cursor: 'pointer',}}
                        className="action-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>
                        </button>
                        <button onClick={() => addToWishlist(product)}style={{ display: 'none', position: 'absolute', bottom: '38%', right: '10%', backgroundColor: '#184D47', color: 'white', borderRadius: '50%', padding: '13px 12px 8px 12px', cursor: 'pointer', }}
                        className="action-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                        </svg>
                        </button>
                    </div>
                    <div>
                        <div style={{display:'flex',gap:'6px',paddingTop:'10px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#f6a806" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#f6a806" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#f6a806" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#f6a806" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#f6a806" class="bi bi-star-half" viewBox="0 0 16 16">
                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
                            </svg>
                        </div>
                        <h6 style={{ paddingTop: '10px', fontWeight: '600', fontSize: '18px' }}>{product.name}</h6>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px' }}>
                            <p style={{ textDecoration: 'line-through', fontWeight: '100' }}>${product.originalPrice}</p>
                            <p style={{ fontWeight: '600', color: 'red', fontSize: '22px' }}>${product.price}</p>
                        </div>
                        <p style={{color:'gainsboro',fontSize:'20px'}}>Hurry up! Offer ends in...</p>
                        <div style={{paddingTop:'20px',display:'flex',alignItems:'center',gap:'10px'}}>
                            <div style={{width:'50px',height:'50px',borderRadius:'7px',display:'flex',alignItems:'center',justifyContent:'center',background:'gainsboro',fontSize:'20px',fontWeight:'600'}}>0 1</div>
                            <p style={{fontSize:'30px'}}>:</p>
                            <div style={{width:'50px',height:'50px',borderRadius:'7px',display:'flex',alignItems:'center',justifyContent:'center',background:'gainsboro',fontSize:'20px',fontWeight:'600'}}>3 0</div>
                            <p style={{fontSize:'30px'}}>:</p>
                            <div style={{width:'50px',height:'50px',borderRadius:'7px',display:'flex',alignItems:'center',justifyContent:'center',background:'gainsboro',fontSize:'20px',fontWeight:'600'}}>20 24</div>
                        </div>
                        <div style={{display:'flex',gap:'50px',paddingTop:'10px'}}>
                            <p>Days</p>
                            <p>Month</p>
                            <p>Year</p>
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '20px 20px 60px 20px', width: '800px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div></div>
              <button onClick={() => setSelectedProduct(null)} style={{ background: 'none', border: 'none', fontSize: '20px',color:'black' }}>×</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
              <div>
                <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }}>
                  <img src={selectedProduct.image} style={{ width: '100%' }} alt={selectedProduct.name} />
                </div>
                <div style={{display:'flex',gap:'40px',paddingTop:'10px'}}>
                  <div style={{width:'80px',height:'60px'}}>
                    <img src="https://i.pinimg.com/564x/0d/21/7f/0d217f8cae0c72fc29094e81a8b221e0.jpg" width={'100%'} style={{border:'1px solid #184d47',padding:'10px',borderRadius:'8px',height:'70px',objectFit:'cover'}} alt="" />
                  </div>
                  <div style={{width:'80px'}}>
                  <img src="https://i.pinimg.com/564x/e5/cf/a6/e5cfa608130a35846024b848141910a5.jpg" width={'100%'} style={{border:'1px solid #184d47',padding:'10px',borderRadius:'8px',height:'70px',objectFit:'cover'}} alt="" />
                </div>
                </div>
              </div>
              <div>
                <h1 style={{ fontSize: '2rem' }}>{selectedProduct.name}</h1>
                <div style={{display:'flex',gap:'6px',paddingTop:'10px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#184d47" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#184d47" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#184d47" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#184d47" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#184d47" class="bi bi-star-half" viewBox="0 0 16 16">
                  <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
                </svg>
                 <p>(1 customer review)</p>
                </div>
                <p style={{ color: 'gray', paddingTop: '15px' }}>This Teton Pullover Hoodie gives you more than laid-back style dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique...</p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', paddingTop: '10px' }}>
                  <p style={{ textDecoration: 'line-through' }}>${selectedProduct.originalPrice}</p>
                  <p style={{ fontWeight: '600', fontSize: '25px',color:'red' }}>${selectedProduct.price}</p>
                </div>
                <div style={{backgroundColor:'#8db8b3',width:'130px',height:'24px',color:'#184d47',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'3px',marginTop:'15px'}}>726 IN STOCK</div>
                <div style={{ paddingTop: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '40px', borderRadius: '8px', width: '150px',marginBottom:'30px',color:'#184d47' }}>
                    <button onClick={handleDecrement} style={{ border: 'none', padding: '0 10px',backgroundColor:'gainsboro',height:'50px',width:'50px',fontSize:'30px' }}>-</button>
                    <span style={{paddingTop:'20px',fontSize:'20px' }}>{quantity}</span>
                    <button onClick={handleIncrement}  style={{ border: 'none', padding: '0 10px',backgroundColor:'gainsboro',height:'50px',width:'50px',fontSize:'30px' }}>+</button>
                  </div>
                  <div>Total: ${(selectedProduct.price * quantity).toFixed(2)}</div>
                  <button style={{ width: '200px', marginTop: '20px', height: '50px', borderRadius: '25px', backgroundColor: '#184d47', color: 'white' }}>Add To Cart</button>
                </div>
                <div style={{display:'flex',gap:'10px',alignItems:'center',paddingTop:'12px'}}>
                  <p>Share:</p>
                  <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {wishlistProduct && (
        <div style={{ position: 'fixed', top: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 100, background: 'white', padding: '10px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
          <p>{wishlistProduct.name} has been added to your wishlist!</p>
        </div>
      )}
    </div>
  );
};

export default Super;
