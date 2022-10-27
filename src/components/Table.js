
import TableFilter from "react-table-filter";
import React, { useState } from "react";
import classes from './Table.module.css';
import "react-table-filter/lib/styles.css";

const Table = (props) => {
  const [data, setData] = useState(props.items);

  let TimeConverter = (dateStr) => {
    const d = new Date(dateStr);
    const time = d.toLocaleTimeString("it-IT", { timeStyle: "short" });
    return time;
  };

  const filterUpdated = (newData, filtersObject) => {
    setData(newData);
  };

  const elementsHtml = data.map((item) => {
    const name = item.tournament.name
    return (
      <tr className={classes.item} key={item.id}>
        <td >{item.title}</td>
        <td >{TimeConverter(item.startTime)}</td>

        {item.teams.map((team) => (
          <td >
            {team.name}
            <img className={classes.logoImg} src={team.logoUrl} alt="logo" />
          </td>
        ))}
        <td >{name}</td>
      </tr>
    );
  });

  return (
    
      <table>
        <thead>
          <TableFilter rows={data} onFilterUpdate={filterUpdated}>
            <th
              key="title"
              filterkey="title"
              casesensitive={"true"}
              showsearch={"true"}
            >
              TITLE
            </th>
            <th key="startTime">TIME</th>
            <th key="team1">TEAM1</th>
            <th key="team2">TEAM2</th>
            <th
              key="tournament.name"
              filterkey="tournament.name"
              casesensitive={"true"}
              showsearch={"true"}
            >
              TOURNAMENT
            </th>
          </TableFilter>
        </thead>
        {elementsHtml}      
      </table>
  );
}

export default Table;
