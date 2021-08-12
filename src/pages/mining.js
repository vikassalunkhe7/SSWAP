import React, { Component } from 'react';
import Header from '../component/Layout/Header'
import Footer from '../component/Layout/Footer'
import MiningBanner from './MiningBanner'



 class mining extends Component {
    render() {
        return (
            <>
                 <Header/>
            <MiningBanner/>
                 <Footer/>
            </>
        )
    }
}

export default mining;