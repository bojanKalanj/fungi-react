import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Badge from 'react-bootstrap/Badge';

const UserCard = () => {
    return (
        <Card>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>Bojan Kalanj</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Registrovan <Badge className="float-right" variant="success">01.30.2019</Badge> </ListGroupItem>
                <ListGroupItem>Broj nalaza <Badge className="float-right" variant="success">99</Badge> </ListGroupItem>
                <ListGroupItem>Broj vrsta <Badge className="float-right" variant="success">99</Badge> </ListGroupItem>
                <ListGroupItem>Broj komentara <Badge className="float-right" variant="success">56</Badge> </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Facebook</Card.Link>
                <Card.Link href="#">Instagram</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default UserCard;