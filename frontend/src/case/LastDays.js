import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom'

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
      }).then(res =>{
        setLastDays(res.data);
      });
    };

    fetch();
  }, [
    country,
  ]);

  return (
    <div>
      <h1>results</h1>
      <pre>{JSON.stringify(lastDays)}</pre>
    </div>
  )
};
