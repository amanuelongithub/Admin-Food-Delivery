import React from "react";
import "./topbar.css";
import Admin from "../../assets/img/admin.jpg";
// import { NotificationsNone } from "@material-ui/icons";
const TopBar = () => {
  return (
    <div>
      <div className='topbar'>
        <div className='topbarWrapper'>
          <div className='left'>
            <span className='logo'>Crown Food Delivery</span>
          </div>
          <div className='right'>
            <div className='button t-account'>Light Mode</div>
           
            <div className='button t-account'>My posts</div>

            <div className='button t-account'>LogOut</div>

            <img src={Admin} className='circle-img' alt='' srcset='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
