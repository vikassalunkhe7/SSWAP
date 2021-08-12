import React, { Component } from 'react'
import $ from 'jquery'; 
import Mining from '../assets/img/icon/mining.png'
import Exchange from '../assets/img/icon/exchange.png'
import History from '../assets/img/icon/history.png'
import Affiliate from '../assets/img/icon/affiliate.png'
import Exit from '../assets/img/icon/exit.png'
import shib from "../assets/img/SHIB.png";

 class HistoryBanner extends Component {
     componentDidMount(){
        $('.tab-list2').each(function(){                   // Find lists of tabs
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
            <section className="history-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                        <div class="div_menu_on_s">
              <div class="item_m_o ">
                  <a href="/mining">
                  <img src={Mining} alt="Mining" className="dashboard-icon"/>
                  Mining</a>
              </div>
              <div class="item_m_o ">
                  <a href="/exchange">
                  <img src={Exchange} alt="Exchange" className="dashboard-icon"/>
                  Exchange</a>
              </div>
              <div class="item_m_o active">
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
                  <a href="/">
                  <img src={Exit} alt="Exit" className="dashboard-icon"/>
                  Exit</a>
              </div>
          </div>




                        <ul class="tab-list2 mt-5">
          <li class="active"><a class="tab-control" href="#tab-1"><h5 className="text-center">Description</h5></a></li>
          <li><a class="tab-control" href="#tab-2"><h5 className="text-center">Ingredients</h5></a></li>
          <li><a class="tab-control" href="#tab-3"><h5 className="text-center">Delivery</h5></a></li>
        </ul>

        <div class="tab-panel active" id="tab-1">
          <div className="row">
              <div className="col-lg-12 first-des-tab">
                  <p className="last-des">Last deposit history</p>
              </div>

          </div>
        </div>

        <div class="tab-panel" id="tab-2">
        <div className="row">
              <div className="col-lg-12 first-des-tab">
                  <p className="last-des">Last withdraw history</p>
              </div>

          </div>
        </div>

        <div class="tab-panel" id="tab-3">
        <div className="row">
              <div className="col-lg-12 first-des-tab">
                  <p className="last-des">Last withdraw history</p>
                
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
            </section>
            </>
        )
    }
}

export default HistoryBanner