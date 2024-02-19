import {Link} from "react-router-dom"
import React,{useState,useEffect} from "react";
import authentification_service from "../services/authentification_service";
import NotificationWidget from "./notification_widget";

function client_nav_bar({name}){

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">{name}</Link>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to = './devices'>Devices <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to = './consumption'>Consumption <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to = './chat'>Chat <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" onClick={authentification_service.logOut} to = '..'>Log Out <span className="sr-only">(current)</span></Link>
              </li>
              
            </ul>
            <NotificationWidget></NotificationWidget>
          </div>
          
        </nav>
    
      </div>
      
    );
}

export default client_nav_bar;