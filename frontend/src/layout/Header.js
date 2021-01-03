import React from "react";
import { Link } from "react-router-dom";
import FilterForm from "../components/FilterForm";
import logo from "../images/logo-covid.png"

export default props => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <h1 className="header__title">COVID-19 info</h1>
      <div className="header__form-block">
        <FilterForm data={props.data} />
      </div>
    </div>
  )
}