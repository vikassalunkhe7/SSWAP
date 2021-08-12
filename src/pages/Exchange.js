import React, { Component } from 'react'
import Header from '../component/Layout/Header'
import Footer from '../component/Layout/Footer'
import ExchangeBanner from './ExchangeBanner'


 class Exchange extends Component {
    render() {
        return (
            <>
                 <Header/>
         <ExchangeBanner/>
            <Footer/> 
            </>
        )
    }
}

export default Exchange
