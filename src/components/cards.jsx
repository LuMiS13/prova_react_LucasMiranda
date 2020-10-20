import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

export default props => (
    <div class="card">
        <img src="../public/images/{props.image}" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text mb-4">{props.description}</p>
        </div>
    </div>
)