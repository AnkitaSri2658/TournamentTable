import React from "react";
import classes from "./TournamentItem.module.css";

const TournamentItem = (props) => {
  return (
    <tr className={classes.item} key={props.id}>
      <td className="col">{props.title}</td>
      <td className="col">{props.time}</td>

      {props.teams.map((team) => (
        <td className="col">
          {team.name}
          <img className={classes.logoImg} src={team.logoUrl} alt="logo" />
        </td>
      ))}
      <td className="col">{props.tournament.name}</td>
    </tr>
  );
};

export default TournamentItem;
