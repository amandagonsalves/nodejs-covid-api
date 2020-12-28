import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <div className="header">
      <h1>LOGO</h1>
      <Link to="/filter" className="btn btn-filter">Filtrar resultados</Link>
    </div>
  )
}