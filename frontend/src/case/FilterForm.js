import React from "react";

export default props => {
  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <div className="form__input-block">
          <input type="text" name="country" id="country" className="form__input-block-input"></input>
          <input type="date" name="date" id="date" className="form__input-block-input"></input>
        </div>
      </fieldset>
    </form>
  )
}