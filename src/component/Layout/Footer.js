import React, { Component } from 'react'
import Headerlogo from "../../assets/img/logo.png"

 class Footer extends Component {
    render() {
        return (
            <>
     <section className="footer-sec">
         <div className="container-fluid">
             <div className="row">
                 <div className="col-lg-12">
                 <div class="footer">
          <img src={Headerlogo} alt="ShibaSpace"/>
          <p>© Copyright, ShibaSpace, All rights reserved.</p>

    </div>
    

                 </div>
             </div>
         </div>

     </section>
            </>
        )
    }
}

export default Footer
