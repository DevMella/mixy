import React from 'react';
import frut from '../../src/assets/frut.png';
import News from './News';
import  Footer from './Footer';

const Login = () => {
  return (
    <div>
      <div style={{backgroundColor:'#f5f9ef'}}>
        <div style={{backgroundImage: `url(${frut})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right',  width: '100%',  marginTop: '76px'}}>
          <div style={{padding: '66px 46px'}}>
            <h1 style={{fontSize:'45px'}}>Contact Us</h1>
            <div style={{display:'flex', alignItems:'center',gap:'10px',color:'gray',paddingTop:'20px'}}>
              <p>Home</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className='cal cat' style={{padding: '66px 46px',display:'grid',gridTemplateColumns:'1fr 2fr',gap:'100px'}}>
          <div>
            <h2 style={{fontSize:'26px'}}>Let us know how we can help</h2>
            <p style={{color:'gray',paddingTop:'15px',wordSpacing:'5px',lineHeight:'20px'}}>Please contact us using the below options. For fastest reply, please include your name, organization, appropriate contact information and a brief summary of your inquiry.</p>
            <div style={{paddingTop:"30px",display:'flex',gap:'20px'}}>
              <div style={{width:'60px',height:'60px',borderRadius:'50%',backgroundColor:'#e9f4ec',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="#184D47" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
              </div>
              <div>
                <h5 style={{fontSize:'20px'}}>Office Location</h5>
                <p style={{fontSize:'15px',color:"gray",paddingTop:'10px',lineHeight:'19px'}}>Riverside Building, County Hall, <br /> London SE1 7PB, United Kingdom</p>
              </div>
            </div>
            <div style={{paddingTop:"30px",display:'flex',gap:'20px'}}>
              <div style={{width:'60px',height:'60px',borderRadius:'50%',backgroundColor:'#f7efed',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="#de7e5b" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
              </div>
              <div>
                <h5 style={{fontSize:'20px'}}>Call us anytime</h5>
                <p style={{fontSize:'15px',color:"gray",paddingTop:'10px',lineHeight:'19px'}}>Riverside Building, County Hall, <br /> London SE1 7PB, United Kingdom</p>
              </div>
            </div>
            <div style={{paddingTop:"30px",display:'flex',gap:'20px'}}>
              <div style={{width:'60px',height:'60px',borderRadius:'50%',backgroundColor:'#ece1eb',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="#8b2982" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
              </div>
              <div>
                <h5 style={{fontSize:'20px'}}>Send mail</h5>
                <p style={{fontSize:'15px',color:"gray",paddingTop:'10px',lineHeight:'19px'}}>support1@demo.com <br />support2@demo.com</p>
              </div>
            </div>
          </div>
          <div>
            <form action="" className='maa' style={{marginRight:'30px'}}>
              <input type="text" placeholder='Name*' style={{outline:'none',width:'100%',height:'30px',padding:'10px',borderRadius:'2px',border:'1px solid gainsboro'}} name="" id="" />
              <input type="email" placeholder='Email*' name="" style={{outline:'none',width:'100%',height:'30px',padding:'10px',borderRadius:'2px',border:'1px solid gainsboro',marginTop:'30px'}} id="" />
              <input type="number" placeholder='Phone' name="" style={{outline:'none',width:'100%',height:'30px',padding:'10px',borderRadius:'2px',border:'1px solid gainsboro',marginTop:'30px'}} id="" />
              <textarea name="" placeholder='Message*' id="" cols="30" rows="6" style={{outline:'none',width:'100%',padding:'10px',borderRadius:'2px',border:'1px solid gainsboro',marginTop:'30px'}}></textarea>
              <button>Send Message</button>
            </form>
          </div>
        </div>
        <News/>
        <Footer/>
    </div>
  );
};

export default Login;
