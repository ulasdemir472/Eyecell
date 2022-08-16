import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function Information(){
    return(
        <div class="container-fluid cont-fluid">
        
        <button class="btn btn-light" >Change User</button>
        <div class="box remaining-use">
            <h3 id="header">My Remaining Use</h3>
            <div class="percent">
                <svg>
                    <circle cx="70" cy="70" r="70"/>
                    <circle cx="70" cy="70" r="70"/>
                </svg>
                <div class="number">
                    <h4>80<span>%</span></h4>
                </div>
            </div>
            <div class="percent2">
                <svg>
                    <circle cx="70" cy="70" r="70"/>
                    <circle cx="70" cy="70" r="70"/>
                </svg>
                <div class="number2">
                    <h4>80<span>%</span></h4>
                </div>
            </div>
            <div class="percent3">
                <svg>
                    <circle cx="70" cy="70" r="70"/>
                    <circle cx="70" cy="70" r="70"/>
                </svg>
                <div class="number3">
                    <h4>80<span>%</span></h4>
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