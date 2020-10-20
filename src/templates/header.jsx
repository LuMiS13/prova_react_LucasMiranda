import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
import React from 'react';
import Menu from '../components/menu';

export default props => (
    <>
        <Menu />
        <div class="header sticky-header">
        <div class="menu-right">
        <div class="navbar user-panel-top">
            <div class="search-box">
                <form action="#search-results.html" method="get">
                    <input class="search-input" placeholder="Search Here..." type="search" id="search" />
                    <button class="search-submit" value=""><span class="fa fa-search"></span></button>
                </form>
            </div>
            <div class="profile_details">
            <ul>
              <li class="dropdown profile_details_drop">
                <a href="#/index" class="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                  aria-expanded="false">
                    <div class="profile_img">
                        <img src="../public/images/profileimg.jpg" class="rounded-circle" alt="" />
                        <div class="user-active">
                            <span></span>
                        </div>
                    </div>
                </a>
                <ul class="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                    <li class="user-info">
                        <h5 class="user-name">John Deo</h5>
                        <span class="status ml-2">Available</span>
                    </li>
                    <li> <i class="lnr lnr-user"></i>My Profile</li>
                    <li> <i class="lnr lnr-users"></i>1k Followers </li>
                    <li> <i class="lnr lnr-cog"></i>Setting </li>
                    <li> <i class="lnr lnr-heart"></i>100 Likes </li>
                    <li class="logout"> <a href="#sign-up.html"><i class="fa fa-power-off"></i> Logout</a> </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
)