import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Header from '../templates/header';
import Routes from '../main/routes';
import Footer from '../templates/footer';

export default props => (
    <div className="container">
        <Header />
        <Routes />
        <Footer />
    </div>  

)

