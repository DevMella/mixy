import React from 'react'

const Popular = () => {
  return (
    <div className='cal' style={{ padding: '66px 46px' }}>
      <div>
        <p style={{ fontSize: '17px', fontWeight: '600', letterSpacing: '0.05em' ,fontSize:'34px' }}>Popular Categories</p>
        <h3 style={{ fontWeight: '100', color: 'gray',paddingTop:'10px'}}>Some of our popular categories include grocery</h3>
        <div className='cat' style={{display:'grid',gridTemplateColumns:'1fr 10fr',paddingTop:'40px'}}>
            <div>
                <img src="https://htmldemo.net/mixy/mixy/assets/images/banners/img_banner4_mixy1.webp" style={{border:'1px solid gainsboro',padding:'20px' ,borderRadius:'7px 0px 0px 7px'}} alt="" />
            </div>
            <div className='cat' style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'0px'}}>
                <div style={{display:'flex',height:'91px',padding:'40px 20px 20px 20px',gap:'20px',border:'1px solid gainsboro'}}>
                    <div>
                        <h6 style={{fontSize:'18px'}}>Fresh <br /> Vegetables</h6>
                        <p style={{color:'gainsboro',paddingTop:'16px'}}>8 Products</p>
                    </div>
                    <div style={{width:'70px'}}>
                        <img src="https://htmldemo.net/mixy/mixy/assets/images/categories/fresh_vegetables.webp" width={'100%'} alt="" />
                    </div>
                </div>
                <div style={{display:'flex',height:'91px',padding:'40px 20px 20px 20px',gap:'20px',border:'1px solid gainsboro'}}>
                    <div>
                        <h6 style={{fontSize:'18px'}}>Canned <br /> Goods</h6>
                        <p style={{color:'gainsboro',paddingTop:'16px'}}>10 Products</p>
                    </div>
                    <div style={{width:'70px'}}>
                        <img src="https://htmldemo.net/mixy/mixy/assets/images/categories/canned_goods.webp" width={'100%'} alt="" />
                    </div>
                </div>
                <div style={{display:'flex',height:'91px',padding:'40px 20px 20px 20px',gap:'20px',border:'1px solid gainsboro'}}>
                    <div>
                        <h6 style={{fontSize:'18px'}}>Meat & <br /> Seafood</h6>
                        <p style={{color:'gainsboro',paddingTop:'16px'}}>8 Products</p>
                    </div>
                    <div style={{width:'70px'}}>
                        <img src="https://htmldemo.net/mixy/mixy/assets/images/categories/meats_seafood.webp" width={'100%'} alt="" />
                    </div>
                </div>
                <div style={{display:'flex',height:'91px',padding:'40px 20px 20px 20px',gap:'20px',border:'1px solid gainsboro'}}>
                    <div>
                        <h6 style={{fontSize:'18px'}}>Fresh Fruits<br /> </h6>
                        <p style={{color:'gainsboro',paddingTop:'16px'}}>18 Products</p>
                    </div>
                    <div style={{width:'70px'}}>
                        <img src="https://htmldemo.net/mixy/mixy/assets/images/categories/fresh_vegetables.webp" width={'100%'} alt="" />
                    </div>
                </div>
                <div style={{display:'flex',height:'91px',padding:'40px 20px 20px 20px',gap:'20px',border:'1px solid gainsboro'}}>
                    <div>
                        <h6 style={{fontSize:'18px'}}>Bread & <br /> Brakey</h6>
                        <p style={{color:'gainsboro',paddingTop:'16px'}}>43 Products</p>
                    </div>
                    <div style={{width:'70px'}}>
                        <img src="https://htmldemo.net/mixy/mixy/assets/images/categories/bread_bakery.webp" width={'100%'} alt="" />
                    </div>
                </div>
                <div style={{display:'flex',height:'91px',padding:'40px 20px 20px 20px',gap:'20px',border:'1px solid gainsboro'}}>
                    <div>
                        <h6 style={{fontSize:'18px'}}>Eggs & Dairy<br /> </h6>
                        <p style={{color:'gainsboro',paddingTop:'16px'}}>26 Products</p>
                    </div>
                    <div style={{width:'70px'}}>
                        <img src="https://htmldemo.net/mixy/mixy/assets/images/categories/eggs_dairy.webp" width={'100%'} alt="" />
                    </div>
                </div>
                <div style={{display:'flex',height:'91px',padding:'40px 20px 20px 20px',gap:'20px',border:'1px solid gainsboro'}}>
                    <div>
                        <h6 style={{fontSize:'18px'}}>Soft Drinks <br /> </h6>
                        <p style={{color:'gainsboro',paddingTop:'16px'}}>8 Products</p>
                    </div>
                    <div style={{width:'70px'}}>
                        <img src="https://htmldemo.net/mixy/mixy/assets/images/categories/soft_drinks.webp" width={'100%'} alt="" />
                    </div>
                </div>
                <div style={{display:'flex',height:'91px',padding:'40px 20px 20px 20px',gap:'20px',border:'1px solid gainsboro'}}>
                    <div>
                        <h6 style={{fontSize:'18px'}}>Fresh  Fruits<br /> </h6>
                        <p style={{color:'gainsboro',paddingTop:'16px'}}>8 Products</p>
                    </div>
                    <div style={{width:'70px'}}>
                        <img src="https://htmldemo.net/mixy/mixy/assets/images/categories/fresh_fruits.webp" width={'100%'} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Popular
