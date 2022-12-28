import "./App.css";
import { TeamsTable, OffCanvas, Search } from "./components";
function App() {
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
