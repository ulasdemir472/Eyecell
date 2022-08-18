import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import logo from "./images/logo_final_1.png";


function Information() {
  return (
    <div class="container-fluid cont-fluid">
      
      <img src={logo} id="logo" alt="logo" />

      <Link to="/">
        <button class="btn btn-light">Log out</button>
      </Link>

      <div class="box remaining-use">
        <h3 id="header">My Remaining Use</h3>
        <div class="percent">
          <svg>
            <circle cx="70" cy="70" r="70" />
            <circle cx="70" cy="70" r="70" />
          </svg>
          <div class="number">
            <h4>
              80<span>%</span>
            </h4>
          </div>
          <div className="info-dakika">
            <h3 id="dakika">
              80/100 <span>DK</span>
            </h3>
          </div>
          <div className="info-internet">
            <h3 id="internet">
              80/100 <span>GB</span>
            </h3>
          </div>
          <div className="info-sms">
            <h3 id="sms">
              80/100 <span>SMS</span>
            </h3>
          </div>
        </div>

        <div class="percent2">
          <svg>
            <circle cx="70" cy="70" r="70" />
            <circle cx="70" cy="70" r="70" />
          </svg>
          <div class="number2">
            <h4>
              80<span>%</span>
            </h4>
          </div>
        </div>

        <div class="percent3">
          <svg>
            <circle cx="70" cy="70" r="70" />
            <circle cx="70" cy="70" r="70" />
          </svg>
          <div class="number3">
            <h4>
              80<span>%</span>
            </h4>
          </div>
        </div>
      </div>
      <div class="box user-info">
        <h3 id="header">User info</h3>
        
      </div>
      <div class="box date">
        <h3 id="header">When will it ends</h3>
      </div>
    </div>
  );
}

export default Information;
