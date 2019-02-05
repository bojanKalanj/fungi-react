import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ObservationImage from './ObservationImage';
import UserCard from './UserCard';
import ObservationInfo from './ObservationInfo';
import Breadcrumbs from './Breadcrumbs';

const Observation = () => {
    return (
        <div>
            <h3>observation name <span className="text-muted">(vrsta)</span> </h3> 
            <Breadcrumbs />
            <Row>
                <Col xs={6} md={6}>
                    <ObservationImage />
                </Col>
                <Col xs={6} md={3}>
                    <ObservationInfo />
                </Col>
                <Col xs={6} md={3}>
                    <UserCard />
                </Col>
            </Row>
        </div>
    )
}

export default Observation;