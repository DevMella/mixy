import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="line" style={{width:'100%',height:'1px',backgroundColor:'gainsboro'}}></div>
      <div className='cal' style={{ padding: '66px 46px'}}>
        <div className='cat' style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
            <div>
                <div style={{width:'190px'}}>
                    <img src="https://htmldemo.net/mixy/mixy/assets/images/logo.png" width={'100%'} alt="" /> 
                </div>
                <div style={{display:'flex',gap:'10px',padding:'20px 10px 10px 20px'}}>
                    <div style={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:'#3b5998',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                        </svg>
                    </div>
                    <div style={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:'#1da1f2',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                    </div>
                    <div style={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:'#8a3ab9',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <h4 style={{fontSize:'18px',textTransform:'uppercase'}}>Information</h4>
                <p style={{paddingTop:'20px',color:"gray",letterSpacing:'1px'}}>Contact us</p>
                <p style={{paddingTop:'10px',color:"gray",letterSpacing:'1px'}}>About us</p>
                <p style={{paddingTop:'10px',color:"gray",letterSpacing:'1px'}}>Privacy policy</p>
                <p style={{paddingTop:'10px',color:"gray",letterSpacing:'1px'}}>Wishlist</p>
                <p style={{paddingTop:'10px',color:"gray",letterSpacing:'1px'}}>Checkout</p>
            </div>
            <div>
                <h4 style={{fontSize:'18px',textTransform:'uppercase'}}>My Account</h4>
                <p style={{paddingTop:'20px',color:"gray",letterSpacing:'1px'}}>Orders</p>
                <p style={{paddingTop:'10px',color:"gray",letterSpacing:'1px'}}>Download</p>
                <p style={{paddingTop:'10px',color:"gray",letterSpacing:'1px'}}>Addresses</p>
                <p style={{paddingTop:'10px',color:"gray",letterSpacing:'1px'}}>Account Details</p>
                <p style={{paddingTop:'10px',color:"gray",letterSpacing:'1px'}}>Lost Password</p>
            </div>
            <div>
                <h4 style={{fontSize:'18px',textTransform:'uppercase'}}>Download our app</h4>
                <p style={{paddingTop:'20px',color:"gray",letterSpacing:'1px'}}>Fast & Convenient Access</p> 
                <div style={{paddingTop:'20px'}}>
                    <a href="#" class="playstore-button">
                    <span class="icon">
                        <svg fill="currentcolor" viewBox="-52.01 0 560.035 560.035"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                        >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                            d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"
                            ></path>
                        </g>
                        </svg>
                    </span>
                    <span class="texts">
                        <span class="text-1">Download form</span>
                        <span class="text-2">App store</span>
                    </span>
                    </a>
                </div>
            </div>
        </div>
      </div>
      <div className="line" style={{width:'100%',height:'1px',backgroundColor:'gainsboro'}}></div>
      <div className='cae' style={{ padding: '26px 46px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div>
            <h6 style={{color:'gray',fontSize:'17px',fontWeight:'100'}}>Copyright © HasThemes. All Rights Reserved.</h6>
        </div>
        <div className='ota'>
            <img src="https://htmldemo.net/mixy/mixy/assets/images/others/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
