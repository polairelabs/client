import React, { Component } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Shoe from './Shoe';

// doc about Routes: https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md#index-routes
class App extends Component {

    componentDidMount() {
        // make an api call to fetch a shoe
        this.props.fetchShoe();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route exact path="/" element={<Landing/>}/>
                        <Route exact path="/shoe" element={<Shoe/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);