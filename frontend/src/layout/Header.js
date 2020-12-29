import React from "react";
import { Link } from "react-router-dom";
import FilterForm from "../case/FilterForm";
import logo from "../images/logo-covid.png"

export default props => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <div className="header__form-block">
        <FilterForm />
        <Link to="/filter" className="btn btn-filter">Filtrar resultados</Link>
      </div>
    </div>
  )
}