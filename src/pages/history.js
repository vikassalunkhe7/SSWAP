import React, { Component } from 'react'
import Header from '../component/Layout/Header'
import Footer from '../component/Layout/Footer'
import HistoryBanner from '../pages/HistoryBanner'
 class history extends Component {
    render() {
        return (
            <>
            <Header/>
          <HistoryBanner/>
            <Footer/>
            </>
        )
    }
}


export default history
