import "./userlist.css";
import av1 from "../../assets/img/users/av1.jpg";
import av2 from "../../assets/img/users/av2.jpg";
import av3 from "../../assets/img/users/av3.jpg";
import av4 from "../../assets/img/users/av4.jpg";
import av5 from "../../assets/img/users/av5.jpg";
import av6 from "../../assets/img/users/av6.jpg";
import av7 from "../../assets/img/users/av7.jpg";
import av8 from "../../assets/img/users/av8.jpg";
import av9 from "../../assets/img/users/av9.jpg";
import av10 from "../../assets/img/users/av10.jpg";
import av11 from "../../assets/img/users/av11.jpg";
import av12 from "../../assets/img/users/av12.jpg";
import av13 from "../../assets/img/users/av13.jpg";

export default function UserList() {
  return (
    <div className='userlist'>
      <h2 className='ul-title'>Recent Order List</h2>
      {/* <table className="ul-container">

      </table> */}
      <div className='ul-container'>
        <div className='item item-0'></div>
        <div className='item item-1'>Full name</div>
        <div className='item item-2'>Order</div>
        <div className='item item-3'>Rate</div>
        <div className='item item-4'>Date</div>
        <div className='item item-4'>is Dileverd</div>

        <div className='profile'>
          {" "}
          <img src={av1} className='ul-profile' alt='' srcset='' />
        </div>
        <div className='item item-1'>Amanuel Gulelat</div>
        <div className='item item-2'>itlina pizza</div>
        <div className='item item-3'>4.5</div>
        <div className='item item-4'>Today 7:45</div>
        <div className='item item-5'>Dliverd</div>

        <div className='profile'>
          {" "}
          <img src={av5} className='ul-profile' alt='' srcset='' />
        </div>
        <div className='item item-1'>Ahadu Kassahun</div>
        <div className='item item-2'>Beef fry</div>
        <div className='item item-3'>4.5</div>
        <div className='item item-4'>Yesturday 2:35</div>
        <div className='item item-5'>Dliverd</div>

        <div className='profile'>
          {" "}
          <img src={av3} className='ul-profile' alt='' srcset='' />
        </div>
        <div className='item item-1'>Selam Mathios</div>
        <div className='item item-2'>Hunter's chiken </div>
        <div className='item item-3'>3.5</div>
        <div className='item item-4'>Mon 8:35</div>
        <div className='item item-5'>Dliverd</div>

        <div className='profile'>
          {" "}
          <img src={av4} className='ul-profile' alt='' srcset='' />
        </div>
        <div className='item item-1'>Amanuel Gulelat</div>
        <div className='item item-2'>itlina pizza</div>
        <div className='item item-3'>4.5</div>
        <div className='item item-4'>Tue 7:45</div>
        <div className='item item-5'>Dliverd</div>

        <div className='profile'>
          {" "}
          <img src={av6} className='ul-profile' alt='' srcset='' />
        </div>
        <div className='item item-1'>Kalkidan teka</div>
        <div className='item item-2'>Beef fry</div>
        <div className='item item-3'>Tue 4.5</div>
        <div className='item item-4'>Wed 2:35</div>
        <div className='item item-5'>Dliverd</div>

        <div className='profile'>
          {" "}
          <img src={av7} className='ul-profile' alt='' srcset='' />
        </div>
        <div className='item item-1'>Endalk Tamiru</div>
        <div className='item item-2'>Hunter's chiken </div>
        <div className='item item-3'>3.5</div>
        <div className='item item-4'>8:35</div>
        <div className='item item-5'>Dliverd</div>

        <div className='profile'>
          {" "}
          <img src={av8} className='ul-profile' alt='' srcset='' />
        </div>
        <div className='item item-1'>Kidus Elias</div>
        <div className='item item-2'>Fish fride</div>
        <div className='item item-3'>4.5</div>
        <div className='item item-4'>Thu 7:45</div>
        <div className='item item-5'>Dliverd</div>

        <div className='profile'>
          {" "}
          <img src={av9} className='ul-profile' alt='' srcset='' />
        </div>
        <div className='item item-1'>Abel Kassahun</div>
        <div className='item item-2'>Burger</div>
        <div className='item item-3'>4.5</div>
        <div className='item item-4'>Fri 2:35</div>
        <div className='item item-5'>Dliverd</div>

        <div className='profile'>
          {" "}
          <img src={av10} className='ul-profile' alt='' srcset='' />
        </div>
        <div className='item item-1'>Yman Mathios</div>
        <div className='item item-2'>Pizza </div>
        <div className='item item-3'>3.5</div>
        <div className='item item-4'>Mon 8:35</div>
        <div className='item item-5'>Dliverd</div>
      </div>
    </div>
  );
}
