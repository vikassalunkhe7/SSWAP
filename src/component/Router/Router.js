import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Affiliate from '../../pages/Affiliate'
import Exchange from '../../pages/Exchange'
import history from '../../pages/history'
import Home from "../../pages/Home"
import mining from '../../pages/mining'

 class Router extends Component {
    render() {
        return (
            <>
               <BrowserRouter>
               <Route exact path="/"component={Home}/>
               <Route exact path="/mining"component={mining}/>
               <Route exact path="/exchange"component={Exchange}/>
               <Route exact path="/history"component={history}/>
               <Route exact path="/affiliate"component={Affiliate}/>

               </BrowserRouter> 
            </>
        )
    }
}

export default Router