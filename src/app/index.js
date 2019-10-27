import React from 'react';
import Header from "./components/Header/index";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/pokemon/:name' component={Detail}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;