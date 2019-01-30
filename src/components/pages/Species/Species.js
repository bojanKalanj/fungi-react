import React from 'react';

import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';

const Species = () => {
    return (
        <Table striped bordered hover variant="dark" style={{ marginTop: '30px' }}>
        <thead>
            <tr>
            <th>Ime vrste</th>
            <th>Broj nalaza</th>
            <th>Poslednji nalaz</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>
                <Link to="/">
                    Fungi
                </Link>
            </td>
            <td>99</td>
            <td>
                <Link to="/">
                    Fungus
                </Link>
            </td>
            </tr>
            <tr>
            <td>
                <Link to="/">
                    Fungi
                </Link>
            </td>
            <td>99</td>
            <td>
                <Link to="/">
                    Fungus
                </Link>
            </td>
            </tr>
            <tr>
            <td>
                <Link to="/">
                    Fungi
                </Link>
            </td>
            <td>99</td>
            <td>
                <Link to="/">
                    Fungus
                </Link>
            </td>
            </tr>
            <tr>
            <td>
                <Link to="/">
                    Fungi
                </Link>
            </td>
            <td>99</td>
            <td>
                <Link to="/">
                    Fungus
                </Link>
            </td>
            </tr>
            <tr>
            <td>
                <Link to="/">
                    Fungi
                </Link>
            </td>
            <td>99</td>
            <td>
                <Link to="/">
                    Fungus
                </Link>
            </td>
            </tr>
        </tbody>
        </Table>
    )
}

export default Species;