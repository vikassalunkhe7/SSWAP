import React, { Component } from 'react'
import Header from '../component/Layout/Header'
import Footer from '../component/Layout/Footer'
import AffiliateBanner from '../pages/AffiliateBanner'

class Affiliate extends Component {
    render() {
        return (
            <>
                      <Header/>
            <AffiliateBanner/>
            <Footer/>  
            </>
        )
    }
}

export default Affiliate
