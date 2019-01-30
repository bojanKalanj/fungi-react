import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UserCard from './UserCard';
import UserObservations from './UserObservations/UserObservations';

const User = () => {
    return (
        <div style={{ marginTop: '30px' }}>
        <Row>
            <Col xs='4'><UserCard /></Col>
            <Col xs='8'><UserObservations /></Col>
        </Row>
        </div>
    )
}

export default User;