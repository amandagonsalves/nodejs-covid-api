import React from "react";
import Select from "./Select";

export default props => {
  const data = props.data.allCases;

  return (
    <form action="/results" className="form">
      <fieldset className="form__fieldset">
        <div className="form__form-block">
          <Select data={data} />
          <div className="form__form-block">
            <input type="number" name="days" id="days" className="form__form-block-input" />
            <label className="form__form-block-label">days ago</label> 
          </div>
        </div>
        <button type="submit" className="btn btn-filter">Search</button>
      </fieldset>
    </form>
  )
}