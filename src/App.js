import React, { useEffect, useState } from "react";
import Tournaments from "./components/Tournaments";
import useHttp from "./hooks/useHttp";
const URL = "http://localhost:3001/series";

const App = () => {
  const [tournaments, setTournaments] = useState([]);
  const { isLoading, error, sendRequest: fetchTournaments } = useHttp();

  useEffect(() => {
    const transformData = (tournamentObj) => {
      setTournaments(tournamentObj);
    };

    fetchTournaments({ url: URL }, transformData);
  }, [fetchTournaments]);

  return (
    <div className="App">
      <div className="container">
        <main>
          <Tournaments
            items={tournaments}
            loading={isLoading}
            error={error}
            onFetch={fetchTournaments}
          />
        </main>
      </div>
    </div>
  );
};

export default App;
