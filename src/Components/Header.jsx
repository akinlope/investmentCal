import React from "react";
import logo from "../assets/investment-calculator-logo.png"

export const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="Site logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};