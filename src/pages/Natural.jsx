import React from 'react'

const Natural = () => {
  return (
    <div className='cal' style={{ padding: '66px 46px' }}>
      <div className='cat' style={{width:'100%',display:'grid',gridTemplateColumns:'2fr 1fr',gap:'20px'}}>
        <div style={{backgroundImage:'url(https://htmldemo.net/mixy/mixy/assets/images/banners/img1_banner3_mixy1.webp)',backgroundRepeat:'no-repeat',padding:'30px',borderRadius:'8px'}}>
            <h5 style={{fontSize:'30px',fontWeight:'100'}}>100% Natural Organic</h5>
            <h4 style={{fontSize:'33px',paddingBottom:'15px',paddingTop:'4px'}}>Strawberry Velvet Cake</h4>
            <h2 style={{color:'#da2e1f'}}>$23.45</h2>
        </div>
        <div style={{backgroundImage:'url(https://htmldemo.net/mixy/mixy/assets/images/banners/img2_banner3_mixy1.webp)',backgroundRepeat:'no-repeat',padding:'30px',borderRadius:'8px'}}>
            <h5 style={{fontSize:'30px',fontWeight:'100'}}>Organic</h5>
            <h4 style={{fontSize:'33px',paddingBottom:'15px',paddingTop:'4px'}}>Nuts</h4>
            <h2 style={{color:'#da2e1f'}}>$23.45</h2>
        </div>
      </div>
    </div>
  )
}

export default Natural
