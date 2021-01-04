import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom'
import Table from "../components/Table";
import logo from "../images/logo.png"
import Card from "../components/Card";
import LineChart from "../layout/LineChart";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const lastDaysURL = "http://localhost:3001/api/cases/last-days/";

export default () => {
  const query = useQuery();
  const [lastDays, setLastDays] = useState({
    cases: [],
    totalCases: 0,
    totalDeaths: 0,
  });

  const country = query.get('country')

  useEffect(() => {
    const fetch = () => {
      axios.get(`${lastDaysURL}${country}`, {
        params: {
          days: query.get('days'),
        },
      }).then(res => {
        setLastDays(res.data);
      });
    };

    fetch();
  }, [
    country,
  ]);

  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo" className="header__logo" />
        <h1 className="header__title">COVID-19 info</h1>
      </div>
      <Table data={lastDays} />
      <h1 className="container__charts-title">{country}: {lastDays.totalCases} cases in this period</h1>
      <LineChart data={lastDays} id="linechart" />
    </div>
  )
};
