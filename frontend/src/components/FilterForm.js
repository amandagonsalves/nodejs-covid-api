import React from "react";

export default props => {
  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <div className="form__form-block">
          <select type="text" name="country" id="country" className="form__form-block-select">
            <option value="0">Select a country</option>
          </select>
          <input type="date" name="date" id="date" className="form__form-block-input"></input>
        </div>
      </fieldset>
    </form>
  )
}