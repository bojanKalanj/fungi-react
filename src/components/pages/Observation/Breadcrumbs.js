import React from 'react';

const Breadcrumbs = () => {
    return (
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">vrsta</a></li>
            <li class="breadcrumb-item"><a href="#">podvrsta</a></li>
            <li class="breadcrumb-item active" aria-current="page">observation</li>
        </ol>
    )
}

export default Breadcrumbs;