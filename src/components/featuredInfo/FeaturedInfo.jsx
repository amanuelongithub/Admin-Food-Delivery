import './featuredinfo.css';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className='f-item'>
        <span className='f-title'>Revanue</span>
        <div className='f-moneyContainer'>
          <span className='f-money'>20 Birr</span>
          <span className='f-moneyRate'>
            -11.3
            <ArrowDownward className='f-icon negative'/>
          </span>
        </div>

        <span className='f-Sub'>Compared to last months</span>
      </div>
      
      
      <div className='f-item'>
        <span className='f-title'>Sales</span>
        <div className='f-moneyContainer'>
          <span className='f-money'>40 Birr</span>
          <span className='f-moneyRate'>
        -1.3
            <ArrowDownward className='f-icon negative'/>
          </span>
        </div>

        <span className='f-Sub'>Compared to last months</span>
      </div>



      <div className='f-item'>
        <span className='f-title'>Cost</span>
        <div className='f-moneyContainer'>
          <span className='f-money'>50 Birr</span>
          <span className='f-moneyRate'>
            +5.3
            <ArrowUpward className='f-icon ' />
          </span>
        </div>

        <span className='f-Sub'>Compared to last months</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
