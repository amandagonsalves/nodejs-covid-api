import React from "react";
import Select from "./Select";

export default props => {
  const data = props.data.allCases;

  return (
    <form action="/results" className="form">
      <fieldset className="form__fieldset">
        <div className="form__form-block">
          <Select data={data}/>
          <input type="number" name="days" id="days" className="form__form-block-input" />
        </div>
        <button type="submit" className="btn btn-filter">Search</button>
      </fieldset>
    </form>
  )
}