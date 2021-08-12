import React, { Component } from 'react'
import Header from '../component/Layout/Header'
import Footer from '../component/Layout/Footer'
import HomeBanner from '../pages/HomeBanner'

 class Home extends Component {
    render() {
        return (
            <>
            <Header/>
            <HomeBanner/>
            <Footer/>
          </>
        )
    }
}

export default Home
