import React from 'react'

const News = () => {
  return (
    <div style={{backgroundColor:'#184D47'}}>
      <div className='cal cat' style={{ padding: '66px 46px',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',color:'white',placeItems:'center' }}>
        <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-envelope-paper-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75zM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765M16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516zm-8 3.3 5.693-3.162L0 6.873v6.5Z"/>
            </svg>
            <div>
                <h3 style={{fontSize:'30px'}}>Sign up to Newsletter</h3>
                <p style={{fontSize:'18px'}}>...and receive $20 coupon for first <br /> shopping</p>
            </div>
        </div>
        <div>
            <form action="" style={{position:'relative'}}>
                <input className='fam' type="text" placeholder='Your Email Address...' style={{background:'white',padding:'15px',width:'400px',height:'32px',borderRadius:'50px',border:'none',outline:'none'}}/>
                <button style={{backgroundColor:'#179957',position:'absolute',bottom:'7px',right:'10px'}}>Subscribe!</button>
            </form>
        </div>
        <div className='ota' style={{backgroundColor:'#043C36',display:'flex',padding:'20px 30px 20px 30px',gap:'20px',borderRadius:'60px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
            <div>
                <p>Call Us 24/7</p>
                <h3 style={{fontSize:'28px'}}>+8 88 55 <br /> 4168</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default News
