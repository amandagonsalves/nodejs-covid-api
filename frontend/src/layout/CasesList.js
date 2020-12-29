import React from "react";
import DataCards from "../components/DataCards";
import MyChart from "./Chart";

export default props => {
  const data = props.data;
  const list = data.allCases;
  const totalCases = data.totalCases;
  const totalDeaths = data.totalDeaths;

  // const List = () => {
  //   return list.map(item => {
  //     return <ul key={item._id}>
  //       <li>{item.body.name}</li>
  //       <li>{item.body.cases}</li>
  //       <li>{item.body.newCases}</li>
  //     </ul>
  //   });
  // }

  const countries = () => {
    const names = [];

    list.map(item => {
      return names.push(item.body.name);
    });

    return names;
  }
 
  return (
    <div>
      {/* <List /> */}
      <DataCards totalCases={totalCases} totalDeaths={totalDeaths} />
      <MyChart countries={countries()} cases={[1,9,4]} />
    </div>
  );
}