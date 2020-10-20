import 'bootstrap/dist/css/bootstrap.css';
import './menu.css';
import React from 'react';

export default props => (
        <section>
            <div class="sidebar-menu sticky-sidebar-menu">
                <div class="logo">
                    <h1><a href="#/index">Collective</a></h1>
                </div>
                <div class="logo-icon text-center">
                    <a href="#/index" title="logo"><img src="../public/images/logo.png" alt="logo-icon" /></a>
                </div>
                <div class="sidebar-menu-inner">
                    <ul class="nav nav-pills nav-stacked custom-nav">
                        <li><a href="index.html"><i class="fa fa-tachometer"></i><span> Dashboard</span></a></li>
                        <li><a href="cards.html"><i class="fa fa-cogs"></i> <span>Default cards</span></a></li>
                        <li><a href="pricing.html"><i class="fa fa-table"></i> <span>Pricing tables</span></a></li>
                        <li><a href="blocks.html"><i class="fa fa-th"></i> <span>Content blocks</span></a></li>
                        <li><a href="forms.html"><i class="fa fa-file-text"></i> <span>Forms</span></a></li>
                    </ul>
                </div>
            </div>
        </section>
    
)
