import React, { Component } from 'react'
import Mining from '../assets/img/icon/mining.png'
import Exchange from '../assets/img/icon/exchange.png'
import History from '../assets/img/icon/history.png'
import Affiliate from '../assets/img/icon/affiliate.png'
import Exit from '../assets/img/icon/exit.png'
import shib from "../assets/img/SHIB.png";
import doge from "../assets/img/DOGE.png";
import ltc from "../assets/img/LTC.png";
import info from "../assets/img/info.png";
import $ from 'jquery'; 

class exchangebanner extends Component {
    componentDidMount(){
        
  $('.tab-list1').each(function(){                   // Find lists of tabs
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
    }
    render() {
        return (
            <>
            <section className="exchange-main-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div class="div_menu_on_s">
              <div class="item_m_o ">
                  <a href="/mining">
                  <img src={Mining} alt="Mining" className="dashboard-icon"/>
                  Mining</a>
              </div>
              <div class="item_m_o active">
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
                        <div className="col-lg-4 mt-5 avAIABLE-FUNDS">
                        <div class="left_dp">
             <div class="box_balance">
                 <h4>AVAILABLE FUNDS</h4>
                 <div class="info_balance_d">
                     <div class="item_balance" onclick="changeCoin('Shiba inu', 500000,'SHIB',500000,1500000)">
                         <div class="div_img_i_d">
                             <img className="ex-icon" src={shib} alt="SHIBA INU" />
                         </div>
                         <div class="balance_v_d">
                             <span id="balance_shib">0.00000000</span>
                         </div>
                         <div class="syb_d">
                             SHIB
                         </div>
                     </div>
                   <div class="item_balance" onclick="changeCoin('Dogecoin',10,'DOGE',1,10)">
                         <div class="div_img_i_d">
                             <img className="ex-icon" src={doge} alt="Dogecoin" />
                         </div>
                         <div class="balance_v_d">
                             <span id="balance_doge">0.00463450</span>
                         </div>
                         <div class="syb_d">
                             DOGE
                         </div>
                     </div>

                       <div class="item_balance" onclick="changeCoin('Litecoin',0.01,'LTC',0.0001,0.05)">
                         <div class="div_img_i_d">
                             <img className="ex-icon" src={ltc} alt="Litecoin" />
                         </div>
                         <div class="balance_v_d">
                             <span id="balance_ltc">0.00000000</span>
                         </div>
                         <div class="syb_d">
                             LTC
                         </div>
                     </div>
                     
                 </div>
             </div>
         </div>
                        </div>
                        <div className="col-lg-8 mt-5">
                        <div class="tabs">

        <ul class="tab-list1">
          <li class="active"><a class="tab-control" href="#tab-1"><h5>Deposit</h5></a></li>
          <li><a class="tab-control" href="#tab-2"><h5>Withdraw</h5></a></li>
          <li><a class="tab-control" href="#tab-3"><h5>Exchange</h5></a></li>
        </ul>

        <div className="tab-panel active" id="tab-1">
        <div className="box_deposit" id="amount_d_div">
                   <h4>REPLENISHMENT OF AVAILABLE FUNDS:</h4>

                   <div class="img_d_w_txt">
                       <img src={shib} className="ship-des"  id="coin_img_wd"/>
                       <span id="text_d">Shiba inu</span>
                   </div>

                   <div className="input_d">
                       <img src={info}/>
                       <label for="" className="label-col" >Attention before depositing SHIBA INU make sure the network is ERC20. </label>
                       <label>Minimum deposit amount: <span id="text_d_m">500000  SHIB</span></label>
                       <div class="from_d_i">
                           <input type="number" className="input_amount" id="amount_" placeholder="0.00000000"/>
                           <div className="syb_i_d" id="text_s_i">
                               SHIB
                           </div>
                       </div>
                   </div>

                   <div class="from_btn_d">
                       <button class="btn_dep" id="generateWallet">Deposit</button>
                   </div>
               </div>
               <div className="row">
                   <div className="col-lg-12">
                   <div className="box_deposit_addrs" id="hy_addr">
                    <h4>REPLENISHMENT OF AVAILABLE FUNDS:</h4>

                    <div className="list_last_addr_d" id="list_last_addr">


 
                              <div className="div_no_d">
                                  <h4>No deposit pending </h4>
                              </div>



                    </div>
               </div>
                   </div>
               </div>
        </div>

        <div className="tab-panel" id="tab-2">
           <div className="row">
               <div className="col-lg-12">
               <div className="box_deposit" id="wd" >
                    <h4>WITHDRAWAL OF AVAILABLE FUNDS: </h4>

                    <div className="img_d_w_txt">
                       <img src={shib} className="ship-des" id="coin_img_dp"/>
                       <span id="text_d_wd">Shiba inu</span>
                   </div>

                       <div className="input_d">
                       <label>Minimum withdrawal amount: <span id="wd_min">1500000  SHIB</span></label>
                       <div className="from_d_i">
                           <input type="number" class="input_amount" id="amount_wd" placeholder="0.00000000"/>
                           <div className="syb_i_d" id="text_s_wd">
                               SHIB
                           </div>
                       </div>

                        <div className="from_d_i">
                           <input type="text" className="input_address" id="addr_wd" placeholder="Your adress"/>
                          
                       </div>
                       <label>Rate: <span id="rate">500000  SHIB</span></label>
                   </div>

                    <div className="from_btn_d">
                       <button className="btn_dep" id="wd_n">WITHDRAW</button>
                   </div>

               </div>
               </div>
           </div>
        </div>

        <div class="tab-panel" id="tab-3">
        <div className="box_deposit"  id="change_box">

<h5>Exchange</h5>

<div className="form_d_ex">

    <input type="hidden" id="c_type1" value="Shiba inu"/>
    <input type="hidden" id="c_type2" value="Dogecoin"/>

    <div className="inputs_change">
        <div className="from_i_amounts">
            <input type="number" className="i_amount_ex" id="amount_1_ex" placeholder="0.00000000"/>
            <div className="div_simb_ex" data-s="open" id="type1">SHIB</div>
            <div className="div_s_ex" data-s="open"><i className="fas fa-sort-down"></i></div>

                <div className="list_s_coin animated bounceIn" className="list-div-1"  id="list_one_ex">

                  <div className="f_list_e">
                        <div className="item_s_ex" onclick="selectd(1,'SHIB')" id="type1_SHIB">
                            <img src={shib} alt="SHIB" className="img-des-div" />
                            <span>SHIB</span>
                        </div>
                        <div className="item_s_ex" onclick="selectd(1,'DOGE')" id="type1_DOGE">
                            <img src={doge} alt="DOGE" className="img-des-div" />
                            <span>DOGE</span>
                        </div>
                        <div className="item_s_ex" onclick="selectd(1,'LTC')" id="type1_LTC">
                            <img src={ltc} alt="LTC" className="img-des-div" />
                            <span>LTC</span>
                        </div>
                    </div>
                </div>


        </div>

        <div className="from_i_amounts">
            <input type="number" className="i_amount_ex" id="amount_2_ex" placeholder="0.00000000"/>
            <div className="div_simb_ex" data-d="open" id="type2">DOGE</div>
            <div className="div_s_ex" data-d="open"><i className="fas fa-sort-down"></i></div>
            <div className="list_s_coin animated bounceIn" className="list-div-1" id="list_two_ex">

                  <div className="f_list_e">
                        <div className="item_s_ex" onclick="selectd(2,'SHIB')" id="type2_SHIB" className="list-div-1">
                            <img src={shib} alt="SHIB" className="img-des-div" />
                            <span>SHIB</span>
                        </div>
                        <div className="item_s_ex" onclick="selectd(2,'DOGE')" id="type2_DOGE">
                            <img src={doge} alt="DOGE" className="img-des-div" />
                            <span>DOGE</span>
                        </div>
                        <div className="item_s_ex" onclick="selectd(2,'LTC')" id="type2_LTC">
                            <img src={ltc} alt="LTC" className="img-des-div" />
                            <span>LTC</span>
                        </div>
                    </div>
                </div>
        </div>
        <div className="info_ex_i">
            <span></span>
            <span>Rate: 5%</span>
        </div>
         <div className="from_i_amounts">
             <button className="btn_exchange" id="change">Exchange</button>
         </div>
    </div>
    <div className="info_exch">
        <div className="form_info_item">
            <img id="type1_img" src={shib} alt="SHIB" className="sec-des-img" />
            <span id="type1_syb">SHIB</span>
            <span id="type1_price">Price: $        0.00001  </span>
        </div>
        <div className="form_info_item">
            <img id="type2_img" src={doge} alt="DOGE" className="sec-des-img" />
            <span id="type2_syb">DOGE</span>
            <span id="type2_price">Price: $  0.24        </span>
        </div>
         <h4>Result </h4>
         <div className="box_result">
             <span id="rs_ex">0.00000000 DOGE</span>
         </div>

    </div>
</div>

</div>
       <div class="row">
           <div class="col-lg-12 mt-5">
               <div className="history-div">
                   <p className="history-name">Last 10 trading histories</p>
                   <div class="list_hy">


<div className="item_hty" >
      <div className="div_img_hy">
          <img src={shib} alt="SHIB" className="shib-history" />
      </div>
      <div className="amount_div">
          188.84606481 SHIB
      </div>
      <div className="amount_div">
         =&gt;
      </div>
      <div className="amount_div">
          0.00463450 DOGE
      </div>
      <div className="type_ty">

          Rate: 0.00024392 DOGE
      
         
      </div>
     
   
      <div className="div_date_hty">
          06/18/2021, 7:57:35 AM
      </div>
  </div>





</div>
</div>
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
export default exchangebanner;