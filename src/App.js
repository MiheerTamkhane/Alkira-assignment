import { Button } from "react-bootstrap";
import "./App.css";
import { TeamsTable, OffCanvas } from "./components";
function App() {
  return (
    <div className="App">
      <h1 className="heading">NBA TEAMS</h1>
      <OffCanvas />
      <TeamsTable />
    </div>
  );
}

export default App;
