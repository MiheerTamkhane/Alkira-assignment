import {
  useContext,
  useState,
  useEffect,
  createContext,
  useReducer,
} from "react";
import { filterBySearch, sortingHandler } from "../utils/filterUtils";
import { getTeamsService } from "../services";
import { reducer, initialState } from "../reducer/reducer";
const TeamsContext = createContext();

const TeamsProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const [data, dispatchData] = useReducer(reducer, initialState);
  const [showCanvas, setShowCanvas] = useState(false);
  const [teamDetails, setTeamDetails] = useState({});
  const [selectedTeam, setSelectedTeam] = useState(null);
  const sortedData = sortingHandler(teams, data.sort);
  const searchedData = filterBySearch(sortedData, data?.query);
  const indexOfLastPost = data.currentPage * data.teamsPerPage;
  const indexOfFirstPost = indexOfLastPost - data.teamsPerPage;
  const currentTeams = searchedData?.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    (async () => {
      const response = await getTeamsService();
      setTeams(response.data);
      if (response.data.length > 0) {
        dispatchData({ type: "LOADING", payload: false });
      }
    })();
  }, []);

  useEffect(() => {
    setTeamDetails(teams?.find((team) => team.id === selectedTeam));
  }, [selectedTeam, teams]);
  return (
    <TeamsContext.Provider
      value={{
        teams,
        showCanvas,
        setShowCanvas,
        currentTeams,
        dispatchData,
        data,
        searchedData,
        selectedTeam,
        setSelectedTeam,
        teamDetails,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};

const useTeams = () => {
  const context = useContext(TeamsContext);
  if (context === undefined) Error("TeamsContext error!");

  return context;
};

export { TeamsProvider, useTeams };
