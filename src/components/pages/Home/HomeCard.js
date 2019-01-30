import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Holder from 'react-holder'

import { Link } from 'react-router-dom';

const HomeCard = () => {
    return(
        <Card style={{ marginTop: '30px' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>fungi shroom</Card.Title>
                <Link className="mb-2 text-muted" to="/">
                    Bojan Kalanj
                </ Link>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">1. 30. 2019</small>
            </Card.Footer>
        </Card>
    )
}

export default HomeCard;