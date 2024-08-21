import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright,faEnvelope,faHome } from '@fortawesome/fontawesome-free-solid'

import style from "./Footer.module.css";

export default function () {
  return (
    <div>

  {/* Ash Footer  */}


      <div className={style.footerTop}>
       
        <div>
          <h2>Cars</h2>
          <h4>How to Buy Sell Your Car</h4>
          <h4>Finance & Insurance</h4>
          <h4>Auctions & Events</h4>
          <h4>Buyer & Seller Fees</h4>
          <h4>Vehicle Sale Price History Tool</h4>
          <h4>Shipping Costs</h4>
        </div>

        <div>
          <h2>Finance & Insurance</h2>
          <h4>Finance Homepage</h4>
          <h4>Car & Personal Finance</h4>
          <h4>Loan Calculator</h4>
          <h4>Car Insurance</h4>
          <h4>Mechanical Breakdown Insurance</h4>
          <h4>General Insurances</h4>
          <h4>Trucks Finance</h4>
          <h4>Financial Information</h4>
        </div>

        <div>
          <h2>Search For</h2>
          <h4>Cars</h4>
          <h4>Trucks & Machinery</h4>
          <h4>Damaged & End of Life Cars</h4>
          <h4>Boats & Marine</h4>
          <h4>Motorcycles & Scooters</h4>
          <h4>General Goods</h4>
          <h4>Buses, Caravans & Motorhomes</h4>
          <h4>Turners Auction Schedule</h4>
        </div>
      </div>
{/* **Black Footer** */}


      <div className={style.footerBottom}>
      <div>
<a className={style.copyRight}><FontAwesomeIcon icon={faCopyright} /> 2024Turners</a> 
        </div>
    

     
        <a><FontAwesomeIcon icon={faHome} />Branch Details</a>
      <a><i className="fa fa-facebook-f"></i> Facebook</a>
        <a><FontAwesomeIcon icon={faEnvelope} /> News Letter</a>
        <a><FontAwesomeIcon icon={faEnvelope} /> Email Alert</a>
        <a><i className="fa fa-instagram"></i>Instagram</a>
      </div>
    </div>
  );
}
