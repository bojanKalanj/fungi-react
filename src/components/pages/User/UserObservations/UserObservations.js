import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UserObservationCard from './UserObservationCard';


const UserObservations = () => {
    return (
        <div>
            <h3>Nalazi korisnika</h3>
            <Row>
                <Col xs='4'>
                    <UserObservationCard />
                </Col>
                <Col xs='4'>
                    <UserObservationCard />
                </Col>
                <Col xs='4'>
                    <UserObservationCard />
                </Col>
                <Col xs='4'>
                    <UserObservationCard />
                </Col>
                <Col xs='4'>
                    <UserObservationCard />
                </Col>
                <Col xs='4'>
                    <UserObservationCard />
                </Col>
                <Col xs='4'>
                    <UserObservationCard />
                </Col>
                <Col xs='4'>
                    <UserObservationCard />
                </Col>
                <Col xs='4'>
                    <UserObservationCard />
                </Col>
            </Row>
        </div>
    )
}

export default UserObservations;