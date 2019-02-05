import React from 'react';
import Card from 'react-bootstrap/Card';
import UserAvatar from '../../shared/UserAvatar';

const ObservationUser = () => {
    return (
        <Card>
            <Card.Body>
                <UserAvatar />
                <hr />
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ObservationUser;