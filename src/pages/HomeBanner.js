import React, { Component } from "react";
import shibinu from "../assets/img/shib-inu.png";
import user from "../assets/img/icon/user.png";
import online from "../assets/img/icon/online.png";
import paid from "../assets/img/icon/paid.png";
import earth from "../assets/img/Earth.png";
import mars from "../assets/img/Mars.png";
import uranus from "../assets/img/Uranus.png";
import saturm from "../assets/img/Saturm.png";
import moon from "../assets/img/Moon.png";
import shiba from "../assets/img/icon/shiba_faq.png";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { FaTelegram } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

class HomeBanner extends Component {
  constructor(props) {
    super(props)
  
    this.state = {

    }
  }
  componentDidMount(){
  
var i;
const items = document.querySelectorAll(".accordion-item h2");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
    
    
    
  }
  
  render() {
    return (
      <>
        <section className="home-banner-sec">
          <div className="container">
            <div className="row">
            <Fade left>
              <div className="col-lg-6 fist-text-info">
                <div class="info">
                  <h4 className="banner-text">Free SHIBA INU Cloud Mining</h4>
                  <p className="sec-banner-text">
                    Mine SHIBA with the latest technology equipment and best
                    location choices making it accessible and profitable for
                    everyone.
                  </p>

                  <div class="count-value animated bounceIn">
                    <span id="miner">+0.00000000</span>
                    <span className="shiba-heading">SHIBA</span>
                  </div>

                  <div className="social_n">
                    Follow:
                    <a href="https://t.me/shibaspace">
                     
                      <FaTelegram className="social-media-icon  mr-4"/>
                      <FaMedium className="social-media-icon mr-4"/>
                      <FaFacebookSquare className="social-media-icon mr-4"/>
                      <FaInstagram className="social-media-icon mr-4"/>
                
               
                      {/* <i
                        class="fa fa-telegram tele-icon"
                        aria-hidden="true"
                      ></i> */}
                    </a>
                  </div>
                </div>
              </div>
              </Fade>
              <Flip left>
              <div className="col-lg-6">
                <div className="r_img_r">
                  <img src={shibinu} />
                </div>
              </div>
              </Flip>

              <div className="col-lg-12 stats-div text-center" id="stas">
                <p>Stats</p>
                <div className="row ">
                  <div className="col-lg-4 mt-5 main-circle-div">
                    <div className="item_stats">
                      <div class="stats_cilcle">
                        <img
                          src={user}
                          alt="Total users"
                          className="stats-img"
                        />
                      </div>
                      <p>Total users</p>
                      <h5>51284</h5>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-5 main-circle-div">
                    <div className="item_stats">
                      <div className="stats_cilcle">
                        <img
                          src={online}
                          alt="Site Online"
                          className="stats-img"
                        />
                      </div>
                      <p>Site Online</p>
                      <h5>3 days</h5>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-5 main-circle-div">
                    <div className="item_stats">
                      <div className="stats_cilcle">
                        <img
                          src={paid}
                          alt="Total paid"
                          className="stats-img"
                        />
                      </div>
                      <p>Total paid</p>
                      <h5>122952815.321</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 d-flex justify-content-center earth-card-sec " id="plan">
                <h4>PLEASE SELECT YOUR PLAN</h4>
                <br />
              </div>
              <div className="col-lg-12 d-flex justify-content-center">
                <p className="sec-inner-div">
                  Enjoy real benefits and rewards on your accrue investing.
                </p>
              </div>
              <div className="col-lg-4 d-flex justify-content-center mt-5">
                <div className="item_power bg_Earth">
                  <div className="img_power">
                    <img className="item-earth-img" src={earth} alt="Earth" />
                  </div>

                  <div className="info_c_power">
                    <div className="price_power">
                      #Earth
                      <span> Free</span>
                    </div>
                    <div className="price_power">
                      350000
                      <span>SHIB</span>
                    </div>
                    <div className="item_info">17500 shib/day</div>
                    <div className="item_info">30 work days</div>
                    <div className="item_info">5% Daily Profit</div>

                    <div className="div_item_btn_p">
                      <button className="btn_power" disabled>
                        Free
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-center mt-5">
                <div class="item_power bg_Mars">
                  <div class="img_power">
                    <img src={mars} alt="Mars" className="item-earth-img" />
                  </div>

                  <div class="info_c_power">
                    <div class="price_power">#Mars</div>
                    <div class="price_power">
                      3000000
                      <span>SHIB</span>
                    </div>
                    <div class="item_info">127500 shib/day</div>
                    <div class="item_info">30 work days</div>
                    <div class="item_info">4.25% Daily Profit</div>

                    <div class="div_item_btn_p">
                      <button
                        class="btn_power"
                        data-toggle="modal"
                        data-target="#login"
                      >
                        Buy Power
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-center mt-5">
                <div class="item_power bg_Uranus">
                  <div class="img_power">
                    <img src={uranus} alt="Uranus" className="item-earth-img" />
                  </div>

                  <div class="info_c_power">
                    <div class="price_power">#Uranus</div>
                    <div class="price_power">
                      20000000
                      <span>SHIB</span>
                    </div>
                    <div class="item_info">1000000 shib/day</div>
                    <div class="item_info">30 work days</div>
                    <div class="item_info">5% Daily Profit</div>

                    <div class="div_item_btn_p">
                      <button
                        class="btn_power"
                        data-toggle="modal"
                        data-target="#login"
                      >
                        Buy Power
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-center mt-5">
                <div class="item_power bg_Saturm">
                  <div class="img_power">
                    <img src={saturm} alt="Saturm" className="item-earth-img" />
                  </div>

                  <div class="info_c_power">
                    <div class="price_power">#Saturm</div>
                    <div class="price_power">
                      60000000
                      <span>SHIB</span>
                    </div>
                    <div class="item_info">3750000 shib/day</div>
                    <div class="item_info">30 work days</div>
                    <div class="item_info">6.25% Daily Profit</div>

                    <div class="div_item_btn_p">
                      <button
                        class="btn_power"
                        data-toggle="modal"
                        data-target="#login"
                      >
                        Buy Power
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-center mt-5">
                <div class="item_power bg_Moon">
                  <div class="img_power">
                    <img src={moon} alt="Moon" className="item-earth-img" />
                  </div>

                  <div class="info_c_power">
                    <div class="price_power">#Moon</div>
                    <div class="price_power">
                      250000000
                      <span>SHIB</span>
                    </div>
                    <div class="item_info">20625000 shib/day</div>
                    <div class="item_info">30 work days</div>
                    <div class="item_info">8.25% Daily Profit</div>

                    <div class="div_item_btn_p">
                      <button
                        class="btn_power"
                        data-toggle="modal"
                        data-target="#login"
                      >
                        Buy Power
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 affilia-div" id="affiliate">
          
                  <h3 className="aff-head">AFFILIATE PROGRAM</h3>
                  <p className="sec-div">Put your investing ideas into action with a full range of investments. Enjoy real benefits and rewards on your accrue investing.</p>
         
              
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-3 item_box_aff">
              <h4 className="card-div">Join Now</h4>
                           <p className="inner-text">And start mining Shiba inu
with no investments!</p>
              </div>
              <div className="col-lg-3 item_box_aff">
              <h4 className="card-div">Invite your friends</h4>
                           <p className="inner-text">And get your bonus from
every purchase they done!</p>
                  </div>
                  <div className="col-lg-3 item_box_aff">
                  <h4 className="card-div"> Earn up to 5% more</h4>
                           <p className="inner-text">And be free for whote of
your life!</p>
                  </div>
                  <div className="col-lg-1 "></div>
               <div className="col-lg-12 affilia-div-FAQ" id="faq">
                   <p className="aff-head">FAQ</p>
                   </div> 
                   <div className="col-lg-12 d-flex info_faq">
                       <div className="col-lg-5 d-lg-block d-none">
                       <img src={shiba} className="img-fluid faq-shiba"/>
                       </div>
                       <div className="col-lg-7 main-acordian">
                
<div class="accordion">
    <div class="accordion-item">
      <h2 id="accordion-button-1" aria-expanded="false"><span class="accordion-title">Who you are?
</span><span class="icon" aria-hidden="true"></span></h2>
      <div class="accordion-content">
        <p>We are team of crypto enthusiasts which working on crypto investment to let them be more fun and affordable for investors.</p>
        <p> And we are here especially for you, just try and you will enjoy world of cryptocurrencies.</p>
      </div>
    </div>
    <div class="accordion-item">
      <h2 id="accordion-button-1" aria-expanded="false"><span class="accordion-title">With which cryptocurrencies are you working?
</span><span class="icon" aria-hidden="true"></span></h2>
      <div class="accordion-content">
        <p>This project as well as our team is oriented on Dogecoin,Shiba inu, </p>
        <p> Litecoin which is more perspective value for future crypto investment.</p>
      </div>
    </div>
   <div class="accordion-item">
      <h2 id="accordion-button-1" aria-expanded="false"><span class="accordion-title">Do you have a referral system?
</span><span class="icon" aria-hidden="true"></span></h2>
      <div class="accordion-content">
        <p>Sure, ShibaSpace team propose you competitive referral system in which you will earn 5% of worker cost that will be bought by your referral using your private link. </p>
        <p>This funds will be available for withdrawal from your account. You are not permitted to create fake (referral) accounts using your referral link. This will cause us to block both accounts - parent and fake with no deposit return.</p>
      </div>
    </div>
   <div class="accordion-item">
      <h2 id="accordion-button-1" aria-expanded="false"><span class="accordion-title">It’s a mandatory to invest something for earning on our project?</span><span class="icon" aria-hidden="true"></span></h2>
      <div class="accordion-content">
        <p>Not at all, we have special possibility to work with our referral program by inviting your friends using your personal link or even using our promo material to share it on social network for earn money by involving new partners to our project.</p>
        <p>Also you can earn by participate in our contests and special promo which we will do on monthly basis, don’t miss your chance. And as a welcome bonus and presentation of our abilities first shared worker – you will received ABSOLUTELY FREE after a registration on our project.</p>
      </div>
    </div>
   <div class="accordion-item">
      <h2 id="accordion-button-1" aria-expanded="false"><span class="accordion-title">What is the minimum amount for deposit and withdrawal?
</span><span class="icon" aria-hidden="true"></span></h2>
      <div class="accordion-content">
        <p>Please note that the company has set limits on minimum withdrawals and deposit amount.  </p>
        <p>ShibaSapce accepts deposits in the amount of 500000 SHIB, 10 DOGE, 0.01 LTC. Profit withdrawal is available when reaching the following amounts in the user's balance: 10DOGE, 1500000 SHIB, 0.05 LTC.</p>
      </div>
    </div>
  </div>
                           </div>
                       
                       </div> 

                  
            </div>
          </div>
     
        </section>
      </>
    );
  }
}

export default HomeBanner;
