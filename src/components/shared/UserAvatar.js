import React from 'react';

import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

const UserAvatar = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Image src="holder.js/120x120" roundedCircle />
            <Card.Title>Bojan Kalanj</Card.Title>
        </div>
    )
}

export default UserAvatar;