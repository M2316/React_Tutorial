import React,{useState} from "react";
import logo from '../assets/investment-calculator-logo.png';

import styles from './Header.css';

export default function Header(props){
    return (
        <header className="header">
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
      </header>
    );
}