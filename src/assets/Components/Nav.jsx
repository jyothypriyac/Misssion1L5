import Style from "./Nav.module.css";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

export default function Nav() {
  return (
    <div>
      <div>
     {/* first navbar */}
        <div>
          <img src="/image/TurnersCar.jpg" className={Style.image} />
        </div>

        <div className={Style.topNavOne}>
          <a>LOGIN Or REGISTER</a>
          <a>0800 887 637</a>
          <a>Find Us</a>
          <a>中文</a>
        </div>

        {/* second navbar */}
      </div>

      <div className={Style.topNavTwo}>
      <a><FontAwesomeIcon icon={faSearch} /> Find a car</a>
        <a>How to buy</a>
        <a>sell a car</a>
        <a>Finance and subcription</a>
        <a>Turners subcription</a>
        <a>Auctions</a>
        <a>Service & info</a>
      </div>
    </div>
  );
}
