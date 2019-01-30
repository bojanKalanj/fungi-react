import React from 'react';

import Card from 'react-bootstrap/Card';

const UserObservationCard = () => {
    return (
            <Card style={{ marginBottom: '30px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Text>
                        Some quick example
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}

export default UserObservationCard;