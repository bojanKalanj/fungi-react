import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Home from './components/pages/Home';
import Observation from './components/pages/Observation';
import Species from './components/pages/Species';
import User from './components/pages/User';
import Header from './components/shared/Header';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                        <Container>
                            <Route path="/" exact component={Home} />
                            <Route path="/observation" exact component={Observation} />
                            <Route path="/species" exact component={Species} />
                            <Route path="/user" exact component={User} />
                        </Container>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;