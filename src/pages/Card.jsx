import React from 'react'

const Card = () => {
  return (
    <div className='cal' style={{ padding: '66px 46px' }}>
      <div className='cat' style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'25px'}}>
        <div style={{backgroundImage:'url(https://htmldemo.net/mixy/mixy/assets/images/banners/img1_banner2_mixy1.webp)',backgroundRepeat:'no-repeat',padding:'40px 20px 40px 20px',borderRadius:'7px'}}>
            <h4 style={{fontSize:'25px'}}>Fresh Fruit Kiwis</h4>
            <h5 style={{paddingTop:'15px',color:'#da2e1f',fontSize:'22px'}}>$34.99</h5>
            <button style={{marginTop:'20px'}}>Shop Now</button>
        </div>
        <div style={{backgroundImage:'url(https://htmldemo.net/mixy/mixy/assets/images/banners/img2_banner2_mixy1.webp)',backgroundRepeat:'no-repeat',padding:'40px 20px 40px 20px',borderRadius:'7px'}}>
            <h4 style={{fontSize:'25px'}}>Fresh Fruit Kiwis</h4>
            <h5 style={{paddingTop:'15px',color:'#da2e1f',fontSize:'22px'}}>$34.99</h5>
            <button style={{marginTop:'20px'}}>Shop Now</button>
        </div>
        <div style={{backgroundImage:'url(https://htmldemo.net/mixy/mixy/assets/images/banners/img3_banner2_mixy1.webp)',backgroundRepeat:'no-repeat',padding:'40px 20px 40px 20px',borderRadius:'7px'}}>
            <h4 style={{fontSize:'25px'}}>Fresh Fruit Kiwis</h4>
            <h5 style={{paddingTop:'15px',color:'#da2e1f',fontSize:'22px'}}>$34.99</h5>
            <button style={{marginTop:'20px'}}>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
