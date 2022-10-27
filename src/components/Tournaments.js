import React from "react";
//import TournamentItem from "./TournamentItem";
import Section from "./UI/Section";
import classes from "./Tournaments.module.css";
import Table from "./Table";

const Tournaments = (props) => {
  console.log("props.items->", props.items);
  let tournamentList = (
    <div className={classes.wrapperDiv}>
      <h3>No tournaments found.</h3>
    </div>
  );

  if (props.items.length > 0) {
    tournamentList = <Table items={props.items}/>
  }

  let content = tournamentList;

  /* TODO: Show Error message on errors */
  if (props.error) {
    content = <button onClick={props.onFetch}>Try Again</button>;
  }

  /* TODO: Show a spinner while new tournaments are being loaded */
  if (props.loading) {
    content = (
      <div className={classes.loader}>
        <p>Loading tournaments...</p>
      </div>
    );
  }
  return (
    <Section>
      <div>{content}</div>
    </Section>
  );
};
export default Tournaments;
