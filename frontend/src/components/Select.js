import React from "react";
import { getFields } from "../layout/getData";

export default props => {
  const list = props.data;

  const RenderOption = () => {
    const names = getFields(list, 'name').sort();

    return names.map((name, i) => {
      return <option key={i} value={name}>{name}</option>
    });
  }

  return (
    <select name="country" id="country" className="form__form-block-select">
      <option value="0">Select a country</option>
      <RenderOption />
    </select>
  )
}