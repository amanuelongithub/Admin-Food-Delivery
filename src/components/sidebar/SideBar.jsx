import React from "react";
import "./sidebar.css";
import Home from "../../assets/img/home.png";
import PostTo from "../../assets/img/postto.png";
import Order from "../../assets/img/order.png";
import User from "../../assets/img/user.png";
import Transaction from "../../assets/img/transaction.png";
import Stock from "../../assets/img/order.png";
import Report from "../../assets/img/report.png";
import Settings from "../../assets/img/settings.png";
import Messages from "../../assets/img/message.png";
import Mail from "../../assets/img/mail.png";
import Report2 from "../../assets/img/report_2.png";
import Bug from "../../assets/img/bug.png";
import {Use } from "@material-ui/icons";
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sb-menu'>
          <h3 className='sb-title'>Dashboard</h3>
          <ul className='sb-list'>
            <li className='sb-item active'>
              <img src={Home} className='sb-icon' alt='' srcset='' />
              Home
            </li>
            <li className='sb-item'>
              <img src={PostTo} className='sb-icon' alt='' srcset='' />
              PostTo
            </li>
            <li className='sb-item sb-order'>
              <div className="sb-center">
              <img src={Order} className='sb-icon' alt='' srcset='' />
              Orders
              </div>
              <div className="bag">15</div>
            </li>
          </ul>
        </div>
      </div>
      <div className='sidebarWrapper'>
        <div className='sb-menu'>
          <h3 className='sb-title'>Quick Menu</h3>
          <ul className='sb-list'>
            <li className='sb-item'>
              <img src={User} className='sb-icon' alt='' srcset='' />
              User
            </li>
            <li className='sb-item'>
              <img src={Transaction} className='sb-icon' alt='' srcset='' />
              Transaction
            </li>
            <li className='sb-item'>
              <img src={Stock} className='sb-icon' alt='' srcset='' />
              Stock
            </li>
            <li className='sb-item'>
              <img src={Report} className='sb-icon' alt='' srcset='' />
              Report
            </li>
            <li className='sb-item'>
              <img src={Settings} className='sb-icon' alt='' srcset='' />
              Settings
            </li>
          </ul>
        </div>
      </div>

      <div className='sidebarWrapper'>
        <div className='sb-menu'>
          <h3 className='sb-title'>Notiffication</h3>
          <ul className='sb-list'>
            <li className='sb-item'>
              <img src={Mail} className='sb-icon' alt='' srcset='' />
              Mail
            </li>
            <li className='sb-item'>
              <img src={Messages} className='sb-icon' alt='' srcset='' />
              Message
            </li>
          </ul>
        </div>
      </div>
      <div className='sidebarWrapper'>
        <div className='sb-menu'>
          <h3 className='sb-title'>Staff</h3>
          <ul className='sb-list'>
            <li className='sb-item'>
              <img src={Bug} className='sb-icon' alt='' srcset='' />
              Bug
            </li>
            <li className='sb-item'>
              <img src={Messages} className='sb-icon' alt='' srcset='' />
              FeedBack
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
