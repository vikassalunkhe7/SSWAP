import React, { Component } from 'react'
import Mining from '../assets/img/icon/mining.png'
import Exchange from '../assets/img/icon/exchange.png'
import History from '../assets/img/icon/history.png'
import Affiliate from '../assets/img/icon/affiliate.png'
import Exit from '../assets/img/icon/exit.png'


 class AffiliateBanner extends Component {
    render() {
        return (
            <>
            <section className="afiliate-sec">
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
              <div class="item_m_o ">
                   <a href="/history">
                  <img src={History} alt="History" className="dashboard-icon"/>
                   History</a>
              </div>
              <div class="item_m_o active">
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <div class="box_aff">

<h4>Affiliate program </h4>
<p>For each affiliate you will get a 5% commission
from the investment plan in SHIB. </p>

<div class="info_aff">
    <div class="item_info_aff">
        <div class="div_amount_af">0</div>
        <span>My referrals</span>
    </div>
    <div class="item_info_aff">
        <div class="div_amount_af">
            0
           <span>SHIB</span>
        </div>

        <span>Total gain</span>
    </div>
    <div class="item_info_aff">
        <div class="div_amount_af">5%</div>
        <span>Commission </span>
    </div>
</div>

<div class="form_inp_ref">
    <label>My referral url:</label>
    <div class="f_input">
        <div class="box_v_aff">
            https://shibaspace.com/?p=71381
        </div>
        <div class="btn_copy_aff" data-clipboard-text="https://shibaspace.com/?p=71381">
            COPY
        </div>
    </div>
</div>

<div class="box_list_aff">
    <h4>Referrals:</h4>

    <div class="list_aff">


                <div class="info_not_aff">No affiliate history</div>
        
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

export default AffiliateBanner