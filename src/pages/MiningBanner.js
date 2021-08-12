import React, { Component } from 'react'
import Mining from '../assets/img/icon/mining.png'
import Exchange from '../assets/img/icon/exchange.png'
import History from '../assets/img/icon/history.png'
import Affiliate from '../assets/img/icon/affiliate.png'
import Exit from '../assets/img/icon/exit.png'
import earth from "../assets/img/Earth.png";

import mars from "../assets/img/Mars.png";
import uranus from "../assets/img/Uranus.png";
import saturm from "../assets/img/Saturm.png";
import moon from "../assets/img/Moon.png";
import $ from 'jquery'; 
import Wobble from 'react-reveal/Wobble';
import Bounce from 'react-reveal/Bounce';

 class MiningBanner extends Component {
     componentDidMount(){
     
  $('.tab-list').each(function(){                   // Find lists of tabs
    var $this = $(this),                            // Store this list
        $tab = $this.find('li.active'),             // Get the active list item
        $link = $tab.find('a'),                     // Get link from active tab
        $panel = $($link.attr('href'));             // Get active panel
  
    $this.on('click', '.tab-control', function(e) { // When click on a tab
      e.preventDefault();                           // Prevent link behavior
      var $link = $(this),                          // Store the current link
          id = this.hash;                           // Get href of clicked tab 
  
      if (id && !$link.is('.active')) {             // If not currently active
        $panel.removeClass('active');               // Make panel inactive
        $tab.removeClass('active');                 // Make tab inactive
  
        $panel = $(id).addClass('active');          // Make new panel active
        $tab = $link.parent().addClass('active');   // Make new tab active 
      }
    });
  });

  


  function miner(id,speed){

    setInterval(() =>{
     let balance = parseFloat($("#balance_"+id).text());
     let speed = parseFloat($("#speed_"+id).val())/10;
     let v = balance + speed;
     $("#balance_"+id).text((v).toFixed(8));

    },100);
   }

     }
    render() {
        return (
            <>
                     <section className="dashboard-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <div class="div_menu_on_s">
              <div class="item_m_o active">
                  <a href="/mining">
                  <img src={Mining} alt="Mining" className="dashboard-icon"/>
                  Mining</a>
              </div>
              <div class="item_m_o ">
                  <a href="/exchange">
                  <img src={Exchange} alt="Exchange" className="dashboard-icon"/>
                  Exchange</a>
              </div>
              <div class="item_m_o ">
                   <a href="/history">
                  <img src={History} alt="History" className="dashboard-icon"/>
                   History</a>
              </div>
              <div class="item_m_o ">
                  <a href="/affiliate">
                  <img src={Affiliate} alt="Affiliate" className="dashboard-icon"/>
                  Affiliate</a>
              </div>
              <div class="item_m_o">
                  <a href="/exit">
                  <img src={Exit} alt="Exit" className="dashboard-icon"/>
                  Exit</a>
              </div>
          </div>
                            </div>

                            {/* tab sec */}

                            <div className="col-lg-7 mt-5">
                            <div className="balance-div">
                                <div className="balance-inner-div">
                                    <h4>Balance:</h4>
                                    <span className="inner-balance">0.000000000</span> <span className="inner-shib">SHIB</span>
                                </div>
                                <div className="wallet-button mt-2">
                                    <button className="withdraw-btn">Withdraw</button>
                                    <button className="deposite-btn mt-2">Deposit</button>
                                </div>
                            </div>
                     

                     {/* tabs */}

                     <div class="tabs">

        <ul class="tab-list">
          <li class="active"><a class="tab-control" href="#tab-1"><h5>My Miner</h5></a></li>
          <li><a class="tab-control" href="#tab-2"><h5>Buy Power</h5></a></li>
         
        </ul>
        <Wobble>
        <div class="tab-panel active" id="tab-1">
        <div class="div_all_miner animated bounceInLeft" id="my_miner" >


<script> miner('60cc4dabb8302025523c09c1')</script>

<div class="item_miner bg_Earth">
    <input type="hidden" id="speed_60cc4dabb8302025523c09c1" value="0.2025462962962963"/>
    <div className="div_img_m">
        <img src={earth} alt="Earth" className="tab-img" />
    </div>
    <div className="info_miner">
        <h4>#Earth</h4>
        <div className="div_bar_c">
            <div className="bar_miner">
                <div className="bar_c empty-div" ></div>
            </div>
        </div>
        <div class="div_date_l" id="time_60cc4dabb8302025523c09c1">
            27 Day 10h 36m 19s
        </div>
    </div>
    <div className="balance_div">
        <div className="div_collect">
            <button className="btn_collect" id="collect_60cc4dabb8302025523c09c1" onclick="collect('60cc4dabb8302025523c09c1')">Collect</button>
        </div>
        <div className="div_balance_miner">
            <span id="balance_60cc4dabb8302025523c09c1">52261.28360093</span>
        </div>
        <div className="div_simb">
            SHIB
        </div>
    </div>
</div>



</div>
        </div>
        </Wobble>
     
        <div class="tab-panel" id="tab-2">
        <Bounce bottom>
            <div className="row">
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
            </div>
     
            </Bounce>
        </div>

   
</div>
                            </div>
                            <div className="col-lg-5 mt-5">
                                <div className="login-guest-div">
                                    <p className="wel-come-text">Welcome</p><span className="guest-name mt-1">Gugglu</span>

                                </div>
                                <div className="refrel-box">
                                    <h4 className="ref-text">My referral url:</h4>
                                    <p className="inner-ref-text mt-2">For each affiliate you will get a 5% commission from the investment plan in SHIB.</p>
                                    <div class="form_inp_ref mb-3">
               
                <div class="f_input">
                    <div class="box_v_aff">
                        https://shibaspace.com/?p=71381
                    </div>
                    <div class="btn_copy_aff" data-clipboard-text="https://shibaspace.com/?p=71381">
                        COPY
                    </div>
                </div>
            </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


            </>
        )
    }
}

export default MiningBanner
