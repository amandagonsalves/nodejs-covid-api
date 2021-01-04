import React from "react";

export default props => {
  const data = props.data;
  const list = data.cases;

  const List = () => {
    return list.map(item => {
      return <tr className="table__tr" key={item._id}>
        <td className="table__td">{item.body.name}</td>
        <td className="table__td">{item.body.newCases}</td>
        <td className="table__td">{item.body.deaths}</td>
        <td className="table__td">{item.body.transmissionType}</td>
        <td className="table__td">{item.body.daysSinceLastCase}</td>
        <td className="table__td">{item.body.reportDate}</td>
      </tr>
    })
  }
  return (
    <div className="container__table  container__table--results">
      <table className="table">
        <thead className="table__thead">
          <tr className="table__tr">
            <th className="table__th">Country</th>
            <th className="table__th">Cases</th>
            <th className="table__th">Deaths</th>
            <th className="table__th">Transmission type</th>
            <th className="table__th">Days since last case</th>
            <th className="table__th">Report date</th>
          </tr>
        </thead>
        <tbody className="table__tbody">
          <List />
        </tbody>
      </table>
    </div>
  )
}