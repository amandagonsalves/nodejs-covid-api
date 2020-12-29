import React from "react";
import axios from "axios";
import CasesList from "../layout/CasesList";
import Header from "../layout/Header";

const allCasesURL = "http://localhost:3001/api/cases/all";

export default class Cases extends React.Component {
  constructor() {
    super();

    this.state = { allData: { allCases: [], totalCases: ''} };
    this.refresh();
  }

  refresh() {
    axios.get(allCasesURL).then(res => this.setState({ ...this.state, allData: res.data }));
  }

  render() {
    return (
      <div>
        <Header />
        <CasesList data={this.state.allData} />
      </div>
    )
  }
}