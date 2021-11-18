import React, { Component } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import Shoes from './Shoes';

// doc about Routes: https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md#index-routes
class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route exact path="/" element={<Landing/>}/>
                        <Route exact path="/shoes" element={<Shoes/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
};

export default App;