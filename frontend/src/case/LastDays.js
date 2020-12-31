import React from "react";
import axios from "axios";
import FilterForm from "../components/FilterForm";

const lastDaysURL = "http://localhost:3001/api/cases/last-days";

export default class LastDays extends React.Component {
  constructor() {
    super();

    this.state = { lastDaysData: [] };
    this.refresh();
  }

  refresh() {
    axios.get(lastDaysURL).then(res => console.log(res.data));
  }

  render() {
    return (
      <div>
        <h1>results</h1>
      </div>
    )
  }
}