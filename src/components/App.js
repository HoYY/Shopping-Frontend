import React from 'react';
import Header from './Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './login/Login';
import Join from './join/Join';
import './App.scss';


function App() {
    return (
        <Router>
            <Header/>
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/join'} component={Join} />
        </Router>
    );
}

export default App;
