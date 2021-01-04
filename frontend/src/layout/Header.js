import React from "react";
import Form from "../components/Form";
import logo from "../images/logo.png"

export default props => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <h1 className="header__title">COVID-19 info</h1>
      <div className="header__form-block">
        <Form data={props.data} />
      </div>
    </div>
  )
}