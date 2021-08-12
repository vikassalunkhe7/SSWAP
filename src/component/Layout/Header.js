import React, { Component } from 'react'
import Headerlogo from "../../assets/img/logo.png"
import $ from "jquery";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            
       }
   }

   
    render() {

        return (
            <>

<header class="px-2 py-3 py-lg-0 px-sm-0">
      <div class="container">
        <div class="row align-items-center justify-content-between">
        <div >
          <a href="/" title="Site Logo" class="header-logo d-block">
          <img src={Headerlogo} alt="headerlogo" className="img-fluid"></img>
        
                    <span className="divtitle"> Shiba</span>      <span className="header-text-name">Swap</span>
                       
          </a>
          </div>
          <nav class="d-none d-lg-block">
            <ul class="main-menu d-flex flex-column flex-lg-row align-items-lg-center list-unstyled p-0 m-0">
              <li class="">
                <a href="/" class="d-block" title="Home">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/#plan" class="d-block" title="Services">
                  <span>Pricing</span>
                </a>
                {/* <ul class="sub-menu list-unstyled p-0 m-0">
                  <li>
                    <a href="#" class="d-block" title="SERVICE 1">
                      <span>SERVICE 1</span>
                    </a>
                  </li>
                </ul> */}
              </li>
              <li>
                <a href="/#stas" class="d-block" title="About">
                  <span>Stats</span>
                </a>
              </li>
              <li>
                <a href="/#faq" class="d-block" title="Blog">
                  <span>FAQ</span>
                </a>
              </li>
              <li>
                <a href="/#affiliate" class="d-block" title="Contact">
                  <span>Affiliate</span>
                </a>
              </li>
              <li>
                <a href="/mining" class="d-block" title="Contact">
                  <span>Dashboard</span>
                </a>
              </li>
            </ul>
          </nav>
     
          <div
            class="side-menu-close d-flex d-lg-none flex-wrap flex-column align-items-center justify-content-center ml-auto">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>




    <div class="side-menu-wrap">
      <a href="" title="Site Logo" class="side-menu-logo d-block py-3">
      <img src={Headerlogo} alt="headerlogo" className="img-fluid"></img>
      </a>
      <nav class="side-menu-nav">
    
      </nav>
      <div class="side-menu-close d-flex flex-wrap flex-column align-items-center justify-content-center">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>


{/* Mobile menu */}

            
       {/* <section className="header-sec">
           <div className="container d-lg-block d-none">
               <div className="row">
                   <div className="col-lg-12 header-main-div mt-5 ">
                       <div className="head-logo-div d-flex ">
            <img src={Headerlogo} alt="headerlogo" className="img-fluid"></img>
            <div class="div_title ">
                           Shiba<span>Swap</span>
                       </div>
                       </div>
                       <div className="nav-menu-div mt-3">
                           <ul className="nav-inner d-flex ">
                               <li className="nav-name mr-3"><a href="">Home</a></li>
                               <li className="mr-3"><a href="#plan">Pricing</a></li>
                               <li className="mr-3"><a href="#stas">Stats</a></li>
                               <li className="mr-3"><a href="#faq">FAQ</a></li>
                               <li className="mr-3"><a href="#affiliate">Affiliate</a></li>
                               <li className="mr-3"><a href="/mining">Dashboard</a></li>

                           </ul>
                       </div>
                   </div>
               </div>
           </div>
           </section>    */}
            </>
        )
    }
}


export default Header
