import React from "react";
import About from "./About";
import Seller from "./Seller";
import Super from "./Super";
import Card from "./Card";
import New from "./New";
import Natural from "./Natural";
import Popular from "./Popular";
import News from "./News";
import Free from "./Free";
import Footer from "./Footer";

const Home = ()=>{
  return(
   <div>
      <div className="cam">
        <div className="grid " style={{paddingRight:'100px'}}>
          <div className="lun">
            <p className="get">100% ORGANIC POTATO</p>
            <h1>Potato Chips & Pepper With Onion</h1>
            <p>Starting At</p>
            <h2>$18.34</h2>
            <button>Shop Now</button>
          </div>
        </div>
    </div>
    <About/>
    <Seller/>
    <Super/>
    <Card/>
    <New/>
    <Natural/>
    <Popular/>
    <News/>
    <Free/>
    <Footer/>
   </div>
  )
}

export default Home