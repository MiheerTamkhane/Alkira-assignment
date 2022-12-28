import { Button } from "react-bootstrap";
import "./App.css";
import { TeamsTable, OffCanvas, Search } from "./components";
import { useTeams } from "./context/TeamsContext";
function App() {
  const { dispatchData } = useTeams();
  return (
    <div className="App">
      <h1 className="heading">NBA TEAMS</h1>
      <Search />
      <OffCanvas />
      <TeamsTable />
    </div>
  );
}

export default App;
