import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Home from './components/pages/Home/Home';
import Observation from './components/pages/Observation/Observation';
import Species from './components/pages/Species/Species';
import User from './components/pages/User/User';
import Header from './components/shared/Header';
import Login from './components/pages/Login/Login';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Container style={{ marginTop: '30px', marginBottom: '30px', maxWidth: '80%' }}>
                        <Route path="/" exact component={Home} />
                        <Route path="/observation" exact component={Observation} />
                        <Route path="/species" exact component={Species} />
                        <Route path="/user" exact component={User} />
                        <Route path="/login" exact component={Login} />
                    </Container>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;