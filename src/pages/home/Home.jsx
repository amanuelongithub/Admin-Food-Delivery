import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import UserList from "../../components/userlist/UserList";
import "./home.css";
  
export default function Home() {
  return <div className='home'>
        <FeaturedInfo/>
        <Chart/>    
        <div className="homeWidgets">
        <UserList/>
        </div>
  </div>;
}
