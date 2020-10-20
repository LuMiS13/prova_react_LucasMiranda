import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

export default props => (
    <div class="col mb-4">
        <div class="card">
            <img src="../public/images/{props.image}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional
                content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
)