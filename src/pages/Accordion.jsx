import React from 'react'
import 'flowbite';
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const AccordionComponent = () => {
  return (
     <div className='cal' style={{ padding: '16px 46px'}}>
        <Accordion style={{display:'flex',flexDirection:'column',alignItems:'start',padding:'0px'}}>
            <AccordionPanel>
                <AccordionTitle style={{backgroundColor:'transparent',color:'black',outline:"none",fontSize:'14px',marginLeft:'-36px',letterSpacing:'1px'}}>Description</AccordionTitle>
                <AccordionContent>
                    <div style={{paddingTop:'30px'}}>
                        <div style={{width:'97%',border:'1px solid gainsboro',padding:"35px 15px 35px 15px"}}>
                            <h2 style={{fontSize:'26px',letterSpacing:'1px'}}>Our Story</h2>
                            <p style={{color:'gray',letterSpacing:'1px',lineHeight:'20px',paddingTop:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                            <p style={{color:'gray',letterSpacing:'1px',paddingTop:'20px'}}>There has to be a better way right? Yes there is!</p>
                            <p style={{color:'gray',letterSpacing:'1px',paddingTop:'20px'}}>Drying fruit is a simple preservation technique, which means no fruit is wasted due to rot, and the farmers sell 100% of their harvest.</p>
                            <h2 style={{fontSize:'26px',letterSpacing:'1px',paddingTop:'40px'}}>Our Products</h2>
                            <p style={{color:'gray',letterSpacing:'1px',lineHeight:'20px',paddingTop:'10px'}}>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.</p>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionPanel >
            <div className="line" style={{width:'100%',height:'1px',backgroundColor:'gainsboro',marginTop:'20px'}}></div>
            <AccordionPanel>
                <AccordionTitle style={{backgroundColor:'transparent',color:'black',outline:'none',fontSize:'14px',marginLeft:'-36px'}}>Reviews</AccordionTitle>
                <AccordionContent>
                    <div style={{paddingTop:'30px'}}>
                        <div style={{width:'97%',border:'1px solid gainsboro',padding:"35px 15px 35px 15px"}}>
                            <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="gray" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                    </svg>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', gap: '6px', paddingTop: '10px' }}>
                                        {[...Array(5)].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#ffdc39" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        ))}
                                    </div>
                                    <p style={{paddingTop:'15px'}}><span style={{fontSize:'22px',fontWeight:'600'}}>mix83 </span>- November 19, 2022 </p>
                                    <p style={{paddingTop:'15px',letterSpacing:'1px'}}>Have bought several times. Great tasting keto Granola. Too expensive to use as a breakfast cereal but Great to add as a topping . Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sequi commodi quas possimus consequuntur harum ratione at dicta dolore fuga esse beatae praesentium quos itaque ducimus iure perspiciatis. Impedit, quo.</p>
                                </div>
                            </div>
                            <div style={{display:'flex',gap:'20px',alignItems:'center',marginTop:'40px'}}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="gray" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                    </svg>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', gap: '6px', paddingTop: '10px' }}>
                                        {[...Array(5)].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#ffdc39" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        ))}
                                    </div>
                                    <p style={{paddingTop:'15px'}}><span style={{fontSize:'22px',fontWeight:'600'}}>mix83 </span>- November 19, 2022 </p>
                                    <p style={{paddingTop:'15px',letterSpacing:'1px'}}>Have bought several times. Great tasting keto Granola. Too expensive to use as a breakfast cereal but Great to add as a topping . Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sequi commodi quas possimus consequuntur harum ratione at dicta dolore fuga esse beatae praesentium quos itaque ducimus iure perspiciatis. Impedit, quo.</p>
                                </div>
                            </div>
                            <div style={{display:'flex',gap:'20px',alignItems:'center',marginTop:'40px'}}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="gray" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                    </svg>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', gap: '6px', paddingTop: '10px' }}>
                                        {[...Array(5)].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#ffdc39" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        ))}
                                    </div>
                                    <p style={{paddingTop:'15px'}}><span style={{fontSize:'22px',fontWeight:'600'}}>mix83 </span>- November 19, 2022 </p>
                                    <p style={{paddingTop:'15px',letterSpacing:'1px'}}>Have bought several times. Great tasting keto Granola. Too expensive to use as a breakfast cereal but Great to add as a topping . Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sequi commodi quas possimus consequuntur harum ratione at dicta dolore fuga esse beatae praesentium quos itaque ducimus iure perspiciatis. Impedit, quo.</p>
                                </div>
                            </div>
                            <div style={{paddingTop:'20px'}}>
                                <h6 style={{fontSize:'18px',fontWeight:'100',letterSpacing:'1px'}}>Add a review</h6>
                                <h6  style={{fontSize:'18px',fontWeight:'100',letterSpacing:'1px',paddingTop:'15px'}}>Your email address will not be published. Required fields are marked *</h6>
                                <form action="">
                                    <div style={{display:'flex',gap:'33px',paddingTop:'50px'}}>
                                        <div > 
                                            <label htmlFor="">Name*</label> <br />
                                            <input type="text" style={{width:'560px',border:'1px solid gainsboro',padding:'15px',marginTop:'10px',outline:'none'}} />
                                        </div>
                                        <div > 
                                            <label htmlFor="">Name*</label> <br />
                                            <input type="text" style={{width:'564px',border:'1px solid gainsboro',padding:'15px',marginTop:'10px',outline:'none'}} />
                                        </div>
                                    </div>
                                    <div style={{paddingTop:'30px'}}>
                                        <label htmlFor="">Comment*</label> <br />
                                        <textarea name="" id="" cols="164" rows="10" style={{border:'1px solid gainsboro',marginTop:'10px',outline:'none'}}></textarea>
                                    </div>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
     </div>
  )
}

export default AccordionComponent
