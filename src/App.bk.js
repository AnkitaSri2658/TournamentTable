import "./styles.css";
import TableFilter from "react-table-filter";
import React,{ useState } from "react";
import SampleData from "./data.json";

export default function App() {
  const [episodes, setEpisodes] = useState(SampleData._embedded.episodes);
  console.log(SampleData._embedded.episodes);

  const filterUpdated = (newData, filtersObject) => {
    setEpisodes(newData);
  };

  const elementsHtml = episodes.map((item, index) => {
    return (
      <tr key={"row_" + index}>
        <td className="col">{item.name}</td>
        <td className="col">{item.season}</td>
        <td className="col">{item.airtime}</td>
        <td className="col">{item.number}</td>
      </tr>
    );
  });

  return (
    <div className="container">
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <TableFilter rows={episodes} onFilterUpdate={filterUpdated}>
            <th
              key="name"
              filterkey="name"
              casesensitive={"true"}
              showsearch={"true"}
            >
              Name
            </th>
            <th key="season">Season</th>
            <th key="airtime" className="w-100">
              Air Time
            </th>
            <th key="number" filterkey="number">
              Number
            </th>
          </TableFilter>
        </thead>
        <tbody>{elementsHtml}</tbody>
      </table>
    </div>
  );
}
